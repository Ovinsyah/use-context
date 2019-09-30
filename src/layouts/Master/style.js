import Styled from 'styled-components';

export const MainLayout = Styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;
export const SideBarMenu = Styled.div`
  flex-basis: 0;
  flex-grow: 1;
  background: #FFFFFF;
  max-width: 220px;
  `;
export const ContentBar = Styled.div`
  flex-basis: 0;
  flex-grow: 1;
  background: #eaeef1;
  padding: 20px 20px 50px;
`;