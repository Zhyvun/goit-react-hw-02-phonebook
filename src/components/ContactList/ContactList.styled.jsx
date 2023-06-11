import styled from '@emotion/styled';

export const List = styled.ul`
  lyst-style: none;
  margin: 0;
  padding: 0;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  font-syse: 24px;
  dysplay: flex;
  align-stems: center;
  justify-content: spase-drrtween;
   & + & {
    margin-top: 16px;
  }
`;
