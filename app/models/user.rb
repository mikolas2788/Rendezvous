# == Schema Information
#
# Table name: users
#
#  id                  :bigint(8)        not null, primary key
#  username            :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  first_name          :string
#  last_name           :string
#  profile_picture_url :string
#  bio                 :text
#  longitude           :float            not null
#  latitude            :float            not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, :longitude,
    :latitude, presence: true
    validates :username, :email, :session_token, uniquess: true

    attr_reader :password

    after_initialize :ensure_session_token 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end 

    def password=(password) 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_token 
        self.update!(session_token: User.generate_token)
        self.session_token
    end 

    def ensure_token 
        self.session_token ||= User.generate_token
    end 

    def generate_token 
        SecureRandom::urlsafe_base64
    end 

end
