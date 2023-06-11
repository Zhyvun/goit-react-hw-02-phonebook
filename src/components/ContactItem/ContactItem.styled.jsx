import styled from '@emotion/styled';

export const ButtonSearch = styled.button`
  width: 150px;
  margin-left: ${props => props.theme.spacing(12)};
  font-size: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.gray};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.spacing(5)};
  padding: 8px 16px;
  cursor: pointer;
  transition: outline-color 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus {
    box-shadow: ${props => `0px 2px 6px 2px ${props.theme.colors.grayDark}`};
    outline: ${props => `1px solid ${props.theme.colors.gray}`};
  }
`;