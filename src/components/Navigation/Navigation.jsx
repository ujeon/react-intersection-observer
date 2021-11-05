import React from 'react';
import { Nav } from './styles';

const Navigation = (props) => {
  const { hexCode } = props;

  return (
    <Nav>
      <h2>Hex Code 💅🏻 : {hexCode}</h2>
    </Nav>
  )
}

export default Navigation
