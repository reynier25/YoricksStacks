class Answer < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

    belongs_to :question,
    class_name: :Question,
    primary_key: :id,
    foreign_key: :question_id

    
end



def dig_root(num)
    return num if num < 10

    return (num % 10) + dig_root(num / 10)
end