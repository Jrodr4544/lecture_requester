class AddContentToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :lecture_requests, :title, :string
  end
end
