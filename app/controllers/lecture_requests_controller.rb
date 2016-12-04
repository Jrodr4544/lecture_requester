class LectureRequestsController < ApplicationController
  # before_action :authenticate_user, only: [:create, :destroy, :edit]
  before_action :set_lecture_request, only: [:show]

  def index
    @lectureRequests = LectureRequest.all
    # binding.pry
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @lectureRequests, root: true}
    end
  end

  def show
    if current_user
      render json: @lectureRequest, root: true
    end
  end

  def create
    binding.pry
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
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def heart_lecture_request
    @lectureRequest.user_likes.build(user_id: current_user.id)
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! You liked this Lecture Request.'
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def comment_lecture_request
    @lectureRequest.comments.build(lecture_request_params[:comments])
    if @lectureRequest.save
      flash.now[:notice] = 'Thank you! Your comment was posted to this Lecture Request.'
    else
      render json: @lectureRequest, status: 404
      # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
    end
  end

  def destroy
    if @lectureRequest.user == current_user.id
      Comment.where("lecture_request_id = ?", @lectureRequest.id).each { |comment| comment.destroy }
      Heart.where("lecture_request_id = ?", @lectureRequest.id).each { |heart| heart.destroy }
      if @lectureRequest.destroy
        flash.now[:notice] = 'You\'ve deleted this Lecture Request.'
      else
        render json: @lectureRequest, status: 404
        # try - render json: {errors: @lectureRequest.errors.full_messages}, status: unprocessable_entity
      end
    end
  end

  private

    def set_lecture_request
      @lectureRequest = LectureRequest.find(params[:id])
    end

    def lecture_request_params
    # binding.pry
      params.require(:lecture_request).permit(:title, :content)
    # might need to add comments
    end

end