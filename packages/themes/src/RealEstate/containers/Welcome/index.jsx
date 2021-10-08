import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';

import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import Grid from '@pagerland/common/src/components/Grid';
import Icon from '@pagerland/common/src/components/Icon';
import ParallaxBackground from '../../components/ParallaxBackground';

import './style.css'

import data from '../../data';

const Welcome = ({
  name,
  background,
  title,
  price,
  features,
  cta,
  cta_mobile,
  WrapperProps,
  InnerProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  PriceProps,
  GridProps,
  CtaProps,
  FeatureProps,
  FeatureIconProps,
  FeatureTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <ParallaxBackground {...background} />
    <Box {...InnerProps}>
      <Container {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...PriceProps}>{price}</Typography>
            {/*<Grid {...GridProps}>
              {features.map((feature, i) => (
                <Box {...FeatureProps} key={i}>
                  <Icon {...FeatureIconProps} {...feature.IconProps} />
                  <Typography {...FeatureTitleProps}>{feature.title}</Typography>
                </Box>
              ))}
            </Grid>*/}
            <Button id="btn-welcome-desktop" {...CtaProps} {...cta} />

            <a id="btn-welcome-mobile" variant="brand" className="sc-jSFkmK frPUkr" href="tel:9138471984"><span>Chiamaci</span></a>

          </Fade>
        </Box>
      </Container>
    </Box>
  </Box>
);

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  InnerProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  PriceProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  FeatureProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
  title: PropTypes.node,
  price: PropTypes.node,
  background: PropTypes.object,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object,
      title: PropTypes.node,
    }),
  ),
  cta: PropTypes.object,
  cta_mobile: PropTypes.object,
};

Welcome.defaultProps = {
  WrapperProps: {
    pt: {
      _: '0',
      lg: '50%',
    },
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  InnerProps: {
    pt: {
      _: 120,
      lg: 0,
    },
    pb: {
      _: 80,
      lg: 0,
    },
    position: {
      _: 'relative',
      lg: 'absolute',
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2,
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  CaptionProps: {
    maxWidth: 544,
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    color: 'gray.6',
  },
  PriceProps: {
    variant: 'h1',
    color: 'brand',
  },
  CtaProps: {
    as: Link,
    ...smoothLinkProps,
    mt: 4,
    variant: 'brand',
    background: "#174A5B",
    color: "#FFF",
    size: 'large',
  },
  GridProps: {
    mt: 4,
    maxWidth: 320,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '32px',
    gridRowGap: '8px',
  },
  FeatureProps: {
    flexBox: true,
    alignItems: 'center',
  },
  FeatureIconProps: {
    fontSize: 24,
    color: 'gray.6',
    mr: 2,
  },
  FeatureTitleProps: {
    variant: 'h4',
    color: 'gray.6',
  },
  ...data.welcome,
};

export default Welcome;
