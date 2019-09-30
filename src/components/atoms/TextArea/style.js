import Styled, {css} from 'styled-components';

export const TextArea = Styled.textarea`
  margin: 0;
  padding: .78571429em 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  outline: 0;
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  box-shadow: 0 0 0 0 transparent inset;
  line-height: 1.2857;
  ${props => props.full && css`
    width: 100%;
  `}
`