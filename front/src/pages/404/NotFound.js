import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => (
  <div className='NotFound'>
      404
        <Link to="/" className='btn ' >بازگشت به خانه</Link>

  </div>
);

export default NotFound;