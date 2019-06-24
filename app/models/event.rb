# == Schema Information
#
# Table name: events
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  creator_id        :integer          not null
#  group_id          :integer          not null
#  event_picture_url :string
#  longitude         :float            not null
#  latitude          :float            not null
#  start_time        :date             not null
#  end_time          :date             not null
#  details           :text             not null
#  price             :float
#  public            :boolean          default(TRUE)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Event < ApplicationRecord
    validates :title, :creator_id, :group_id, :details, :longitude, :latitude, 
    :start_time, :end_time, presence: true

    belongs_to :group
    
    belongs_to :user,
        class_name: :User, 
        foreign_key: :creator_id
end
