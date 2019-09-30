import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './style'

export default (props) =>{
  const Heading = () =>{
    switch(props.size){
      case 'is-1':
        return <Heading1 { ...props }>{ props.children }</Heading1>
      case 'is-2':
        return <Heading2 { ...props }>{ props.children }</Heading2>
      case 'is-3':
        return <Heading3 { ...props }>{ props.children }</Heading3>
      case 'is-4':
        return <Heading4 { ...props }>{ props.children }</Heading4>
      case 'is-5':
        return <Heading5 { ...props }>{ props.children }</Heading5>
      case 'is-6':
        return <Heading6 { ...props }>{ props.children }</Heading6>
      default:
        return <Heading1 {...props}>{ props.children }</Heading1>
    }
  }
  return(
    <Heading />
  )
}