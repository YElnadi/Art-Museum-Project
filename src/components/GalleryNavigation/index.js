import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryNavigation = ({galleries}) => {
  return (
    <nav>
    <h1>Galleries</h1>
    <NavLink to='/'>Home</NavLink>
    {
        galleries.map(gallery =>(<li>  <NavLink to = {`/galleries/${gallery.id}`} key={gallery.id} >{gallery.name}</NavLink> </li>))
    } 
    </nav>
  );
}

export default GalleryNavigation;
