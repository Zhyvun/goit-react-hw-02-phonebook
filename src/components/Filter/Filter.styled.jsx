import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  // justify-content: center;
  margin-bottom: ${props => props.theme.spacing(12)};
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(6)};
  transition: color 250ms ease;

  &:hover &:focus {
    color: ${props => props.theme.colors.blue};
  }
`;

export const FilterInput = styled.input`
  width: 700px;
  font-size: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.black}`};
  outline: none;
  padding: ${props => props.theme.spacing(4)};
  transition: border-color 250ms ease, box-shadow 250ms ease;

  &::placeholder {
    color: ${props => props.theme.colors.grayDark};
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.blue};
    box-shadow: ${props => `0px 1px 7px 1px ${props.theme.colors.grayDark}`};
  }
`;
