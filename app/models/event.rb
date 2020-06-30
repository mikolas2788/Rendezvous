# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  group_id   :integer          not null
#  details    :text             not null
#  price      :float
#  public     :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  location   :string           not null
#

class Event < ApplicationRecord
    validates :title, :creator_id, :group_id, :details, :location,
    :start_date, :end_date, presence: true

    belongs_to :group
    
    belongs_to :user,
        class_name: :User, 
        foreign_key: :creator_id

    has_many :rsvps,
        class_name: :Rsvp,
        foreign_key: :event_id
end
