import React from 'react'
import { Button } from './style';

export default (props) => {
  return (
    <Button { ...props }>{ props.children }</Button>
  )
}
