import './App.css';
import{Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Header from './components/Header';



const App = () => {
  return 
    <>
      
      <Header/>

      <Routes>
        <Route path='/' element =
        {<Home />} /> 

        <Route path='/countrydetails/:id' element =
        {<CountryDetails />} />   
      </Routes>

    </>;
  
}

export default App

