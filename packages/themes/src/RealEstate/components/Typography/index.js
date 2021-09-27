import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';
import { body, colors } from '../../styles';

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    font-weight: 400;
    line-height: ${body.lineHeight};

    label& {
      cursor: pointer;
      user-select: none;
    }

    a& {
      text-decoration: none;
    }

    ${variant({
      prop: 'accent',
      scale: 'Typography.accents',
    })}
  `,
  variants: {
    h1: {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.7,
    },
    h6: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: 24,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 18,
      lineHeight: 1.6,
    },
    body: {
      fontSize: 14,
      lineHeight: 1.7,
    },
    large: {
      fontSize: 36,
      lineHeight: 1.2,
      fontWeight: 300,
    },
    small: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
    },
    button: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 500,
    },
    label: {
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 500,
    },
  },
  accents: {
    before: css`
      position: relative;

      &::before {
        position: absolute;
        top: -32px;
        left: -64px;
        z-index: -1;
        display: block;
        width: 256px;
        height: 256px;
        content: '';
        background-color: ${colors.brand};
      }
    `,
    after: css`
      position: relative;

      &::after {
        position: absolute;
        top: -32px;
        right: -64px;
        z-index: -1;
        display: block;
        width: 256px;
        height: 256px;
        content: '';
        background-color: ${colors.brand};
      }
    `,
  },
};
