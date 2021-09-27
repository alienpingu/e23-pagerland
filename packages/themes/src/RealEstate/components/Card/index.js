import { css } from 'styled-components';
import { colors } from '../../styles';

export default {
  main: css`
    position: relative;
    padding: 24px 32px;
    text-align: left;
    background-color: ${colors.gray[5]};
    border: none;
    outline: none !important;

    button& {
      cursor: pointer;
    }

    a& {
      color: inherit;
      text-decoration: none;
    }
  `,
};
