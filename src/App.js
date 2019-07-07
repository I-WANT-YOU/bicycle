import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import './App.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }


    render() {
        console.log(this.state.isLogin)
        return (
            <div className="App">
                <HashRouter>
                    {/*{*/}
                        {/*this.state.isLogin ? <Route exact path='/admin' component={Admin}/>*/}
                            {/*: <Route path='/login' component={Login}/>*/}
                    {/*}*/}
                    {this.state.isLogin ? <Admin/>
                    : <Login/>}
                </HashRouter>
            </div>
        );
    }
}

