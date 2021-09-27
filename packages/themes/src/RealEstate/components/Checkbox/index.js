import { css } from 'styled-components';
import { body, borderRadius, colors, transition } from '../../styles';

import Typography from '../Typography';

export default {
  Indicator: {
    main: css`
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 2px;
      margin-right: 12px;
      font-size: 24px;
      content: '';
      border-radius: ${borderRadius.small}px;
      box-shadow: inset 0 0 0 1px
        ${props => (props.color ? colors[props.color] || props.color : colors.gray[3])};
      transition: ${transition.all};

      input:active + & {
        box-shadow: inset 0 0 0 1px
          ${props => (props.color ? colors[props.color] || props.color : colors.brand)};
      }

      input:checked + & {
        box-shadow: inset 0 0 0 24px
          ${props => (props.color ? colors[props.color] || props.color : colors.brand)};
      }

      .error & {
        box-shadow: inset 0 0 0 1px ${colors.error};
      }

      .error input:checked + & {
        box-shadow: inset 0 0 0 24px ${colors.error};
      }

      svg {
        display: block;
        line-height: 1;

        path {
          fill: ${colors.gray[6]};
        }
      }
    `,
  },
  Label: {
    main: css`
      ${Typography.variants.body2};
      color: ${colors.gray[0]};
      user-select: none;
    `,
  },
  ErrorMessage: {
    main: css`
      display: flex;
      align-items: center;
      padding-top: 8px;
      font-family: ${body.fontFamily};
      font-size: 14px;
      color: ${colors.error};
    `,
  },
};
