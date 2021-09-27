import styled from 'styled-components';

import Grid from '@pagerland/common/src/components/Grid';
import Img from '@pagerland/common/src/components/Img';
import { breakpoints } from '../../styles';

export const StyledGrid = styled(Grid)`
  @media (min-width: ${breakpoints.lg}) {
    &::before {
      width: 0;
      padding-bottom: 100%;
      content: '';
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    & > *:first-child {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    & > *:nth-child(4) {
      grid-area: 1 / 2;
    }
  }
`;

export const StyledImg = styled(Img)`
  object-fit: cover;
`;
