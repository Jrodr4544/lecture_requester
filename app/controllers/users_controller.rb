class UsersController < ApplicationController
  # before_action authenticate_user, only: [:edit]
  before_action :set_user

  def show
    @user
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @user, include: ['lecture_requests.comments', 'lecture_requests.user_likes']}
    end
  end

  private

  def set_user
    binding.pry
    @user = current_user
  end

end