import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import { StyledImg } from './styled.components';

import data from '../../data';

const Exterior = ({
  name,
  sections,
  WrapperProps,
  SectionProps,
  ImgProps,
  OddImgProps,
  ContainerProps,
  OddContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
}) => (
  <Box name={name} {...WrapperProps}>
    {sections.map((section, i) => (
      <Box {...SectionProps} key={i}>
        <StyledImg {...ImgProps} {...(i % 2 !== 0 && OddImgProps)} {...section.ImgProps} />
        <Container {...ContainerProps} {...(i % 2 !== 0 && OddContainerProps)}>
          <Box {...CaptionProps}>
            <Fade bottom cascade duration={600}>
              <Typography {...TitleProps}>{section.title}</Typography>
              <Typography {...TextProps}>{section.text}</Typography>
            </Fade>
          </Box>
        </Container>
      </Box>
    ))}
  </Box>
);

Exterior.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      ImgProps: PropTypes.object,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  WrapperProps: PropTypes.object,
  SectionProps: PropTypes.object,
  ImgProps: PropTypes.object,
  OddImgProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  OddContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
};

Exterior.defaultProps = {
  WrapperProps: {
    display: 'none'
  },
  SectionProps: {
    position: 'relative',
    bg: 'gray.0',
    minHeight: 600,
    flexBox: true,
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ContainerProps: {
    py: {
      _: 4,
      lg: 0,
    },
    px: {
      _: 4,
      lg: 3,
    },
  },
  ImgProps: {
    position: {
      lg: 'absolute',
    },
    height: {
      lg: '100%',
    },
    width: {
      _: '100%',
      lg: '50%',
    },
    left: '50%',
    objectFit: 'cover',
  },
  OddImgProps: {
    left: undefined,
  },
  CaptionProps: {
    py: {
      _: 3,
      md: 5,
      lg: 160,
    },
    maxWidth: {
      _: 'none',
      lg: 448,
    },
  },
  OddContainerProps: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'gray.6',
    mb: {
      _: 3,
      md: 4,
    },
  },
  TextProps: {
    color: 'gray.6',
  },
  ...data.exterior,
};

export default Exterior;
