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
  animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.75s both;
  z-index: 9999;
  &.hide {
    display:none;
  }
    @media only screen and (max-width: 600px) {
  p {
    display:none;

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


