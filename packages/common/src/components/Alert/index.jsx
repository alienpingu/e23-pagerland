import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InfoCircle from '@pagerland/icons/src/line/InfoCircle';
import Times from '@pagerland/icons/src/line/Times';

import { base, theme } from '../../utils';
import Icon from '../Icon';

const Wrapper = styled.div`
  ${theme('Alert')}
  ${base}
`;

const InfoIcon = styled(Icon)`
  ${theme('Alert.InfoIcon')}
  ${base}
`;

const CloseButton = styled.button`
  ${theme('Alert.Button')}
  ${base}
`;

/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
const Alert = ({ message }) => {
  const [shouldShow, setShouldShow] = useState(true);

  const hideAlert = useCallback(() => {
    setShouldShow(false);
  }, [setShouldShow]);

  if (!shouldShow) {
    return null;
  }

  return (
    <Wrapper>
      <InfoIcon icon={InfoCircle} />
      {message}
      <CloseButton onClick={hideAlert}>
        <Icon icon={Times} />
      </CloseButton>
    </Wrapper>
  );
};

Alert.propTypes = {
  message: PropTypes.node.isRequired,
};

export default Alert;
