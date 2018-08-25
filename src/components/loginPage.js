import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../supports/loginPage.css';

class loginPage extends Component {

    onLoginClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let username = "";
        let check= false;
        
        
        for (let index in this.props.usersData) {
            if(this.props.usersData[index].email == email && 
               this.props.usersData[index].password == password)
            {
                check = true;
                username = this.props.usersData[index].username;
                break;
            }
        }

        if( check ) {
            <Link to='/' />
            console.log('masuk sini');
        }
    }

    render() {
        console.log(this.props.usersData);

        return(
            <div className="backGroundColor">
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container">
                    <div className="card card-container">
                        <p className="welcome">Welcome,</p>
                        <p className="logoLogin">GENTLEMEN.</p>
                        
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"></span>

                            <input ref="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input ref="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>

                            <input type="button" className="btn btn-lg btn-primary btn-block btn-signin" 
                                   value="Sign in" onClick={this.onLoginClick} />
                        </form>
                        
                        <a href="#" className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
        
    const users = state.users;
    return { usersData: users};
}

export default connect(mapStateToProps)(loginPage);