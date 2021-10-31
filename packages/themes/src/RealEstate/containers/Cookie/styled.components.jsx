import styled from 'styled-components';

export const CookieWrapper = styled.div`
  position: fixed;
  min-height:140px;
  font-size:16px;
  background: #174a5b;
  bottom: 0;
  color: #fff;
  left: 0;
  width:100%;
  padding: 0.5rem 5rem; 
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.75s both;
  z-index: 9999;
  &.hide {
    display:none;
  }
  div:first-child {
    width: 100%;
  }
  div:last-child {
    margin-left: 12px;
  }
@media only screen and (max-width: 600px) {
      padding: 0.5rem;
      flex-direction: column;
      div {
         width: 100%;
         button {
          width: 100%;
          margin-bottom: 6px;
         }
      }
}



@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
`;


