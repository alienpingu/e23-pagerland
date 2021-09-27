import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';

import Typography from '@pagerland/common/src/components/Typography';
import Grid from '@pagerland/common/src/components/Grid';
import Gallery from '@pagerland/common/src/components/Gallery';

import { StyledImg } from './styled.components';
import data from '../../data';

const About = ({
  name,
  title,
  text,
  gallery,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  ImgProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
        <Grid {...GridProps}>
          <Gallery
            images={gallery}
            renderItem={(item, i, onClick) => (
              <Fade key={i} bottom cascade duration={600} delay={i * 100}>
                <StyledImg onClick={onClick} {...ImgProps} key={i} {...item.ImgProps} />
              </Fade>
            )}
          />
        </Grid>
      </Box>
    </Container>
  </Box>
);

About.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      ImgProps: PropTypes.object,
    }),
  ),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
};

About.defaultProps = {
  WrapperProps: {
    pt: {
      _: 80,
      md: 160,
    },
    pb: 80,
  },
  CaptionProps: {
    maxWidth: 736,
    mx: 'auto',
  },
  TitleProps: {
    accent: 'before',
    as: 'h2',
    variant: 'h2',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    mb: 48,
    color: 'gray.1',
  },
  GridProps: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1px',
  },
  ImgProps: {
    display: 'block',
    width: '100%',
  },
  ...data.about,
};

export default About;
