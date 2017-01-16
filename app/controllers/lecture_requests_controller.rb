class LectureRequestsController < ApplicationController
  # before_action :authenticate_user, only: [:create, :destroy, :edit]
  before_action :set_lecture_request, only: [:show, :comment_lecture_request, :heart_lecture_request, :destroy]

  def index
    @lectureRequests = LectureRequest.all
    # binding.pry
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
    # binding.pry
    @lectureRequest = current_user.lecture_requests.build(title: lecture_request_params[:title], content: lecture_request_params[:content])
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your Lecture Request was posted.'
      # rendering the object, unless redirecting to show page then we wont need this line below
      render json: @lectureRequest, status: 201
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
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
    # binding.pry
    # if the user already liked the request don't add to the requests user_likes
    if @lectureRequest.user_likes.include?(current_user)
      # binding.pry
      @lectureRequest.hearts.find_by(user_id: current_user.id).destroy
      flash.now[:notice] = 'You already liked this Lecture Request.'
      render json: @lectureRequest, status: 201
    else
      # binding.pry
      @lectureRequest.user_likes << current_user
      @lectureRequest.save 
      flash.now[:notice] = 'Thanks! You liked this Lecture Request.'
      render json: @lectureRequest, status: 201
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def comment_lecture_request
    # binding.pry
    # @lectureRequest.comments.build(lecture_request_params[:comments])
    @lectureRequest.comments.create(text: params[:comment][:text],user_id: current_user.id,lecture_request_id: params[:lecture_request][:id])
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your comment was posted to this Lecture Request.'
      render json: @lectureRequest, status: 201
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def liked_requests
    # binding.pry
    if current_user
      @likedRequests = current_user.hearts.map {|heart| heart.lecture_request}
      render json: @likedRequests, status: 201
    else
      render status: 404
    end
  end

  def destroy
    binding.pry
    if @lectureRequest.user.id == current_user.id
      binding.pry
      Comment.where("lecture_request_id = ?", @lectureRequest.id).each { |comment| comment.destroy }
      Heart.where("lecture_request_id = ?", @lectureRequest.id).each { |heart| heart.destroy }
      if @lectureRequest.destroy
        binding.pry
        flash.now[:notice] = 'You\'ve deleted this Lecture Request.'
        # redirect_to user_path(current_user), notice: 'You\'ve deleted this Lecture Request.'
        render json: current_user, status: 201
      else
        render status: 404
        # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
      end
    end
  end

  private

    def set_lecture_request
      @lectureRequest = LectureRequest.find(params[:id])
    end

    def lecture_request_params
    binding.pry
      params.require(:lecture_request).permit(:id, :title, :content, :comment)
    end

end