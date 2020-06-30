class AddLocationToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :location, :string, null: false
    change_column_null :events, :start_date, false
    change_column_null :events, :end_date, false
  end
end
