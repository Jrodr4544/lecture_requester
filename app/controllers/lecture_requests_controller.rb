class LectureRequestsController < ApplicationController
  # before_action :authenticate_user, only: [:create, :destroy, :edit]
  before_action :set_lecture_request, only: [:show, :comment_lecture_request, :heart_lecture_request, :destroy]

  def index
    @lectureRequests = LectureRequest.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @lectureRequests, root: true}
    end
  end

  def show
    if user_signed_in?
      render json: @lectureRequest, root: true
    end
  end

  def create
    @lectureRequest = current_user.lecture_requests.build(title: lecture_request_params[:title], content: lecture_request_params[:content])
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your Lecture Request was posted.'
      render json: @lectureRequest, status: 201
    else
      render json: @lectureRequest, status: 404
    end
  end

  def update
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your Lecture Request was updated.'
      render json: @lectureRequest, status: 201
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def heart_lecture_request
    # if the user already liked the request don't add to the requests user_likes
    if @lectureRequest.user_likes.include?(current_user)
      @lectureRequest.hearts.find_by(user_id: current_user.id).destroy
      flash.now[:notice] = 'You already liked this Lecture Request.'
      render json: @lectureRequest, status: 201
    else
      @lectureRequest.user_likes << current_user
      @lectureRequest.save 
      flash.now[:notice] = 'Thanks! You liked this Lecture Request.'
      render json: @lectureRequest, status: 201
    end
  end

  def comment_lecture_request
    @lectureRequest.comments.create(text: params[:comment],user_id: current_user.id,lecture_request_id: params[:lecture_request][:id])
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your comment was posted to this Lecture Request.'
      render json: @lectureRequest, status: 201
    else
      render json: @lectureRequest, status: 404
    end
  end

  def liked_requests
    if current_user
      @likedRequests = current_user.hearts.map {|heart| heart.lecture_request}
      render json: @likedRequests, status: 201
    else
      render status: 404
    end
  end

  def destroy
    if @lectureRequest.user.id == current_user.id
      Comment.where("lecture_request_id = ?", @lectureRequest.id).each { |comment| comment.destroy }
      Heart.where("lecture_request_id = ?", @lectureRequest.id).each { |heart| heart.destroy }
      if @lectureRequest.destroy
        flash.now[:notice] = 'You\'ve deleted this Lecture Request.'
        render json: current_user, status: 201
      else
        render status: 404
      end
    end
  end

  private

    def set_lecture_request
      @lectureRequest = LectureRequest.find(params[:id])
    end

    def lecture_request_params
      params.require(:lecture_request).permit(:id, :title, :content, :comment)
    end

end