class UsersController < ApplicationController
  # before_action authenticate_user, only: [:edit]
  before_action :set_user

  def show
    @user
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

end