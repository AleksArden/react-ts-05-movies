import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 24px;
`;
export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Content = styled.p`
  margin-top: 8px;
`;
