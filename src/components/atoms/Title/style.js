import Styled, { css } from 'styled-components';
import color from 'assets/style';

export const SectionTitle = Styled.div`
`;

export const Title = Styled.span`
  font-weight: 500;
  display: inline-block;
  ${props => props.size === 'huge' && css`
    font-size: 28px;
    margin-bottom: 15px;
  `};
  ${props => props.size === 'large' && css`
    font-size: 24px;
    margin-bottom: 13px;
  `};
  ${props => props.size === 'medium' && css`
    font-size: 18px;
    margin-bottom: 10px;
  `};
  ${props => props.size === 'small' && css`
    font-size: 16px;
    margin-bottom: 5px;
  `};
  ${props => props.underline && css`
    border-bottom: 1px solid ${color.text}
  `};
  
`