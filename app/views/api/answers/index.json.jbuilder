json.array! @answers do |answer|
    json.partial! 'api/answers/answer', answer: answer
    json.extract! answer.user, :username
    json.extract! answer.question, :title
end