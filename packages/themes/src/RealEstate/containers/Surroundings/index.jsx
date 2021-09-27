import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';

import Button from '@pagerland/common/src/components/Button';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';
import data from '../../data';
import { StyledGrid, StyledImg } from './styled.components';

const Surroundings = ({
  name,
  sections,
  WrapperProps,
  GridProps,
  ImgProps,
  CaptionProps,
  TitleProps,
  TextProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <StyledGrid {...GridProps}>
      {sections.map((section, key) => (
        <React.Fragment key={key}>
          <StyledImg {...ImgProps} {...section.ImgProps} />
          <Box {...CaptionProps}>
            <Fade cascade bottom duration={600}>
              <Typography {...TitleProps}>{section.title}</Typography>
              <Typography {...TextProps}>{section.text}</Typography>
              <Button {...CtaProps} {...section.cta}>
                {section.cta.label}
              </Button>
            </Fade>
          </Box>
        </React.Fragment>
      ))}
    </StyledGrid>
  </Box>
);

Surroundings.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      ImgProps: PropTypes.object,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  WrapperProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  CtaProps: PropTypes.object,
};

Surroundings.defaultProps = {
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridTemplateRows: {
      _: 'auto',
      lg: 'repeat(2, 1fr)',
    },
    gridAutoFlow: {
      _: 'row',
      lg: 'column',
    },
  },
  ImgProps: {
    width: '100%',
    height: {
      _: 'auto',
      md: '100%',
    },
  },
  CaptionProps: {
    bg: 'gray.0',
    p: {
      _: 4,
      lg: 5,
    },
    flexBox: true,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    color: 'gray.6',
    mb: 4,
  },
  TextProps: {
    color: 'gray.3',
    mb: 4,
  },
  CtaProps: {
    variant: 'link',
    icon: ArrowRight,
  },
  ...data.surroundings,
};

export default Surroundings;
