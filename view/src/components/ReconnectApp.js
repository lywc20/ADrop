import React from 'react';
import Header from './Header';
import SignUp from './SignUp';
export default class Reconnect extends React.Component {

    render() {

        return (
        <div>
         <Header subtitle="Are they out there?" />

        <SignUp />
        </div>
        )
    };
};