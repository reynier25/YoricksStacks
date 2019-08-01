import { RECEIVE_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, { [action.question.id]: action.question });
        case RECEIVE_QUESTIONS:
            const questions = {};
            action.questions.forEach(question => {
                questions[question.id] = question;
            });
            return questions;
        default:
            return state
    }


}
