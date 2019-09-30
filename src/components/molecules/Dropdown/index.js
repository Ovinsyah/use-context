import React, { useState } from 'react';
import { SectionDropdown, MenuDropdown, Item, Arrow } from './style';
import Button from 'components/atoms/Button';

export const DropdownItem = (props) => {
  return(
    <Item>{props.children}</Item>
  )
}
const Index = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  document.addEventListener('click', function(e){
    const isTerget = e.target.matches('#'+props.keyDropdown);
    if(!isTerget){
      setShowDropdown(false);
    }
  })
  console.log(props.themeButton)
  return (
    <SectionDropdown {...props} active={showDropdown}>
      <Button theme={props.themeButton} id={props.keyDropdown} onClick={() => setShowDropdown(!showDropdown)}>
      {props.label}
      { props.arrow && <Arrow color={ (!props.themeButton || props.themeButton=== 'is-white') && 'black'} outline={props.outline} position={showDropdown ? 'down':'up'}/> }
      </Button>
      <MenuDropdown active={showDropdown} outline={props.outline}>{props.children}</MenuDropdown>
    </SectionDropdown>
  )
}

export default Index
