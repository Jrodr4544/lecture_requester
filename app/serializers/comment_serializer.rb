class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :lecture_request_id, :commenter_username

  belongs_to :lecture_request_id
  belongs_to :user_id

  def commenter_username
    object.user.username
  end
end