import React, {forwardRef} from 'react';
import { Board } from './styles';

const ColorBoard = (props, ref) => {
  const { color } = props;
  return (
    <Board backgroundColor={color} ref={ref} />
  )
}

export default forwardRef(ColorBoard);
