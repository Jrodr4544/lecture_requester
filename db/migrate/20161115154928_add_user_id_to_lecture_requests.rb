class AddUserIdToLectureRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :lecture_requests, :user_id, :integer
  end
end
