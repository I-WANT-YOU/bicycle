import React from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import App from '../App'
import Admin from '../pages/admin/admin'

export default class navLeft extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path = '/admin' component = {Admin}/>
                </App>
            </Router>
        );
    }

}

