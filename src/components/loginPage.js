import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onLogin } from '../actionCreator';

import '../supports/loginPage.css';

class loginPage extends Component {

    onLoginClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        this.props.onLogin({ email, password});
    }

    render() {
        console.log(this.props.usersData);

        if(this.props.usersData.username == "" ) {
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
        
        // else if(this.props.usersData[0].password != this.refs.password.value ) {
        //     return(
        //         <div className="backGroundColor">
        //             <br/>
        //             <br/>
        //             <br/>
        //             <br/>
    
        //             <div className="container">
        //                 <div className="card card-container">
        //                     <p className="welcome">Welcome,</p>
        //                     <p className="logoLogin">GENTLEMEN.</p>
                            
        //                     <form className="form-signin">
        //                         <span id="reauth-email" className="reauth-email"></span>
    
        //                         <input ref="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        //                         <input ref="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                
        //                         <p>Autentication Failed</p>
                               

        //                         <div id="remember" className="checkbox">
        //                             <label>
        //                                 <input type="checkbox" value="remember-me" /> Remember me
        //                             </label>
        //                         </div>
    
        //                         <input type="button" className="btn btn-lg btn-primary btn-block btn-signin" 
        //                                value="Sign in" onClick={this.onLoginClick} />
        //                     </form>
                            
        //                     <a href="#" className="forgot-password">
        //                         Forgot the password?
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
                
        //     );
        // }

        return <Redirect to="/" />
        
    }
}

const mapStateToProps = (state) => {
        
    const userLogin = state.users;
    return { usersData: userLogin};
}

export default connect(mapStateToProps, { onLogin })(loginPage);