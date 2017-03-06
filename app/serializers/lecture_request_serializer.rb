class LectureRequestSerializer < ActiveModel::Serializer
  attributes :id, :content, :title

  has_many  :comments
  has_many  :user_likes
end
#  might need a ser serializer