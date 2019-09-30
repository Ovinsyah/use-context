import Styled from 'styled-components';

export const Sidebar = Styled.div`
  padding: 20px;
`
export const ListMenu = Styled.div`
  line-height: 1;
  padding: 10px 0;
  >a{
    display: block;
    padding: 5px 0px;
  }
`;
export const ItemMenu = Styled.div`
  display: block;
  padding: 5px 10px;
`;
export const TitleMenu = Styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;
export const ImgCafe = Styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  margin: 5px auto;
`;
export const NameCafe = Styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`