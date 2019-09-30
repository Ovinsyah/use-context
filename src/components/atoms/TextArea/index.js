import React from 'react';
import { TextArea } from './style';

const index = (props) => {
  return (
    <TextArea {...props}>
      { props.children }
    </TextArea>
  )
}

export default index
