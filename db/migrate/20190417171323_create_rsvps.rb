class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.integer :user_id, null: false 
      t.integer :event_id, null: false
      t.boolean :status 
      t.timestamps
    end
  end
end
