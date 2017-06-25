/**
 * Created by Mittapalli on 6/23/2017.
 */
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../ActionCreators/loginAction';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    render(){
        const {userName,password} = this.state;

        return(

            <form name="loginForm" >
                <label>Email:</label>

                <input type="text"    value={userName} onChange={e => this.setState({userName: e.target.value})} ></input><br/>
                <label>Password:</label>
                <input type="password"    value={password} onChange={e => this.setState({password: e.target.value})} ></input><br/>
                <button   onClick={() => {

                    var user = {userName : userName,
                                password:password};
                    history.push("/success");
                    return this.props.loginUser(user);
                }}> submit</button>
            </form>
        );

    }

}
function mapStateToProps(state) {
    return {
        state
    };
}
function matchDispatchToProps(dispatch){
    //const {dispatch} = this.props;
   // console.log(this.props)

    return bindActionCreators({loginUser:loginUser}, dispatch);

}

export default connect(mapStateToProps,matchDispatchToProps)(Login);



