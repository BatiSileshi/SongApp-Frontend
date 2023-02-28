import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SongList from './components/SongList';
import SongStats from './components/SongStats';
import SongForm from './components/SongForm';
import SongData from './data/SongData';



function App() { 
  const [song, setSong] = useState(SongData)

  const addSong = (newSong) => {
    newSong.id = uuidv4()
    setSong([newSong, ...song])
  }

  const deleteSong = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setSong(song.filter((item) => item.id !== id));
    }

  }
  return (
     <>
    <Header />  
      <div className="song">
       {/* passing song props to SongList  - goto SongList*/}
       <SongForm handleAdd={addSong}/>
       <SongStats song={song}/>
      <SongList song={song} handleDelete={deleteSong}/>
        
      </div>

      </>
  );
}

export default App;
