import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Grid from '@pagerland/common/src/components/Grid';
import LightBoxGallery from '@pagerland/common/src/components/Gallery';

import { StyledImg } from './styled.components';
import data from '../../data';

const Gallery = ({ name, photos, WrapperProps, GridProps, ImgProps }) => (
  <Box name={name} {...WrapperProps}>
    <Grid {...GridProps}>
      <LightBoxGallery
        images={photos}
        renderItem={(item, i, onClick) => (
          <Fade key={i} bottom cascade duration={600} delay={i * 30}>
            <StyledImg onClick={onClick} {...ImgProps} key={i} {...item.ImgProps} />
          </Fade>
        )}
      />
    </Grid>
  </Box>
);

Gallery.propTypes = {
  name: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      ImgProps: PropTypes.object,
    }),
  ),
  WrapperProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
};

Gallery.defaultProps = {
  ...data.gallery,
  GridProps: {
    gridTemplateColumns: {
      _: 'repeat(3, 1fr)',
      lg: 'repeat(5, 1fr)',
    },
  },
  ImgProps: {
    width: '100%',
    display: 'block',
  },
};

export default Gallery;
