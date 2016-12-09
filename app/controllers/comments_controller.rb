class CommentsController < ApplicationController
  # before_action :authenticate_user, only: [:create, :destroy, :edit]
  before_action :set_comment, only: [:show]

  def user_comment
    
  end

  private

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
    binding.pry
      params.require(:comment).permit(:id, :title, :content, :comment)
    end

end