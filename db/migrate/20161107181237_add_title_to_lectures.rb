class AddTitleToLectures < ActiveRecord::Migration[5.0]
  def change
    add_column :lectures, :title, :string
  end
end
