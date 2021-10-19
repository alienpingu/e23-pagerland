import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

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


    <div id="privacy">
      <a href="/">Torna alla home</a>
      <h2>Privacy Policy</h2>
      <p>Con questa pagina si intendono informare gli utenti del presente sito circa le modalità di gestione dello stesso con riguardo al trattamento dei loro dati personali, così come prescritto dall’art. 13 e 14 del Regolamento europeo 2016/679 – General Data Protection Regulation. La presente informativa rispetta e si conforma pienamente anche alla Raccomandazione n. 2/2001 che le autorità europee per la protezione dei dati personali, riunite nel Gruppo istituito dall’art. 29 della direttiva n. 95/46/CE, hanno adottato il 17 maggio 2001 per individuare alcuni requisiti minimi per la raccolta di dati personali online e, in particolare, le modalità, i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti quando questi si collegano a pagine web, indipendentemente dagli scopi del collegamento. Con la consultazione di questo sito possono essere trattati dati relativi a persone identificate o identificabili.</p>
      <p>Si specifica che, qualora necessari, i meccanismi di consenso saranno evidenti, brevi e facilmente comprensibili;</p>
      <p>I Suoi dati personali non saranno oggetto di diffusione e le è riconosciuto l’esercizio dei diritti di cui agli artt. 15-22 del Regolamento europeo n. 679/2016 scrivendo al Titolare del Trattamento: E 23 S.R.L. – Via Averardo Buschi 1 – 20131 Milano (MI) Italy</p>
      <p>I trattamenti connessi ai servizi web di questo sito hanno luogo presso la predetta sede e presso la sede del service provider del sito e sono curati solo dal personale dell’azienda, oppure da eventuali incaricati di occasionali operazioni di manutenzione.</p>
      <p>Tutti i dati acquisiti tramite i servizi online offerti da E 23 S.R.L. possono essere comunicati ad eventuali responsabili esterni i cui nominativi sono inseriti in un registro dedicato ma non verranno in ogni caso comunicati o diffusi ad altri soggetti se non dietro espresso consenso da parte dell’utente. I dati personali forniti dagli utenti che inoltrano richieste di invio di materiale informativo (richieste di informazioni, ecc.) sono utilizzati al solo fine di eseguire il servizio o la prestazione richiesta e sono comunicati a terzi nel solo caso in cui ciò sia a tal fine necessario.</p>
      <h3>Tipologie di dati acquisibili</h3>
      <h4>Dati di navigazione </h4>
      <p>I nostri sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet.</p>
      <p>Le informazioni di cui sopra non sono raccolte specificatamente per essere associate a interessati identificati, ma data la loro natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.</p>
      <p>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente.</p>
      <p>Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull’uso del sito e per controllarne il corretto funzionamento. I dati potrebbero essere utilizzati per l’accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito e potranno essere esibiti all’Autorità Giudiziaria, qualora questa ne faccia esplicita richiesta.</p>
      <h4>Dati forniti volontariamente dall’utente </h4>
      <p>L’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell’indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva, così come per i dati raccolti attraverso le form di raccolta dati dedicate ai Servizi online.</p>
      <p>I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti.</p>
      <p>Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.</p>
    </div>

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
