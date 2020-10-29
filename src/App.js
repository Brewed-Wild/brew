import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import HistoryPage from './components/HistoryPage/HistoryPage';
import HomePage from './components/HomePage/HomePage';
import RecipesPage from './components/RecipesPage/RecipesPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
     

      </div>
      <Footer/>
    </Router>

  );
}

export default App;
