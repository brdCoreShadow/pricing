import styled from "@emotion/styled";

import switchRight from "../../assets/images/switchRight.png";
import switchLeft from "../../assets/images/switchLeft.png";
import { YearType } from "@/utils/types";

export const ConsoleCon = styled.div<Partial<YearType>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 80px;

  @media (min-width: 1280px) {
    margin-bottom: 64px;
  }

  & > button {
    width: 56px;
    height: 32px;

    margin-right: 24px;

    background-image: ${({ isYear }) =>
      isYear ? `url(${switchLeft})` : `url(${switchRight})`};

    @media (min-width: 1280px) {
      transition: opacity 0.3s;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.7;
        cursor: pointer;

        transition: opacity 0.3s;
      }
    }
  }

  & > span {
    font-size: 15px;
    line-height: 1.9;
    font-weight: 700;

    color: #6e728e;

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
`;
