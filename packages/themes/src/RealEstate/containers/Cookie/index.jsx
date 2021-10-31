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
      <p>Utilizziamo i cookie tecnici strettamente necessari ad un corretto funzionamento del sito e cookie di analisi statistica anonima</p>
    </div>
    <div>
      <Button 
        variant="brand" 
        color="#fff" 
        background="#174a5b"
        border="1px solid #fff"
        onClick={(e) => setCookie('policy', false, { path: '/' })}
      >Rifiuta</Button>

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
