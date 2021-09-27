import { css } from 'styled-components';

import { Wrapper } from '@pagerland/common/src/components/Icon/styled.components';

import Typography from '../Typography';
import { colors } from '../../styles';

export default {
  main: css`
    ${Typography.variants.h4};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    color: ${colors.brand};
    background-color: ${colors.gray[0]};

    ${Wrapper} {
      margin-right: 8px;
      font-size: 24px;
    }
  `,
};
