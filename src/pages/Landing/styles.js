import styled from "styled-components";
import theme from "../../helpers/theme/theme";

export const H2 = styled.h2`
  font-family: ${theme.typography.primaryFont};
  font-size: 34px;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: ${theme.pallete.black.B500};
  margin-top: 0;
`;

export const H3 = styled.h3`
  font-family: ${theme.typography.secondaryFont};
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: ${theme.pallete.blue.B400};
  text-transform: uppercase;
  margin-top: 65px;
`;
