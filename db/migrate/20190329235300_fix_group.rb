class FixGroup < ActiveRecord::Migration[5.2]
  def change
    change_table :groups do |t|
      t.remove :longitude
      t.remove :latitude
      t.column :longitude, :float 
      t.column :latitude, :float
    end 
  end
end
