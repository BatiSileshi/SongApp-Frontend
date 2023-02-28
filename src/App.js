import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header';
import SongList from './pages/SongList';
import Song from './pages/Song';

function App() { 
  return (
    <Router>  
      <div className="container">
        
      
      <div className="app">
        
   
      <Header />  
      <Routes>  
        <Route path="/" exact element={<SongList />} />  
        <Route path="/song/:id" element={<Song />} />
   
      </Routes>  
      </div>
      </div>
    </Router> 

  );
}

export default App;
