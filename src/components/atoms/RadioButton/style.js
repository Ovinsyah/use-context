import Styled from 'styled-components';
import color from 'assets/style';

export const RadiobuttonComponent = Styled.div`
  display: inline-flex;
  align-items: center;
`
export const InputRadiobutton = Styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 18px;
  max-height: 18px;
  min-width: 18px;
  max-width: 18px;
  display: inline-block;
  margin: 0;
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 50%;
  position: relative;
  &:focus{
    outline: none;
  }
  &:checked{
    border: 1px solid ${color.primary};
    border-radius: 50%;
    transition: all 0.7s;
  }
  &:checked::after{
    content: "";
    height: 100%;
    width: 100%;
    background: ${color.primary};
    border: 3px solid white;
    border-radius: 4px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  &::checked:after{
    display: block;
  }
`
export const LabelRadiobutton = Styled.label`
  cursor: pointer;
  height: 18px;
  padding: 4px 0px 0px 7px;
`