class CreateQuestionVotes < ActiveRecord::Migration[5.2]
  def change
   drop_table :question_votes
  end
end
