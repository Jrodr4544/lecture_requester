class LectureRequestSerializer < ActiveModel::Serializer
  attributes :id, :content, :title

  has_many  :comments
  has_many  :user_likes
  # belongs_to :user
  # has_many :hearts
end
