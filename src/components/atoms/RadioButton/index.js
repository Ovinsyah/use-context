import React from 'react';
import { InputRadiobutton, LabelRadiobutton, RadiobuttonComponent } from './style';
const index = (props) => {
  return (
    <RadiobuttonComponent>
      <InputRadiobutton type="radio" id={props.id} defaultChecked={props.checked} name={props.name}/>
      <LabelRadiobutton htmlFor={props.id}>
        {props.children}
      </LabelRadiobutton>
    </RadiobuttonComponent>
  )
}

export default index
