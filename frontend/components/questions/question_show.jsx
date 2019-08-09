import React from 'react';
import QuestionItem from './question_item';
import AnswerNewContainer from '../answers/answer_new_container';
import AnswerIndexContainer from '../answers/answer_index_container';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpvote = this.handleUpvote.bind(this);

        this.question_vote = {
            user_id: this.props.currentUser.id,
            question_id: this.props.questionId,
            upvoted: true
        }
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
        this.props.fetchAllVotes(this.props.questionId);
    }


    handleUpvote(e) {
        e.preventDefault();
        this.props.upvoteQuestion(this.question_vote)
            .then(() => this.props.history.push(`/questions/${this.props.questionId}`))
    }

    // handleDownvote(e) {
    //     e.preventDefault();
    //     this.props.downvoteQuestion()
    //         .then(() => this.props.history.push(`/questions/${this.props.questionId}`))
    // }

    render() {
        const {question} = this.props;
        // if (!question) {
        //     return null;
        // 
        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        if (!question) return null;

        // if (Object.keys(this.props.questionVotes).length === 0) {
        //     debugger;
        //     return null;
        // }


        let editOption;

        if (this.props.currentUser === null) {
            editOption = null
        } else if (this.props.currentUser.id === question.author_id) {
            editOption = <Link to={`/questions/${this.props.questionId}/edit`}>Edit Question</Link>
        } else {
            editOption = null
        }


        if (this.props.currentUser === null) {
            return (

                <div className="question-show">

                    <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                    <p className="edit-question-btn">{editOption}</p>

                    <h2>{this.props.question.title}

                    </h2>
                    {this.props.question.body}

                    <button className="upvote-button" onClick={this.handleUpvote}>Upvote Me</button>
                    <div className="question-vote">{this.props.questionVotes.length}</div>
                    
                    <p>Asked by: {this.props.question.username}</p>

                    <AnswerIndexContainer questionId={this.props.questionId} />

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
        } else {
            return (

                <div className="question-show">

                    <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                    <p className="edit-question-btn">{editOption}</p>
                    <h2 className="question-header">{this.props.question.title}
                        
                    </h2>
                    <div className="question-body">{this.props.question.body}</div>
                    <button className="upvote-button" onClick={this.handleUpvote}></button>
                    <div className="question-vote">{Object.keys(this.props.questionVotes).length}</div>

                    <p className="asked-by">Asked by: {this.props.question.username}</p>

                    <AnswerIndexContainer questionId={this.props.questionId} />



                    <AnswerNewContainer questionId={this.props.questionId} />

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
        }

        // <button onClick={this.handleSubmit}>Post Your Answer</button>

        // return (
            
        //     <div className="question-show">


        //         <h2>{this.props.question.title}</h2>
        //         {this.props.question.body}
        //         <p>Asked by: {this.props.question.username}</p>

        //         <AnswerIndexContainer questionId={this.props.questionId} />

                
        //         <AnswerNewContainer questionId={this.props.questionId} />
                
        //         {/* {localStorage.getItem([this.props.match.params.questionId])} */}
        //     </div>
        // )
    }

}


export default QuestionShow;