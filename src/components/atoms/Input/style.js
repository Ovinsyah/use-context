import Styled, { css } from 'styled-components';

export const Input = Styled.input`
    margin: 0;
    max-width: 100%;
    flex: 1 0 auto;
    outline: 0;
    text-align: left;
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    background: #fff;
    border: 1px solid #c4c4c4;
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    ${props => props.full && css`
        width: 100%;
    `}
`;