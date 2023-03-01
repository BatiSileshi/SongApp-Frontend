import React from 'react'
import { Link } from 'react-router-dom';
import SongForm from '../components/SongForm';

function Form() {
  return (
    <div>
        <Link to='/'>Back</Link>
      <SongForm/>
    </div>
  )
}

export default Form
