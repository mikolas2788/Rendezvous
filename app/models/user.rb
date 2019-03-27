# == Schema Information
#
# Table name: users
#
#  id                  :bigint(8)        not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  first_name          :string
#  last_name           :string
#  profile_picture_url :string
#  bio                 :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  longitude           :float
#  latitude            :float
#

class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true

    attr_reader :password

    after_initialize :ensure_token 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end 

    def password=(password) 
        @password = password
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

    def self.generate_token 
        SecureRandom::urlsafe_base64
    end 

end
