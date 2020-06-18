# == Schema Information
#
# Table name: rsvps
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  status     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rsvp < ApplicationRecord
    validates :user_id, :event_id, presence: true

    belongs_to :user
    belongs_to :event

end
