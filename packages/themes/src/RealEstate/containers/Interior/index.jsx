import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Slider from '@pagerland/common/src/components/Slider';

import Img from '@pagerland/common/src/components/Img';
import data from '../../data';

import { Wrapper } from './styled.components';

const Interior = ({
  name,
  sections,
  WrapperProps,
  ContainerProps,
  SectionProps,
  CaptionProps,
  TitleProps,
  TextProps,
  SliderProps,
  SliderOddProps,
  ImgProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      {sections.map((section, key) => (
        <Wrapper {...SectionProps} key={key}>
          <Box {...CaptionProps}>
            <Fade bottom cascade duration={600}>
              <Typography {...TitleProps}>{section.title}</Typography>
              <Typography {...TextProps}>{section.text}</Typography>
            </Fade>
          </Box>
          <Slider {...SliderProps} {...(key % 2 !== 0 && SliderOddProps)}>
            {section.slides.map((slide, slideKey) => (
              <div key={slideKey}>
                <Img {...ImgProps} {...slide} />
              </div>
            ))}
          </Slider>
        </Wrapper>
      ))}
    </Container>
  </Box>
);

Interior.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      slides: PropTypes.arrayOf(PropTypes.object),
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  SectionProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  SliderProps: PropTypes.object,
  SliderOddProps: PropTypes.object,
  ImgProps: PropTypes.object,
};

Interior.defaultProps = {
  WrapperProps: {
    pt: {
      _: 32,
      md: 64,
      lg: 160,
    },
    pb: {
      _: 64,
      lg: 160,
    },
  },
  SectionProps: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CaptionProps: {
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: {
      _: 'none',
      lg: 448,
    },
    mb: {
      _: 5,
      lg: 0,
    },
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    color: 'gray.0',
    mb: 3,
  },
  TextProps: {
    color: 'gray.1',
  },
  SliderProps: {
    variant: 'a',
    minHeight: 0,
    maxWidth: 608,
    width: '100%',
    flexGrow: 0,
    flexShrink: 0,
    options: {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
    },
  },
  SliderOddProps: {
    order: {
      _: '1',
      lg: '-1',
    },
    variant: 'b',
  },
  ImgProps: {
    width: '100%',
  },
  ...data.interior,
};

export default Interior;
