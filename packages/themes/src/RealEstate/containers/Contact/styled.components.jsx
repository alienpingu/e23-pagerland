import styled from 'styled-components';
import { colors } from '../../styles';

export const ImgWrapper = styled.div`
  position: relative;
  margin: 16px;

  &::before {
    position: absolute;
    top: -16px;
    right: 48px;
    bottom: 146px;
    left: -16px;
    z-index: -1;
    display: block;
    content: '';
    background-color: ${colors.brand};
  }

  &::after {
    position: absolute;
    right: -16px;
    bottom: -16px;
    z-index: -1;
    display: block;
    width: 128px;
    height: 128px;
    content: '';
    background-color: ${colors.gray[0]};
  }

  img {
    display: block;
  }
`;
