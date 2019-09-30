import Styled, { css } from 'styled-components';
import color from 'assets/style';

const loading = css`
  &::after{
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Button = Styled.button`
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  margin-bottom: .25em;
  padding: .78571429em 1.5em .78571429em;
  text-transform: none;
  text-shadow: none;
  line-height: 1em;
  text-align: center;
  text-decoration: none;
  border-radius: .28571429rem;
  user-select: none;
  transition: all .3s ease;
  color: white;
  &:not(:last-child){
    margin-right: .25em;
  }
  ${props => !props.outline && props.theme === 'is-primary' && css`
    background: ${color.primary};
    border: 1px solid ${color.primary};
  `};
  ${props => !props.outline && props.theme === 'is-secondary' && css`
    background: ${color.secondary};
    border: 1px solid ${color.secondary};
  `};
  ${props => !props.outline && props.theme === 'is-gray' && css`
    background: ${color.gray};
    border: 1px solid ${color.gray};
  `};
  ${props => !props.outline && props.theme === 'is-dark' && css`
    background: ${color.dark};
    border: 1px solid ${color.dark};
  `};
  ${props => !props.outline && props.theme === 'is-danger' && css`
    background: ${color.danger};
    border: 1px solid ${color.danger};
  `};
  ${props => !props.outline && props.theme === 'is-warning' && css`
    background: ${color.warning};
    border: 1px solid ${color.warning};
  `};
  ${props => !props.outline && props.theme === 'is-black' && css`
    background: #000000;
    border: 1px solid #000000;
  `};
  ${props => !props.outline && props.theme === 'is-white' && css`
    background: #FFFFFF;
    color: ${color.text};
    border: 1px solid #FFFFFF;
  `};
  /* outline */
  ${props => props.outline  && css`
    background: transparent;
    color: gray;
    border: 1px solid gray;
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: gray transparent gray transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-primary' && css`
    border: 1px solid ${color.primary};
    color: ${color.primary};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.primary} transparent ${color.primary} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-secondary' && css`
    border: 1px solid ${color.secondary};
    color: ${color.secondary};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.secondary} transparent ${color.secondary} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-gray' && css`
    border: 1px solid ${color.gray};
    color: ${color.gray};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.gray} transparent ${color.gray} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-dark' && css`
    border: 1px solid ${color.dark};
    color: ${color.dark};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.dark} transparent ${color.dark} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-danger' && css`
    border: 1px solid ${color.danger};
    color: ${color.danger};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.danger} transparent ${color.danger} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-warning' && css`
    border: 1px solid ${color.warning};
    color: ${color.warning};
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: ${color.warning} transparent ${color.warning} transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-black' && css`
    border: 1px solid #000000;
    color: #000000;
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: #000 transparent #000 transparent;
      }
    `}
  `};
  ${props => props.outline && props.theme === 'is-white' && css`
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    ${props => props.loading && css`
      ${loading};
      &::after{
        border-color: #FFF transparent #FFF transparent;
      }
    `}
  `};
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: .6;
  `};

  ${props => props.loading && css`
    color: transparent;
    position: relative;
    ${props => !props.outline && css`
      ${loading};
      ${props => props.theme === 'is-white' && css`\
        &::after{
          border-color: #000 transparent #000 transparent;
        }
      `}
    `}
  `};

`