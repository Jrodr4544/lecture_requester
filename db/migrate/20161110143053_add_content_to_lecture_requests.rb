class AddContentToLectureRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :lecture_requests, :content, :text
  end
end
