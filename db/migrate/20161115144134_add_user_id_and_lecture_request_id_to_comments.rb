class AddUserIdAndLectureRequestIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :user_id, :integer
    add_column :comments, :lecture_request_id, :integer
  end
end
