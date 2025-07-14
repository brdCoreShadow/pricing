import styled from "@emotion/styled";

type Props = {
  even: string;
};

export const PackListStyled = styled.ul``;

export const PackItem = styled.li`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 28px;
  padding-right: 28px;

  text-align: center;

  border-radius: 10px;

  box-shadow: 0 8px 32px rgba(163, 177, 198, 0.25);

  &:not(:last-of-type) {
    margin-bottom: 32px;
  }

  &:nth-of-type(2n + 1) {
    background-color: #fff;

    color: #6e728e;
  }

  &:nth-of-type(2n) {
    background: linear-gradient(to bottom, #a2a7f0, #696edd);

    color: #fff;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 18px;
    line-height: 1.6;
  }
`;

export const SubList = styled.ul`
  margin-bottom: 32px;

  & > li:not(:first-of-type) {
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 15px;
    line-height: 1.9;
    font-weight: 700;

    border-bottom: 1px solid #6e728e;
  }
`;
export const Tariff = styled.li<Partial<Props>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: 32px;

  font-size: 72px;
  letter-spacing: -2.16px;
  font-weight: 700;

  color: ${({ even }) => (even === "even" ? "#fff" : "#4A4D60")};

  & > span {
    margin-right: 8px;

    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1.2px;
  }
`;

export const PackBtn = styled.button<Partial<Props>>`
  width: 100%;

  padding-top: 14px;
  padding-bottom: 14px;

  text-transform: uppercase;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.39px;

  background: ${({ even }) =>
    even ? "#fff" : "linear-gradient(to bottom, #a2a7f0, #696edd)"};
  color: ${({ even }) => (even ? "#6D72DE" : "#fff")};

  border-radius: 8px;
`;
