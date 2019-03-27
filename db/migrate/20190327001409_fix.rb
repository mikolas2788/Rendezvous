class Fix < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
    t.remove :longitude
    t.remove :latitude
    t.column :longitude, :float 
    t.column :latitude, :float
    end 
  end
end
