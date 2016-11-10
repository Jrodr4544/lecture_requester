class CreateLectureRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :lecture_requests do |t|

      t.timestamps
    end
  end
end
