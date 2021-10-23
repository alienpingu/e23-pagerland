import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field, ErrorMessage  } from 'formik';
 import * as Yup from 'yup';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Grid from '@pagerland/common/src/components/Grid';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';
import Icon from '@pagerland/common/src/components/Icon';
import Button from '@pagerland/common/src/components/Button';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import User from '@pagerland/icons/src/line/User';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';


import Input from '@pagerland/common/src/components/Formik/Input';
import Checkbox from '@pagerland/common/src/components/Checkbox';
import data from '../../data';

import { ImgWrapper, CtaWrapper, CheckBoxWrapper } from './styled.components';



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
}) => {


  return(
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
              <Typography {...DetailsTitleProps}>{details.title}</Typography>
              <Typography {...DetailsTextProps}>{details.text}</Typography>
              {details.info.map((item, key) => (
                <CtaWrapper key={key} href={item.href}>
                  <Icon icon={item.icon} {...DetailsIconProps} />
                  {item.text}
                </CtaWrapper>
              ))}
          </Box>
          <Box {...FormProps}>
            <Formik
              validationSchema={Yup.object({
                   firstName: Yup.string().min(5, 'Inserire almeno 5 caratteri').required('Campo obbligatorio'),
                   phone: Yup.string().required('Campo obbligatorio').matches(/^[0-9]+$/, "Inserire solo cifre")
                            .min(10, 'Inserire esattamente 10 cifre')
                            .max(10, 'Inserire esattamente 10 cifre'),
                   email: Yup.string().email('Invalid email address').required('Campo obbligatorio'),
                   message: Yup.string().min(20, 'Scrivere minimo 20 caratteri').required('Campo obbligatorio'),
                   tos: Yup.bool().oneOf([true], 'Obbligatorio accettare le condizioni'),

                 })}
              onSubmit={(data, {resetForm, setStatus}) => 
                fetch('https://formspree.io/f/mwkaywpk', {
                      method: 'POST', // *GET, POST, PUT, DELETE, etc.
                      mode: 'cors', // no-cors, *cors, same-origin
                      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: 'same-origin', // include, *same-origin, omit
                      headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: 'follow', // manual, *follow, error
                      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: JSON.stringify(data) // body data type must match "Content-Type" header
                    }).then(response => {
                      console.log(response)
                      resetForm()
                      setStatus({success: true})
                    }).catch(error => {
                      setStatus({success: false})

                    })              
              }
              initialValues={{ 
                firstName: '', 
                phone: '',
                email: '',
                message: '',
                tos: false
                }}
            >
              {({values,
                 handleChange,
                 handleSubmit,
                 handleBlur,
                 errors,
                 status,
                 touched
              }) => <Form
                      success={!!status && !!status.success}
                    >
                  <Typography {...FormTitleProps}>{form.title}</Typography>
                      <Input 
                        name="firstName" 
                        label="Nome e Cognome" 
                        placeholder="es. Mario Rossi" 
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        prefix={<Icon icon={User} />}
                      />
                      <Input 
                        name="phone" 
                        label="Telefono" 
                        placeholder="es. 39 356 898 7854" 
                        max="10"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        prefix={<Icon icon={Phone} />}
                      />

                      <Input 
                        name="email" 
                        label="E-mail" 
                        placeholder="es. esempio@telegmail.com" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        prefix={<Icon icon={Envelope} />} 
                      />
                      <Input 
                        name="message" 
                        label="Messaggio" 
                        placeholder="Scrivi qualcosa..." 
                        value={values.text}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <CheckBoxWrapper>
                        <Field 
                          type="checkbox" 
                          name="tos"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.tos}
                          className={(errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')}
                        />
                        <label htmlFor="tos">
                           Ho letto e accetto <a href="/privacy" target="_black">l'informativa sulla privacy</a>
                        </label>
                        <ErrorMessage name="tos" component="div" className="invalid-feedback" />
                      </CheckBoxWrapper>
                    {(!!status && !!status.success) ? <Typography variant="h4" color="success">Form inviato con successo</Typography> : ''}

                    <Button type="submit" {...FormButtonProps}>
                      Invia
                    </Button>
                    {/*<Button type="reset" >
                      Pulisci
                    </Button>*/}
              </Form>}
            </Formik>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

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
    checkbox: PropTypes.object,
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
    textDecoration: 'none',
    
  },
  DetailsInfoItemProps: {
    flexBox: true,
    alignItems: 'flex-start',
    as: 'a',
    color:'gray.1',
    textDecoration: 'none',
    pb: 48
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
    background: "#174a5b",
    color: "#FFF"
  },
  ...data.contact,
};

export default Contact;
