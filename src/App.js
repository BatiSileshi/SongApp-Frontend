
import Header from './components/Header';
import SongList from './components/SongList';
import SongStats from './components/SongStats';
import SongForm from './components/SongForm';

import { SongProvider } from './context/SongContext'; 


function App() { 


  return (

     <SongProvider>
    <Header />  
      <div className="song">
       {/* passing song props to SongList  - goto SongList*/}
       <SongForm />
       <SongStats />
      <SongList />
        
      </div>

      </SongProvider>
     
  );
}

export default App;
