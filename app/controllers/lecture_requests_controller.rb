class LectureRequestsController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy, :edit]

  def index
    @lectureRequests = LectureRequest.all

    render json: @lectureRequests
  end

end