import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';



export default () => {
    let display = (
        <span>
            <Link className="home-tab" to="/questions">Home</Link>
            <br />
            <Link className="home2-tab" to="/questions">Yoricks Stacks</Link>
            {/* <Link className="tags-tab" to="/">Sign Up</Link> */}
        </span>
    );

    // const { match, location, history } = this.props

    if (window.location.hash === "#/signup" || window.location.hash === "#/login" || window.location.hash === "#/newquestion") {
        display = null;
    }

    return (
        <header className="left-nav-bar">
            {/* <img src={window.img} className="mainlogo" /> */}
            {/* <Link className="logo" to="/">YoricksStacks</Link> */}
            {/* <p className="logo">Yoricks</p> */}
            {/* <p className="logo2">Stacks</p> */}
            <span>
                {display}
            </span>
        </header>
    )


}