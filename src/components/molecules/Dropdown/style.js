import Styled, { css } from 'styled-components';
import color from 'assets/style';

export const SectionDropdown = Styled.div`
  position: relative;
  display: inline-block;
  margin: 0 .25em .25em 0;
  min-width: ${props => props.full ? '100%':'180px'};
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-right: 24px;
    width: 100%;
  }
  ${props => !props.themeButton && css`
    button{
      color: ${color.text};
      border: 1px solid silver;
      background: transparent;
    }
  `}
  ${props => props.outline && props.active && css`
    button{
      border-radius: .28571429rem .28571429rem 0 0;
    }
  `}
`
export const MenuDropdown = Styled.div`
  border: 1px solid silver;
  padding: 10px 15px;
  border-radius: .28571429rem;
  position: absolute;
  width: 100%;
  z-index: 99;
  background: white;
  ${props => props.active ? css`
    top: 40px;
    transition: all .3s;
    opacity: 1;
  `:css`
    top: 0px;
    visibility: hidden;
    opacity: 0;
    transition: opacity .3s;
  `}
  ${props => props.outline && props.active && css`
    top: 36px;
    border-top: none;
    border-radius: 0 0 .28571429rem .28571429rem;
  `}
`
export const Item = Styled.div`
  padding: 5px 0;
  cursor: pointer;
`
export const Arrow = Styled.span`
  ${props => props.color === 'black' ? 
    css`border: solid black;`:css`border: solid white;`
  }
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  right: 11px;
  ${props => props.position === 'up' && css`
  transform: rotate(45deg);
  transition: all .3s;
  `}
  ${props => props.position === 'down' && css`
  transform: rotate(-135deg);
  transition: all .3s;
  `}
`