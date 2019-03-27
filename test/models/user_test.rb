# == Schema Information
#
# Table name: users
#
#  id                  :bigint(8)        not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  profile_picture_url :string
#  bio                 :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  longitude           :float
#  latitude            :float
#  name                :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
