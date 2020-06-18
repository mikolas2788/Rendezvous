class RemoveEventpictureurlFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :event_picture_url, :string
  end
end
