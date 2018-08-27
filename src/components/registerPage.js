import React, { Component } from 'react';

import '../supports/loginPage.css';

class registerPage extends Component {

    render() {

        return(
            <div className="backGroundColor">
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container">
                    <div className="card card-container">
                        
                        <p className="logoLogin">GENTLEMEN.</p>
                        <p className="welcome">Please Register Your ID</p>
                        
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"></span>

                            <input ref="userName" type="text" id="userName" className="form-control" placeholder="User Name" required autofocus />
                            <input ref="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input ref="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                            <input type="button" className="btn btn-lg btn-primary btn-block btn-signin" 
                                   value="Register Now" onClick={this.onLoginClick} />
                        </form>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default registerPage;