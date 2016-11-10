class CreateHearts < ActiveRecord::Migration[5.0]
  def change
    create_table :hearts do |t|
      t.references :user, foreign_key: true
      t.references :lecture_request, foreign_key: true

      t.timestamps
    end
  end
end
