import React from 'react';
import {Title, SectionTitle} from './style'
const index = (props) => {
  return (
    <SectionTitle>
      <Title {...props}>{ props.children }</Title>
    </SectionTitle>
  )
}

export default index
