class FixUser < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.remove :username
    end 
  end
end
