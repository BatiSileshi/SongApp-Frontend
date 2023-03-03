
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SongList from './components/SongList';
import SongStats from './components/SongStats';
import Form from './pages/Form';
import UpdateForm from './pages/UpdateForm';
import { SongProvider } from './context/SongContext'; 
import {  useState } from "react";

function App() { 
  const [refresh, setRefresh] = useState(0);


  const refreshData = () => {
    setRefresh((prevRefresh) => prevRefresh + 1);
  };


  return (

     <SongProvider>
      <Router>
    <Header />  
      <div className="song">
        <Routes>
        
        <Route exact path='/' element={
          <>

       <SongStats refreshData={refreshData} />

      <SongList key={refresh} refreshData={refreshData}/>
          </>
        }>
       {/* passing song props to SongList  - goto SongList*/}

      </Route>

      <Route path ='/songs/add' element={<Form refreshData={refreshData} />}/>
      <Route path ='/songs/:id/update' element={<UpdateForm refreshData={refreshData} />}/>
      </Routes>
     
      </div>
      </Router>
      </SongProvider>
     
  );
}

export default App;
