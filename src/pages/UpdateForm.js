import React from 'react'
import { Link } from 'react-router-dom';
import UpdForm from '../components/UpdForm';

function Form() {
  return (
    <div>
        <Link to='/'>Back</Link>
      <UpdForm/>
    </div>
  )
}

export default Form
