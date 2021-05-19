import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/pages' 
import './App.css'

export default function App() {
    return(
        <Router>
            <Switch>
                <Route path ='/' component={Home} exact />
            </Switch>
        </Router>
    )
}