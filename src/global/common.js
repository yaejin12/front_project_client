import { css, keyframes } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const textH1 = css`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.1px;
`;

export const inputBackground = css`
  border: none;
  background-color: gray;
  margin: 4px;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        /* top: 50px; */
        transform: translateY(200px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
