import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Grid from '@pagerland/common/src/components/Grid';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';
import Icon from '@pagerland/common/src/components/Icon';
import Button from '@pagerland/common/src/components/Button';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import Input from '@pagerland/common/src/components/Formik/Input';
import data from '../../data';

import { ImgWrapper } from './styled.components';

const Contact = ({
  name,
  title,
  thumbnail,
  details,
  form,
  WrapperProps,
  GridProps,
  ContainerProps,
  TitleProps,
  ImgProps,
  DetailsProps,
  DetailsTitleProps,
  DetailsTextProps,
  DetailsInfoItemProps,
  DetailsIconProps,
  SocialLinksProps,
  SocialLinkProps,
  FormProps,
  FormTitleProps,
  FormButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Fade bottom cascade duration={600}>
        <Typography {...TitleProps}>{title}</Typography>
      </Fade>
      <Grid {...GridProps}>
        <Fade left cascade duration={600}>
          <ImgWrapper>
            <Img {...thumbnail} {...ImgProps} />
          </ImgWrapper>
        </Fade>
        <Box {...DetailsProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...DetailsTitleProps}>{details.title}</Typography>
            <Typography {...DetailsTextProps}>{details.text}</Typography>
            {details.info.map((item, key) => (
              <Box key={key} {...DetailsInfoItemProps}>
                <Icon icon={item.icon} {...DetailsIconProps} />
                {item.text}
              </Box>
            ))}
          </Fade>
{/*          <Box {...SocialLinksProps}>
            {details.socialLinks?.map((socialLink, key) => (
              <Fade left duration={600} key={socialLink.title} distance="10px" delay={100 * key}>
                <Button as="a" href={socialLink.href} title={socialLink.title} {...SocialLinkProps}>
                  <Icon icon={socialLink.icon} />
                </Button>
              </Fade>
            ))}
          </Box>*/}
        </Box>
        <Box {...FormProps}>
          <Formik
            validationSchema={form.validationSchema}
            onSubmit={form.onSubmit}
            initialValues={form.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {},
            )}
          >
            <Form>
              <Fade cascade bottom duration={600}>
                <Typography {...FormTitleProps}>{form.title}</Typography>
                <div>
                  {form.fields.map(field => (
                    <Input key={field.name} {...field} />
                  ))}
                  <Button type="submit" {...FormButtonProps}>
                    {form.sendButtonText}
                  </Button>
                </div>
              </Fade>
            </Form>
          </Formik>
        </Box>
      </Grid>
    </Container>
  </Box>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  thumbnail: PropTypes.object,
  details: PropTypes.shape({
    title: PropTypes.node,
    text: PropTypes.node,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        text: PropTypes.node,
      }),
    ),
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        title: PropTypes.string,
        href: PropTypes.string,
      }),
    ),
  }),
  form: PropTypes.shape({
    title: PropTypes.node,
    sendButtonText: PropTypes.node,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    fields: PropTypes.arrayOf(PropTypes.object),
  }),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
  DetailsProps: PropTypes.object,
  DetailsTitleProps: PropTypes.object,
  DetailsTextProps: PropTypes.object,
  DetailsInfoItemProps: PropTypes.object,
  DetailsIconProps: PropTypes.object,
  SocialLinksProps: PropTypes.object,
  SocialLinkProps: PropTypes.object,
  FormProps: PropTypes.object,
  FormTitleProps: PropTypes.object,
  FormButtonProps: PropTypes.object,
};

Contact.defaultProps = {
  WrapperProps: {
    pt: {
      _: 32,
      md: 64,
      lg: 160,
    },
    pb: {
      _: 32,
      lg: 64,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: '1fr 1fr',
      lg: '320px 320px 1fr',
    },
    gridGap: '64px',
  },
  ImgProps: {
    width: '100%',
  },
  DetailsTitleProps: {
    as: 'h3',
    variant: 'h3',
    mb: {
      _: 3,
      md: 4,
      lg: 48,
    },
  },
  DetailsTextProps: {
    color: 'gray.1',
    mb: 4,
  },
  DetailsInfoItemProps: {
    flexBox: true,
    alignItems: 'flex-start',
    mb: 3,
  },
  DetailsIconProps: {
    fontSize: 24,
    mr: 3,
    mt: '2px',
  },
  SocialLinksProps: {
    mt: 4,
    flexBox: true,
  },
  SocialLinkProps: {
    bg: 'brand',
    color: 'gray.0',
    p: 0,
    mr: 2,
    width: 48,
    height: 48,
    lineHeight: '54px',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: '50%',
  },
  FormProps: {
    gridColumn: {
      md: '1 / 3',
      lg: 'auto',
    },
  },
  FormTitleProps: {
    as: 'h3',
    variant: 'h3',
    mb: {
      _: 3,
      md: 4,
      lg: 48,
    },
  },
  FormButtonProps: {
    variant: 'brand',
    mt: 24,
    icon: ArrowRight,
  },
  ...data.contact,
};

export default Contact;
