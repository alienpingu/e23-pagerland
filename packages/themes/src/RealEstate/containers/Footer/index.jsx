import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import Grid from '@pagerland/common/src/components/Grid';
import Icon from '@pagerland/common/src/components/Icon';

import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import data from '../../data';

const Footer = ({
  name,
  title,
  text,
  cta,
  copyright,
  features,
  socialLinks,
  WrapperProps,
  ContainerProps,
  TitleProps,
  GridProps,
  TextProps,
  CaptionProps,
  CtaProps,
  FeaturesGridProps,
  FeatureItemProps,
  FeatureIconProps,
  FeatureTitleProps,
  FeatureTextProps,
  CopyrightWrapperProps,
  CopyrightTextProps,
  SocialLinksProps,
  SocialLinkProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
{/*      <Fade cascade bottom duration={600}>
        <Typography {...TitleProps}>{title}</Typography>
      </Fade>
      <Grid {...GridProps}>
        <Box {...CaptionProps}>
          <Fade cascade bottom duration={600}>
            <Typography {...TextProps}>{text}</Typography>
            <Button {...CtaProps} {...cta}>
              {cta.label}
            </Button>
          </Fade>
        </Box>
        <Grid {...FeaturesGridProps}>
          {features.map((feature, key) => (
            <Fade cascade bottom duration={600} delay={key * 100} key={key}>
              <Box {...FeatureItemProps}>
                <Icon {...FeatureIconProps} {...feature.IconProps} />
                <Box>
                  <Typography {...FeatureTitleProps}>{feature.title}</Typography>
                  <Typography {...FeatureTextProps}>{feature.text}</Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Grid>*/}
      <Box {...CopyrightWrapperProps}>
        <Typography {...CopyrightTextProps}>{copyright}</Typography>
        <Typography as="a" href="/policy" {...CopyrightTextProps}>Privacy policy - Cookie policy</Typography>
        <Box {...SocialLinksProps}>
          {socialLinks?.map((socialLink, key) => (
            <Fade left duration={600} key={socialLink.title} distance="10px" delay={100 * key}>
              <Button as="a" href={socialLink.href} title={socialLink.title} {...SocialLinkProps}>
                <Icon icon={socialLink.icon} />
              </Button>
            </Fade>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.shape({
    label: PropTypes.node,
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  copyright: PropTypes.node,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  GridProps: PropTypes.object,
  TextProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  CtaProps: PropTypes.object,
  FeaturesGridProps: PropTypes.object,
  FeatureItemProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
  FeatureTextProps: PropTypes.object,
  CopyrightWrapperProps: PropTypes.object,
  CopyrightTextProps: PropTypes.object,
  SocialLinksProps: PropTypes.object,
  SocialLinkProps: PropTypes.object,
};

Footer.defaultProps = {
  ...data.footer,
  copyright: data.copyright,
  WrapperProps: {
    bg: '#174A5B',
    pt: {
      _: 48,
      md: 48,
      lg: 48,
    },
    pb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  TitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'gray.6',
    mb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: '1fr 2fr',
    },
    gridGap: '32px',
  },
  TextProps: {
    color: 'gray.2',
    mb: 4,
  },
  CtaProps: {
    variant: 'link',
    icon: ArrowRight,
  },
  FeaturesGridProps: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '24px',
    gridRowGap: '32px',
  },
  FeatureItemProps: {
    flexBox: true,
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  FeatureIconProps: {
    color: 'brand',
    fontSize: 48,
    mr: 3,
    mb: {
      _: 3,
      md: 0,
    },
  },
  FeatureTitleProps: {
    color: 'gray.6',
    variant: 'h4',
    as: 'h4',
  },
  FeatureTextProps: {
    color: 'gray.2',
  },
  CopyrightWrapperProps: {
    flexBox: true,
    flexDirection: {
      _: 'column',
      md: 'row',
    },
    justifyContent: 'space-between',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'gray.5',
    pt: {
      _: 3,
      md: 4,
      lg: 5,
    },
    mt: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  CopyrightTextProps: {
    variant: 'small',
    color: 'gray.5',
  },
  SocialLinksProps: {
    flexBox: true,
  },
  SocialLinkProps: {
    color: 'white',
    p: 0,
    fontSize: 24,
    ml: {
      _: 0,
      md: 4,
    },
    mt: {
      _: 3,
      md: 0,
    },
    mr: {
      _: 4,
      md: 0,
    },
  },
};

export default Footer;
