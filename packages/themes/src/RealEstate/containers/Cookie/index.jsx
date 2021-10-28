import React from 'react';
import {CookieWrapper} from './styled.components'
import Button from '@pagerland/common/src/components/Button';
import { useCookies } from 'react-cookie';

function Cookie() {
  const [cookies, setCookie] = useCookies(['policy']);

  return (
    (Boolean(!cookies.policy)) ? <CookieWrapper>
    <div>
      <h4>Questo sito usa i Cookie 🍪</h4>
      <p>{cookies.policy} Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web.</p>
    </div>
    <div>
      <Button 
        variant="brand" 
        color="#174a5b" 
        background="#fff"
        onClick={(e) => setCookie('policy', true, { path: '/' })}
      >Ho capito</Button>
    </div>
  </CookieWrapper> : <span></span>
  )
};

export default Cookie;
