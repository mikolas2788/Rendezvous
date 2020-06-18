class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :start_date, :datetime
    add_column :events, :end_date, :datetime
  end
end
