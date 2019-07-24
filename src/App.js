import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import './App.less';
import store from './redux/store';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <HashRouter>
                        {/*{*/}
                        {/*this.state.isLogin ? <Route exact path='/admin' component={Admin}/>*/}
                        {/*: <Route path='/login' component={Login}/>*/}
                        {/*}*/}
                        {this.state.isLogin ? <Admin/>
                            : <Login type='dddddd'/>}
                    </HashRouter>
                </div>
            </Provider>

        );
    }
}

