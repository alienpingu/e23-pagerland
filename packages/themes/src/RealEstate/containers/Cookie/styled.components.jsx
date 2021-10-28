import styled from 'styled-components';

export const CookieWrapper = styled.div`
  position: fixed;
  height:140px;
  font-size:14px;
  background: #174a5b;
  bottom: 0;
  color: #fff;
  left: 0;
  width:100%;
  padding: 0.5rem 2.5rem; 
  display: flex;
  flex-direction: row;
  align-items: center;
  &.hide {
    display:none;
  }
`;

