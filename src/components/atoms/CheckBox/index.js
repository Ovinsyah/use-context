import React from 'react';
import { InputCheckbox, LabelCheckbox, CheckboxComponent } from './style';
const index = (props) => {
  return (
    <CheckboxComponent>
      <InputCheckbox type="checkbox" id={props.id} defaultChecked={props.checked}/>
      <LabelCheckbox htmlFor={props.id}>
        {props.children}
      </LabelCheckbox>
    </CheckboxComponent>
  )
}

export default index
