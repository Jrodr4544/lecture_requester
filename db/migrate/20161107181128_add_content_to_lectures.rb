class AddContentToLectures < ActiveRecord::Migration[5.0]
  def change
    add_column :lectures, :content, :text
  end
end
