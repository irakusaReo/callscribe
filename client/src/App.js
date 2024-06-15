import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/pages/Dashboard';
import Admin from './components/pages/Admin';
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <PrivateRoute exact path='/admin' component={Admin} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
