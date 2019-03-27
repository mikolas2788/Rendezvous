class FixName < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.remove :first_name
      t.remove :last_name 
      t.column :name, :string
    end 
  end
end
