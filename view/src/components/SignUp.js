import React from 'react';

const SignUp = () => {
    return (
        <div className="container">
            <form>
            <h2>Create a new account</h2>
            <p>It's free and always will be</p>
            <p><input placeholder="First name"></input> <input placeholder="Last name"></input></p>
            <p>Email:<input placeholder="johnsmith@gmail.com"></input></p>
            <p>Phone Number:</p><input placeholder="xxx-xxx-xxxx"></input>
            <p>Password: <input placeholder=" (A-Z+a-z+0-9, case-sensitive) "></input></p>
            <p>Reconfirm Password: <input placeholder=" (A-Z+a-z+0-9, case-sensitive) "></input></p>
            <button onClick={console.log('Thank you for signing up.')}>Submit</button>
            </form>
        </div>
    );
}

export default SignUp;