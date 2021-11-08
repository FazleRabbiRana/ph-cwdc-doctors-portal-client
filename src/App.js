import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<PrivateRoute path="/appointment">
							<Appointment />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
