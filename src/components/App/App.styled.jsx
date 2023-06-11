import styled from '@emotion/styled';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 24px 16px;
  width: 480px;

  @media screen and (min-width: 768px) {
    padding: 32px 16px;
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    padding: 48px 24px;
    width: 1200px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 32px;
  text-align: center;
`;

export const AlertEmptyList = styled.p`
  font-size: 24px;
  text-align: center;
`;