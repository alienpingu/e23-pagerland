import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import Privacy from '@pagerland/themes/src/RealEstate/containers/Privacy';

import preview from '@pagerland/themes/src/RealEstate/assets/preview.jpg';



import SEO from '../../components/SEO';

const RealEstate = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
      <script id="CookieDeclaration" src="https://consent.cookiebot.com/035642ee-e211-4555-872f-41ba917a5aa2/cd.js" type="text/javascript" async></script>
    </Head>
    <SEO title="privacy" />

    <Privacy />

    <Footer name="about-us" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: 'https://pager.land/next/',
};

export default RealEstate;
