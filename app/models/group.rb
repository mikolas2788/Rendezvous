# == Schema Information
#
# Table name: groups
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  creator_id        :integer          not null
#  group_picture_url :string
#  about             :text             not null
#  public            :boolean          default(TRUE)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  longitude         :float
#  latitude          :float
#  location          :string
#

class Group < ApplicationRecord
    
    validates :title, :about, :creator_id, presence: true

    belongs_to :organizer,
        class_name: :User, 
        foreign_key: :creator_id 

    has_many :memberships 

    has_many :members, 
        through: :memberships, 
        source: :member 
    
end
