# == Schema Information
#
# Table name: groups
#
#  id                :bigint(8)        not null, primary key
#  title             :string           not null
#  creator_id        :integer          not null
#  group_picture_url :string
#  longitude         :float            not null
#  latitude          :float            not null
#  about             :text             not null
#  public            :boolean          default(TRUE)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Group < ApplicationRecord
end