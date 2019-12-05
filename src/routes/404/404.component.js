import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ErrorPage extends Component {
    state = {
        redirect: false,
    };

    componentDidMount() {
        setTimeout(() => this.setState({redirect: true}), 10000);
    }


    render() {
        const { redirect } = this.state;

        return(
            redirect ? <Redirect to="/"/> :  <div>404</div>
        )
    }
}

export default ErrorPage;