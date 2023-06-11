import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormBox = styled.div`
  text-alimg: center;
`;

export const FormEl = styled(Form)`
  display: flex;
  aling-items: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(12)};
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(6)};
  transition: color 250ms ease;

  &: hover,
  &: focus {color: ${props => props.theme.colors.blue};}
`;

export const FormInput = styled(Field)`
  width: 700px;
  font-size: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(4)};
  outline: none;
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

export const FormButton = styled.button`
  font-size: 24px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.gray};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.spacing(5)};
  width: ${props => props.theme.spacing(60)};
  padding: 8px 16px;
  cursor: pointer;
  transition: outline-color 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus {
    box-shadow: ${props => `0px 2px 6px 2px ${props.theme.colors.grayDark}`};
    outline: ${props => `1px solid ${props.theme.colors.gray}`};
  }
`;

export const AlertForUser = styled(ErrorMessage)`
  width: 700px;
  text-align: justify;
  font-size: ${props => props.theme.spacing(5)};
`;
