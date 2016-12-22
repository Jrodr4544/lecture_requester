class UsersController < ApplicationController
  # before_action authenticate_user, only: [:edit]

  def show
    binding.pry
    if user_signed_in?
      respond_to do |format|
        format.html { render :show }
        format.json { render json: current_user, include: ['lecture_requests.comments', 'lecture_requests.user_likes']}
      end
    end
  end

  def edit
    @user
  end

  def update
    binding.pry
    @user = @trip.objectives.find(params[:id])

    if @user.update(params)
      redirect_to user_path(current_user), notice: 'User was successfully updated.'
    else
      render :edit
    end
  end

end