import './App.css';
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Info from './components/InfoSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Contact from './components/Contact';

export default function App() {
    return(
        <Router>
            <Navbar />
            <MainSection />
            <Info />
            <Contact />
        </Router>
    )
}