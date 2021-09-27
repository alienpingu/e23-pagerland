import styled from 'styled-components';
import Box from '@pagerland/common/src/components/Box';
import { breakpoints } from '../../styles';

export const Wrapper = styled(Box)`
  & + & {
    margin-top: 192px;

    @media (max-width: ${breakpoints.lg}) {
      margin-top: 128px;
    }

    @media (max-width: ${breakpoints.md}) {
      margin-top: 96px;
    }
  }
`;
