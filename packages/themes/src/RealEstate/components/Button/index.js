import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';

import { colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button};

    padding: 16px 40px;
    white-space: nowrap;
    transition: ${transition.all};

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
  `,
  variants: {
    brand: css`
      color: ${colors.gray[0]};
      background-color: ${colors.brand};

      &:hover {
        background-color: ${colors.shades.brand[3]};
      }

      &:active,
      &:focus {
        background-color: ${colors.shades.brand[4]};
      }
    `,
    default: css`
      background-color: ${colors.gray[6]};

      &:hover {
        background-color: ${colors.gray[5]};
      }

      &:active,
      &:focus {
        background-color: ${colors.gray[4]};
      }
    `,
    link: css`
      padding: 0;
      color: ${colors.brand};
      background-color: transparent;

      &:hover {
        color: ${colors.shades.brand[3]};
      }

      &:active,
      &:focus {
        color: ${colors.shades.brand[4]};
      }
    `,
  },
  sizes: {
    small: css`
      padding: 12px 32px;
    `,
    large: css`
      padding: 20px 48px;
    `,
  },
  Icon: {
    main: css`
      display: inline-block;
      width: 24px;
      height: 24px;
      font-size: 24px;
      vertical-align: text-top;

      ${variant({
        prop: 'placement',
        scale: 'Button.Icon.placements',
      })}
    `,
    placements: {
      left: css`
        margin-right: 10px;
      `,
      right: css`
        margin-left: 10px;
      `,
    },
  },
};
