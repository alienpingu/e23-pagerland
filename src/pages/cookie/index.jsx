import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';
import Container from '@pagerland/common/src/components/Container';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
} from '@pagerland/themes/src/RealEstate/containers';

import Button from '@pagerland/common/src/components/Button';
import { useCookies } from 'react-cookie';
import SEO from '../../components/SEO';

function Cookie ({ url }) {

  const [cookies, setCookie] = useCookies(['policy']);
  console.log(cookies.policy)
  return(
    <Theme>
      <Head>
        <link href={theme.typography.googleFont} rel="stylesheet" />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <SEO title="cookie" />
      <Container>
        <Link href="/">
          <a>Torna alla home</a>
        </Link>
        <h1>Cookie Policy {Boolean(cookies.policy)}</h1>
        <p>Non sono utilizzate in alcun modo tecniche informatiche per l’acquisizione diretta di dati personali identificativi dell’utente.<br/>I cosiddetti cookies di sessione, una volta terminata la connessione al sito web di E23 S.r.l., non vengono conservati.</p>
        <p>Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web.</p>
        <p>I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l'esperienza per l'utente.<br/> La legge afferma che possiamo memorizzare i cookie sul suo dispositivo se sono strettamente necessari per il funzionamento di questo sito. Per tutti gli altri tipi di cookie abbiamo bisogno del suo permesso.</p>
        <p>Questo sito utilizza diversi tipi di cookie. Alcuni cookie sono collocate da servizi di terzi che compaiono sulle nostre pagine.</p>
        <p>In qualsiasi momento è possibile modificare o revocare il proprio consenso dalla Dichiarazione dei cookie sul nostro sito Web.</p>
        <p>Scopra di più su chi siamo, come può contattarci e come trattiamo i dati personali nella nostra <Link href="/policy">Informativa sulla privacy.</Link></p>
        <p>Il suo consenso si applica ai seguenti siti web: www.e23-milano.com</p>
        {
          (Boolean(cookies.policy === 'true')) ?  <Button 
              variant="brand" 
              background="#174a5b" 
              color="#fff"
              onClick={(e) => setCookie('policy', false, { path: '/' })}
            >Disattiva Cookie <br/> non necessari</Button>
           : <Button 
              variant="brand" 
              background="#174a5b" 
              color="#fff"
              onClick={(e) => setCookie('policy', true, { path: '/' })}
            >Accetta tutti</Button>
        }
        
      </Container>
    </Theme>
    )
};

Cookie.propTypes = {
  url: PropTypes.string,
};

Cookie.defaultProps = {
  url: 'https://e23-milano.com',
};

export default Cookie;
