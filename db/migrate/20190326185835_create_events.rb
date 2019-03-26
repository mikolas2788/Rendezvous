class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.integer :group_id, null: false
      t.string :event_picture_url
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.date :start_time, null: false
      t.date :end_time, null: false
      t.text :details, null: false
      t.float :price 
      t.boolean :public, default: true
      t.index :title
      t.index :creator_id
      t.index :group_id
      t.timestamps
    end
  end
end
