class Addlocation < ActiveRecord::Migration[5.2]
  def change
    change_table :groups do |t|
      t.column :location, :string
    end 
  end
end
