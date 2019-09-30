import Styled, { css } from 'styled-components';

const styleHeading = `
  border: none;
  padding: 0 0;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-weight: 700;
  line-height: 1.28571429em;
  text-transform: none;
`
export const Heading1 = Styled.h1`
  ${styleHeading}
  margin: 15px 0;
  `;
export const Heading2 = Styled.h2`
  ${styleHeading}
  margin: 13px 0;
  `;
export const Heading3 = Styled.h3`
  ${styleHeading}
  margin: 9px 0;
  `;
export const Heading4 = Styled.h4`
  ${styleHeading}
  margin: 3px 0;
  `;
export const Heading5 = Styled.h5`
  ${styleHeading}
  margin: 0;
  `;
export const Heading6 = Styled.h6`
  ${styleHeading}
  margin: 0;
`;