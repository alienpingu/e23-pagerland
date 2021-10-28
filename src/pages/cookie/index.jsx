import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
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
    </Head>
    <SEO title="cookie" />
    <div>
      <h1>Cookie Policy</h1>
      <p>Questo sito web utilizza i cookie. Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web. I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l'esperienza per l'utente. La legge afferma che possiamo memorizzare i cookie sul suo dispositivo se sono strettamente necessari per il funzionamento di questo sito. Per tutti gli altri tipi di cookie abbiamo bisogno del suo permesso. Questo sito utilizza diversi tipi di cookie. Alcuni cookie sono collocate da servizi di terzi che compaiono sulle nostre pagine. In qualsiasi momento è possibile modificare o revocare il proprio consenso dalla Dichiarazione dei cookie sul nostro sito Web. Scopra di più su chi siamo, come può contattarci e come trattiamo i dati personali nella nostra Informativa sulla privacy.</p>
    </div>
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: 'https://e23-milano.com',
};

export default RealEstate;
