class LectureRequestsController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy, :edit]
  before_action :set_lecture_request, only: [:show]

  def index
    @lectureRequests = LectureRequest.all

    render json: @lectureRequests
  end

  def show
    render json: @lectureRequest
  end

  private

  def set_lecture_request
    @lectureRequest = LectureRequest.find(params[:id])
  end

end