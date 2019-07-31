class Question < ApplicationRecord

    validates :body, presence: true

    belongs_to :user,
    class_name: :User
    primary_key: :id,
    foreign_key: :author_id

    

end
