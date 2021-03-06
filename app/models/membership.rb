# == Schema Information
#
# Table name: memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
    
    validates :user_id, :group_id, presence: true 
    
    belongs_to :member,
        class_name: :User, 
        foreign_key: :user_id

    belongs_to :group

end
