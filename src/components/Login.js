import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <label for="userName"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="UserName" required></input>

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" requred></input>

                    <button type="submit">Login</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;