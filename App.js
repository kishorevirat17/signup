import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Route path='/' component={LoginButton} exact />
      <Route path='' component={Profile} />
    </Router>
  
  );
}

export default App;
