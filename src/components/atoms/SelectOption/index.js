import React from 'react';
import { Select, Option } from './style';
const index = (props) => {
  return (
    <Select defaultValue={props.defaultValue.value}>
      {
        props.options.map((option) =>{
          return(
            <Option defaultValue={option.value} key={option.value}>{option.label}</Option>
          )
        })
      }
    </Select>
  )
}

export default index
