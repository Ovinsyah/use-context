import Styled from 'styled-components';

export const GridsComponent = Styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`
export const GridComponent = Styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: ${props => props.width || '100%'};
  padding: 10px;
`;