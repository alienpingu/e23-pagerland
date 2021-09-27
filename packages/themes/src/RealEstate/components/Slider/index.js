import { css } from 'styled-components';
import { colors, transition } from '../../styles';

export default {
  main: css`
    position: relative;

    .slick-dots {
      position: absolute;
      bottom: -24px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;

      button {
        display: block;
        width: 8px;
        height: 8px;
        padding: 0;
        margin: 0 4px;
        text-indent: -9999px;
        cursor: pointer;
        background-color: ${colors.gray[4]};
        border: none;
        border-radius: 50%;
        outline: none;
        transition: ${transition.all};

        &:hover {
          background-color: ${colors.gray[2]};
        }
      }

      .slick-active button {
        background-color: ${colors.gray[0]};
      }
    }

    ${props =>
      props.variant &&
      css`
        &::before {
          position: absolute;
          z-index: -1;
          top: -32px;
          bottom: 92px;
          ${props.variant === 'a'
            ? css`
                right: -16px;
                left: 80px;
              `
            : css`
                left: -16px;
                right: 80px;
              `};
          display: block;
          content: '';
          background-color: ${colors.brand};
        }

        &::after {
          position: absolute;
          ${props.variant === 'a'
            ? css`
                left: -16px;
              `
            : css`
                right: -16px;
              `};
          bottom: -16px;
          z-index: -1;
          width: 64px;
          height: 64px;
          display: block;
          content: '';
          background-color: ${colors.gray[0]};
        }
      `}
  `,
};
