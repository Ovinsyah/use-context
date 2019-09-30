import Styled, {css} from 'styled-components';

export const Table = Styled.table`
  width: 100%;
  background: #fff;
  text-align: left;
  border-spacing: 0;
  font-size: 14px;
  td,th{
    padding: 0.78571429em 0.78571429em;
    border-bottom: 1px solid #ececec;
  }
  ${props => props.striped && css`
    tbody tr:nth-of-type(odd){
      background: #f7f7f7;
    }
  `}
  ${props => props.bordered && css`
    border: 1px solid #eaeaea;
    border-radius: 3px;
    tr th:not(:last-child) {
      border-right: 1px solid #fff;
    }
    tr td{
      border: 0px solid #eaeaea;
      border-width: 0px 1px 1px 0px;
    }
  `}
`
export const Thead = Styled.thead`
  border-spacing: 0;
  background: #e4e4e4;
`
export const Tbody = Styled.tbody`
`