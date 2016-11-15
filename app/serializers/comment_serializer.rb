class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text

  belongs_to :lecture_request_id
  belongs_to :user_id
end