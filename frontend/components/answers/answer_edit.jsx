import React from 'react';
// import QuestionItem from './question_item';
// import AnswerNewContainer from '../answers/answer_new_container';
// import AnswerIndexContainer from '../answers/answer_index_container';
import { Link } from 'react-router-dom';
// import QuestionNewContainer from './question_new_container';

class AnswerEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            author_id: this.props.author_id.id,
            id: this.props.answerId,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAnswer(this.props.answerId)
            .then(() => this.setState({ body: this.props.answer.body }));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateAnswer(this.state)
            .then(() => this.props.history.push(`/questions/${this.props.answer.question_id}`))
    }

    // componentDidUpdate() {
    //     true;
    // }


    render() {

        const { answer } = this.props;
        // if (!question) {
        //     return null;
        // 

        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        // if (!question.title) return null;



        // if (this.props.currentUser === null) {
        //     return (

        //         <div className="question-show">

        //             <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
        //             <h2>{this.props.question.title}

        //             </h2>
        //             {this.props.question.body}
        //             <p>Asked by: {this.props.question.username}</p>

        //             <AnswerIndexContainer questionId={this.props.questionId} />

        //             {/* {localStorage.getItem([this.props.match.params.questionId])} */}
        //         </div>
        //     )
        // } else {
        return (

            <div className="answer-edit">

                {/* //     <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                //     <h2 className="question-header">{this.props.question.title}

                //     </h2>
                //     <div className="question-body">{this.props.question.body}</div>
                //     <p>Asked by: {this.props.question.username}</p>

                //     <AnswerIndexContainer questionId={this.props.questionId} />


                //     <AnswerNewContainer questionId={this.props.questionId} /> */}


                <h2>Edit your answer</h2>
                <div></div>
                <form>
                    {/* <textarea cols="30" rows="10" value={this.state.title} onChange={this.handleInput('title')}></textarea> */}
 
                    <br />
                    <label>Body
                        <br />
                        {/* <input type="text" value={this.state.body} onChange={this.handleInput('body')} /> */}
                        <textarea cols="102" rows="20" value={this.state.body} onChange={this.handleInput('body')}></textarea>


                    </label>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Post Your Answer</button>
                </form>
            </div>
        )
    }

}

// }


export default AnswerEdit;