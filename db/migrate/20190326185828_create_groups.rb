class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.string :group_picture_url
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.text :about, null: false
      t.boolean :public, default: true
      t.index :title
      t.index :creator_id
      t.timestamps
    end
  end
end
