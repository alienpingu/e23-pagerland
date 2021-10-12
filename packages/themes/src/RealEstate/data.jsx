import React from 'react';

import WebGrid from '@pagerland/icons/src/line/WebGrid';
import BedDouble from '@pagerland/icons/src/line/BedDouble';
import Bath from '@pagerland/icons/src/line/Bath';
import CarSideview from '@pagerland/icons/src/line/CarSideview';
import Wifi from '@pagerland/icons/src/line/Wifi';
import Monitor from '@pagerland/icons/src/line/Monitor';
import MeetingBoard from '@pagerland/icons/src/line/MeetingBoard';
import Microphone from '@pagerland/icons/src/line/Microphone';
import BoltAlt from '@pagerland/icons/src/line/BoltAlt';
import Coffee from '@pagerland/icons/src/line/Coffee';
import Sunset from '@pagerland/icons/src/line/Sunset';
import Wind from '@pagerland/icons/src/line/Wind';
import User from '@pagerland/icons/src/line/User';
import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Twitter from '@pagerland/icons/src/line/TwitterAlt';
import Linkedin from '@pagerland/icons/src/line/LinkedinAlt';
import TagAlt from '@pagerland/icons/src/line/TagAlt';
import ThumbsUp from '@pagerland/icons/src/line/ThumbsUp';
import ShieldCheck from '@pagerland/icons/src/line/ShieldCheck';
import Award from '@pagerland/icons/src/line/Award';
import Youtube from '@pagerland/icons/src/line/Youtube';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/header-photo.jpg';
import background2x from './assets/header-photo@2x.jpg';

import about1 from './assets/about/about-1.jpg';
import aboutLarge1 from './assets/about/about-huge-1.jpg';
import about12x from './assets/about/about-1@2x.jpg';
import about2 from './assets/about/about-2.jpg';
import aboutLarge2 from './assets/about/about-huge-2.jpg';
import about22x from './assets/about/about-2@2x.jpg';
import about3 from './assets/about/about-3.jpg';
import aboutLarge3 from './assets/about/about-huge-3.jpg';
import about32x from './assets/about/about-3@2x.jpg';

import exterior1 from './assets/exteriors/exterior-1.jpg';
import exterior12x from './assets/exteriors/exterior-1@2x.jpg';
import exterior2 from './assets/exteriors/exterior-2.jpg';
import exterior22x from './assets/exteriors/exterior-2@2x.jpg';

import interior1 from './assets/interiors/interior-1.jpg';
import interior12x from './assets/interiors/interior-1@2x.jpg';
import interior2 from './assets/interiors/interior-2.jpg';
import interior22x from './assets/interiors/interior-2@2x.jpg';
import interior3 from './assets/interiors/interior-3.jpg';
import interior32x from './assets/interiors/interior-3@2x.jpg';
import interior4 from './assets/interiors/interior-4.jpg';
import interior42x from './assets/interiors/interior-4@2x.jpg';
import interior5 from './assets/interiors/interior-5.jpg';
import interior52x from './assets/interiors/interior-5@2x.jpg';

import cooking1 from './assets/interiors/cooking-1.jpg';
import cooking12x from './assets/interiors/cooking-1@2x.jpg';
import cooking2 from './assets/interiors/cooking-2.jpg';
import cooking22x from './assets/interiors/cooking-2@2x.jpg';
import cooking3 from './assets/interiors/cooking-3.jpg';
import cooking32x from './assets/interiors/cooking-3@2x.jpg';
import cooking4 from './assets/interiors/cooking-4.jpg';
import cooking42x from './assets/interiors/cooking-4@2x.jpg';
import cooking5 from './assets/interiors/cooking-5.jpg';
import cooking52x from './assets/interiors/cooking-5@2x.jpg';

import tech1 from './assets/interiors/tech-1.jpg';
import tech12x from './assets/interiors/tech-1@2x.jpg';
import tech2 from './assets/interiors/tech-2.jpg';
import tech22x from './assets/interiors/tech-2@2x.jpg';
import tech3 from './assets/interiors/tech-3.jpg';
import tech32x from './assets/interiors/tech-3@2x.jpg';
import tech4 from './assets/interiors/tech-4.jpg';
import tech42x from './assets/interiors/tech-4@2x.jpg';
import tech5 from './assets/interiors/tech-5.jpg';
import tech52x from './assets/interiors/tech-5@2x.jpg';

import conf1 from './assets/interiors/conf-1.jpg';
import conf12x from './assets/interiors/conf-1@2x.jpg';
import conf2 from './assets/interiors/conf-2.jpg';
import conf22x from './assets/interiors/conf-2@2x.jpg';
import conf3 from './assets/interiors/conf-3.jpg';
import conf32x from './assets/interiors/conf-3@2x.jpg';
import conf4 from './assets/interiors/conf-4.jpg';
import conf42x from './assets/interiors/conf-4@2x.jpg';
import conf5 from './assets/interiors/conf-5.jpg';
import conf52x from './assets/interiors/conf-5@2x.jpg';

import surrounding1 from './assets/surroundings/surroundings-1.jpg';
import surrounding12x from './assets/surroundings/surroundings-1@2x.jpg';
import surrounding2 from './assets/surroundings/surroundings-2.jpg';
import surrounding22x from './assets/surroundings/surroundings-2@2x.jpg';
import surrounding3 from './assets/surroundings/surroundings-3.jpg';
import surrounding32x from './assets/surroundings/surroundings-3@2x.jpg';

import gallery1 from './assets/gallery/gallery-1.jpg';
import gallery2 from './assets/gallery/gallery-2.jpg';
import gallery3 from './assets/gallery/gallery-3.jpg';
import gallery4 from './assets/gallery/gallery-4.jpg';
import gallery5 from './assets/gallery/gallery-5.jpg';
import gallery6 from './assets/gallery/gallery-6.jpg';
import gallery7 from './assets/gallery/gallery-7.jpg';
import gallery8 from './assets/gallery/gallery-8.jpg';
import gallery9 from './assets/gallery/gallery-9.jpg';
import gallery10 from './assets/gallery/gallery-10.jpg';
import gallery11 from './assets/gallery/gallery-11.jpg';
import gallery12 from './assets/gallery/gallery-12.jpg';
import gallery13 from './assets/gallery/gallery-13.jpg';
import gallery14 from './assets/gallery/gallery-14.jpg';
import gallery15 from './assets/gallery/gallery-15.jpg';
import gallery1Thumbnail from './assets/gallery/thumbnails/gallery-1.jpg';
import gallery12xThumbnail from './assets/gallery/thumbnails/gallery-1@2x.jpg';
import gallery2Thumbnail from './assets/gallery/thumbnails/gallery-2.jpg';
import gallery22xThumbnail from './assets/gallery/thumbnails/gallery-2@2x.jpg';
import gallery3Thumbnail from './assets/gallery/thumbnails/gallery-3.jpg';
import gallery32xThumbnail from './assets/gallery/thumbnails/gallery-3@2x.jpg';
import gallery4Thumbnail from './assets/gallery/thumbnails/gallery-4.jpg';
import gallery42xThumbnail from './assets/gallery/thumbnails/gallery-4@2x.jpg';
import gallery5Thumbnail from './assets/gallery/thumbnails/gallery-5.jpg';
import gallery52xThumbnail from './assets/gallery/thumbnails/gallery-5@2x.jpg';
import gallery6Thumbnail from './assets/gallery/thumbnails/gallery-6.jpg';
import gallery62xThumbnail from './assets/gallery/thumbnails/gallery-6@2x.jpg';
import gallery7Thumbnail from './assets/gallery/thumbnails/gallery-7.jpg';
import gallery72xThumbnail from './assets/gallery/thumbnails/gallery-7@2x.jpg';
import gallery8Thumbnail from './assets/gallery/thumbnails/gallery-8.jpg';
import gallery82xThumbnail from './assets/gallery/thumbnails/gallery-8@2x.jpg';
import gallery9Thumbnail from './assets/gallery/thumbnails/gallery-9.jpg';
import gallery92xThumbnail from './assets/gallery/thumbnails/gallery-9@2x.jpg';
import gallery10Thumbnail from './assets/gallery/thumbnails/gallery-10.jpg';
import gallery102xThumbnail from './assets/gallery/thumbnails/gallery-10@2x.jpg';
import gallery11Thumbnail from './assets/gallery/thumbnails/gallery-11.jpg';
import gallery112xThumbnail from './assets/gallery/thumbnails/gallery-11@2x.jpg';
import gallery12Thumbnail from './assets/gallery/thumbnails/gallery-12.jpg';
import gallery122xThumbnail from './assets/gallery/thumbnails/gallery-12@2x.jpg';
import gallery13Thumbnail from './assets/gallery/thumbnails/gallery-13.jpg';
import gallery132xThumbnail from './assets/gallery/thumbnails/gallery-13@2x.jpg';
import gallery14Thumbnail from './assets/gallery/thumbnails/gallery-14.jpg';
import gallery142xThumbnail from './assets/gallery/thumbnails/gallery-14@2x.jpg';
import gallery15Thumbnail from './assets/gallery/thumbnails/gallery-15.jpg';
import gallery152xThumbnail from './assets/gallery/thumbnails/gallery-15@2x.jpg';

import property1 from './assets/similar-properties/property-1.jpg';
import property12x from './assets/similar-properties/property-1@2x.jpg';
import property2 from './assets/similar-properties/property-2.jpg';
import property22x from './assets/similar-properties/property-2@2x.jpg';
import property3 from './assets/similar-properties/property-3.jpg';
import property32x from './assets/similar-properties/property-3@2x.jpg';

import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

export default {
  title: 'E23 Milano',
  navbar: {
    links: [
      {
        to: 'welcome',
        'data-to': 'welcome',
        label: 'Home',
      },
      {
        to: 'about',
        'data-to': 'about',
        label: 'About',
      },
      // {
      //   to: 'exterior',
      //   'data-to': 'exterior',
      //   label: 'Exterior',
      // },
      {
        to: 'interior',
        'data-to': 'interior',
        label: 'Spazio',
      },
      {
        to: 'surroundings',
        'data-to': 'surroundings',
        label: 'Attività',
      },
      {
        to: 'location',
        'data-to': 'location',
        label: 'Dotazioni',
      },
      {
        to: 'gallery',
        'data-to': 'gallery',
        label: 'Gallery',
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contatti',
      },
    ],
    actions: [
      // {
      //   href:
      //     'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
      //   label: 'Buy theme',
      // },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'Real Estate',
    },
    title: 'Lo spazio esclusivo per aziende e professionisti',
    price: '',
    features: [
      {
        IconProps: {
          icon: WebGrid,
        },
        title: '5 800 sq. ft.',
      },
      {
        IconProps: {
          icon: BedDouble,
        },
        title: '7 bedrooms',
      },
      {
        IconProps: {
          icon: Bath,
        },
        title: '4 bathrooms',
      },
      {
        IconProps: {
          icon: CarSideview,
        },
        title: '2 cars garage',
      },
    ],
    cta: {
      to: 'contact',
      children: 'Contattaci',
    },
    cta_mobile: {
      href:'tel:+3965465489',
      children: 'Chiamaci'
    }
  },
  about: {
    title: "La location esclusiva, versatile, altamente personalizzata per aziende e professionisti.",
    text:
      textToMultiline`Un luminoso open space di 300 mq perfetto per eventi, riunioni, presentazioni, mostre, servizi fotografici, ma anche pranzi di lavoro, cocktail, press-day e cene aziendali.\n\n Una business suite ideale per vivere un’esperienza di lavoro unica in un ambiente riservato, dotato di spazi versatili, connessione e strumenti audio visivi, catering.`,
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`,
        },
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`,
        },
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`,
        },
      },
    ],
  },
  location: {
    title: textToMultiline`Un ambiente moderno.\nRiservato e confortevole.`,
    text:
      'Un ambiente moderno, riservato e confortevole, pensato per garantire un’esperienza di lavoro unica, facendoti sentire come fossi a casa tua. Ideale per i professionisti che cercano tranquillità e comfort per uno smartworking personalizzato, con moderne tecnologie. Lo spazio ampio con alti soffitti e finestre piene di luce naturale rendono la location ideale per scattare servizi fotografici e allestire mostre.',
    CountersTitle: 'Le nostre dotazioni',
    counters: [
      {
        IconProps: {
          icon: Wifi,
        },
        title: 'Wifi veloce',
        counter: {
          value: 0,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: Monitor,
        },
        title: 'Video Wall',
        counter: {
          value: 0,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: MeetingBoard,
        },
        title: 'Sistema di videoconferenza',
        counter: {
          value: 0,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: Microphone,
        },
        title: 'Impianto audio',
        counter: {
          value: 2,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: BoltAlt,
        },
        title: 'Torretta di ricarica',
        counter: {
          value: 18,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: Coffee,
        },
        title: 'Cucina attrezzata',
        counter: {
          value: 0,
          unit: ' ',
        },
      },
      {
        IconProps: {
          icon: Sunset,
        },
        title: 'Illuminazione graduale',
        counter: {
          value: 1,
          unit: ' ',
        },
      },
     {
        IconProps: {
          icon: Wind,
        },
        title: 'Aria condizionata',
        counter: {
          value: 3,
          unit: ' ',
        },
      },
    ],
    map: {
      cords: {
        lat: 45.4823978,
        lng: 9.2320234,
      },
    },
  },
  exterior: {
    sections: [
      {
        ImgProps: {
          src: exterior1,
          srcSet: `${exterior1} 1x, ${exterior12x} 2x`,
        },
        title: 'Modern an minimalistic exterior design',
        text:
          'Vestibulum sit amet consequat lacus. Nulla dapibus dignissim massa, quis mattis ante tempor in. Morbi mollis nibh dictum, eleifend tellus quis, lobortis ex. Donec tempor, massa in consequat pellentesque, nunc arcu tempus ex, nec accumsan sem augue eget urna.',
      },
      {
        ImgProps: {
          src: exterior2,
          srcSet: `${exterior2} 1x, ${exterior22x} 2x`,
        },
        title: 'Pure hary between space and function',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus. In consectetur velit est.',
      },
    ],
  },
  interior: {
    sections: [
      {
        slides: [
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
          {
            src: interior3,
            srcSet: `${interior3} 1x, ${interior32x} 2x`,
          },
          {
            src: interior4,
            srcSet: `${interior4} 1x, ${interior42x} 2x`,
          },
          {
            src: interior5,
            srcSet: `${interior5} 1x, ${interior52x} 2x`,
          },
        ],
        title: "Design e funzionalità",
        text: textToMultiline`Arredi design e ambienti luminosi caratterizzano un open space di 300 mq in stile contemporaneo, con spazi di lavoro trasformabili, secondo le diverse esigenze, in base al numero di partecipanti e alla tipologia di evento.\n\nAdatta come location per riprese video, può sembrare una casa, ma anche una galleria d'arte. L'interno ha un arredamento design che crea l'ambiente adatto a meeting formali ma anche eventi conviviali.`,
      },
      {
        slides: [
          {
            src: tech1,
            srcSet: `${tech1} 1x, ${tech12x} 2x`,
          },
          {
            src: tech2,
            srcSet: `${tech2} 1x, ${tech22x} 2x`,
          },
          {
            src: tech3,
            srcSet: `${tech3} 1x, ${tech32x} 2x`,
          },
          {
            src: tech4,
            srcSet: `${tech4} 1x, ${tech42x} 2x`,
          },
          {
            src: tech5,
            srcSet: `${tech5} 1x, ${tech52x} 2x`,
          },
        ],
        title: "Tecnologia e flessibilità",
        text: textToMultiline`Lo spazio trasformabile, adattabile alle diverse esigenze è dotato di audio diffusione e videowall per creare meeting, presentazioni, conferenze.\nGli alti soffitti e le finestre piene di luce naturale rendono la location ideale per scattare servizi fotografici e allestire mostre.`,
      },
      {
        slides: [
          {
            src: conf1,
            srcSet: `${conf1} 1x, ${conf12x} 2x`,
          },
          {
            src: conf2,
            srcSet: `${conf2} 1x, ${conf22x} 2x`,
          },
          {
            src: conf3,
            srcSet: `${conf3} 1x, ${conf32x} 2x`,
          },
          {
            src: conf4,
            srcSet: `${conf4} 1x, ${conf42x} 2x`,
          },
          {
            src: conf5,
            srcSet: `${conf5} 1x, ${conf52x} 2x`,
          },
        ],
        title: 'Comfort e privacy',
        text:
          'Un ambiente moderno, riservato e confortevole, pensato per garantire un’esperienza di lavoro unica, facendoti sentire come fossi a casa tua. Ideale per i professionisti che cercano tranquillità e comfort per uno smartworking personalizzato, con moderne tecnologie.',
      },
      {
        slides: [
          {
            src: cooking1,
            srcSet: `${cooking1} 1x, ${cooking12x} 2x`,
          },
          {
            src: cooking2,
            srcSet: `${cooking2} 1x, ${cooking22x} 2x`,
          },
          {
            src: cooking3,
            srcSet: `${cooking3} 1x, ${cooking32x} 2x`,
          },
          {
            src: cooking4,
            srcSet: `${cooking4} 1x, ${cooking42x} 2x`,
          },
          {
            src: cooking5,
            srcSet: `${cooking5} 1x, ${cooking52x} 2x`,
          },
        ],
        title: 'Ospitalità e home feeling',
        text:
          'Una cucina a scomparsa e un ampio tavolo possono accompagnare gli eventi con pause caffè, aperitivi e cene. A rendere l’esperienza unica, confortevole e distesa un’area fitness e anche un biliardo e un ping pong!',
      },
    ],
  },
  surroundings: {
    sections: [
      // {
      //   ImgProps: {
      //     src: surrounding1,
      //     srcSet: `${surrounding1} 1x, ${surrounding12x} 2x`,
      //   },
      //   title: 'Lo spazio',
      //   text:
      //     'Lo spazio ampio con alti soffitti e finestre piene di luce naturale rendono la location ideale per scattare servizi fotografici e allestire mostre. A rendere la esperienza unica, confortevole e distesa un area fitness e anche un biliardo e un ping pong!',
      //   cta: {
      //     as: 'a',
      //     label: 'Learn more',
      //     href:
      //       'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
      //   },
      // },
      {
        ImgProps: {
          src: surrounding2,
          srcSet: `${surrounding2} 1x, ${surrounding22x} 2x`,
        },
        title: 'Le attività',
        text:textToMultiline` - Smartworking\n - Eventi privati\n - Riunioni\n - Presentazioni\n - Mostre \n - Servizi fotografici\n -  Press-day\n - Cocktail\n - Cene aziendali\n`,
        /*cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },*/
      },
      {
        ImgProps: {
          src: surrounding3,
          srcSet: `${surrounding3} 1x, ${surrounding32x} 2x`,
        },
        title: 'Su richiesta',
        text:
          textToMultiline`-Catering\n-Mise en place\n-Hostess\n-Reception\n-Sicurezza\n-Personalizzazione\n-Allestimento\nService audio-video`,
        /*cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },*/
      },
    ],
  },
  gallery: {
    photos: [
      {
        source: gallery1,
        ImgProps: {
          src: gallery1Thumbnail,
          srcSet: `${gallery1Thumbnail} 1x, ${gallery12xThumbnail} 2x`,
        },
      },
      {
        source: gallery2,
        ImgProps: {
          src: gallery2Thumbnail,
          srcSet: `${gallery2Thumbnail} 1x, ${gallery22xThumbnail} 2x`,
        },
      },
      {
        source: gallery3,
        ImgProps: {
          src: gallery3Thumbnail,
          srcSet: `${gallery3Thumbnail} 1x, ${gallery32xThumbnail} 2x`,
        },
      },
      {
        source: gallery4,
        ImgProps: {
          src: gallery4Thumbnail,
          srcSet: `${gallery4Thumbnail} 1x, ${gallery42xThumbnail} 2x`,
        },
      },
      {
        source: gallery5,
        ImgProps: {
          src: gallery5Thumbnail,
          srcSet: `${gallery5Thumbnail} 1x, ${gallery52xThumbnail} 2x`,
        },
      },
      {
        source: gallery6,
        ImgProps: {
          src: gallery6Thumbnail,
          srcSet: `${gallery6Thumbnail} 1x, ${gallery62xThumbnail} 2x`,
        },
      },
      {
        source: gallery7,
        ImgProps: {
          src: gallery7Thumbnail,
          srcSet: `${gallery7Thumbnail} 1x, ${gallery72xThumbnail} 2x`,
        },
      },
      {
        source: gallery8,
        ImgProps: {
          src: gallery8Thumbnail,
          srcSet: `${gallery8Thumbnail} 1x, ${gallery82xThumbnail} 2x`,
        },
      },
      {
        source: gallery9,
        ImgProps: {
          src: gallery9Thumbnail,
          srcSet: `${gallery9Thumbnail} 1x, ${gallery92xThumbnail} 2x`,
        },
      },
      {
        source: gallery10,
        ImgProps: {
          src: gallery10Thumbnail,
          srcSet: `${gallery10Thumbnail} 1x, ${gallery102xThumbnail} 2x`,
        },
      },
      {
        source: gallery11,
        ImgProps: {
          src: gallery11Thumbnail,
          srcSet: `${gallery11Thumbnail} 1x, ${gallery112xThumbnail} 2x`,
        },
      },
      {
        source: gallery12,
        ImgProps: {
          src: gallery12Thumbnail,
          srcSet: `${gallery12Thumbnail} 1x, ${gallery122xThumbnail} 2x`,
        },
      },
      {
        source: gallery13,
        ImgProps: {
          src: gallery13Thumbnail,
          srcSet: `${gallery13Thumbnail} 1x, ${gallery132xThumbnail} 2x`,
        },
      },
      {
        source: gallery14,
        ImgProps: {
          src: gallery14Thumbnail,
          srcSet: `${gallery14Thumbnail} 1x, ${gallery142xThumbnail} 2x`,
        },
      },
      {
        source: gallery15,
        ImgProps: {
          src: gallery15Thumbnail,
          srcSet: `${gallery15Thumbnail} 1x, ${gallery152xThumbnail} 2x`,
        },
      },
    ],
  },
  contact: {
    title: 'Contatti',
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`,
    },
    details: {
      title: 'Contatta E23 per maggiori informazioni',
      text:
        'All’ingresso un’area reception è disponibile per gli accrediti.',
      info: [
        {
          icon: Building,
          text: 'E23 SRL',
        },
        {
          icon: MapMarker,
          text: textToMultiline`Via Averardo Buschi 1\n 20131 Milano (MI)`,
        },
        {
          icon: Phone,
          text: '+39 347 763 1778',
        },
        {
          icon: Envelope,
          text: 'info@e23-milano.com',
        },
      ],
      socialLinks: [
        {
          icon: FacebookF,
          href: 'https://mypags.app',
          title: 'Facebook',
        },
        {
          icon: Twitter,
          href: 'https://mypags.app',
          title: 'Twitter',
        },
        {
          icon: Instagram,
          href: 'https://mypags.app',
          title: 'Instagram',
        },
        {
          icon: Linkedin,
          href: 'https://mypags.app',
          title: 'Linkedin',
        },
      ],
    },
    form: {
      title: 'Manda un messaggio per esser contattato al più presto',
      sendButtonText: 'Invia',
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Inserisci massimo 15 caratteri').required('Campo obbligatorio'),
        email: Yup.string().email('Inserire una email valida').required('Campo obbligatorio'),
        message: Yup.string().min(20, 'Inserisci almeno 20 caratteri').required('Campo obbligatorio'),
        tos: Yup.boolean().oneOf([true], 'Il campo deve esser contrassegnato').required('Campo obbligatorio')
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          label: 'Nome e Cognome',
          placeholder: 'es. Mario Rossi',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Telefono',
          placeholder: 'es. 555-678-123',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'es. john.doe@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: 'message',
          label: 'Messaggio',
          placeholder: 'Scrivi qualcosa...',
          multiline: true,
          initialValue: '',
        },
      ],
      checkbox: {
        name: 'tos',
        id: 'tos',
        // label: "Ho letto e accetto l'informativa sulla privacy",
        initialValue:false
      }
    },

  },
  similarProperties: {
    title: 'Similar properties',
    properties: [
      {
        ImgProps: {
          src: property1,
          srcSet: `${property1} 1x, ${property12x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Villa with two terraces, swimming pool and beauitiful garden',
        price: '$3,450,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '3 400 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '5 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property2,
          srcSet: `${property2} 1x, ${property22x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Classic spanish style house with amazin mountains view',
        price: '$2,780,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '4 200 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '6 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '4 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property3,
          srcSet: `${property3} 1x, ${property32x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Completely renovated ground floor villa with swimming pool',
        price: '$1,950,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '2 800 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '4 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
    ],
  },
  footer: {
    title: 'About California Real Estates',
    text: textToMultiline`Cras sollicitudin erat sit amet egestas consequat. Quisque in purus sem. Integer condimentum nulla vel velit pretium, eget fringilla enim sodales. Nullam sit amet leo vitae mi laoreet varius eu vel est.\n\nMaecenas non lectus tincidunt, sodales leo pulvinar, condimentum urna. Fusce sed dui nec tortor tincidunt ultricies. Proin at convallis felis, sit amet varius velit.`,
    cta: {
      as: 'a',
      label: 'Learn more',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
    features: [
      {
        IconProps: {
          icon: TagAlt,
        },
        title: 'Best price on the market',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Satisfaction guarantee',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ShieldCheck,
        },
        title: 'Safety policy',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'Award winning company',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://mypags.app',
        title: 'Facebook',
      },
      {
        icon: Twitter,
        href: 'https://mypags.app',
        title: 'Twitter',
      },
      {
        icon: Instagram,
        href: 'https://mypags.app',
        title: 'Instagram',
      },
      {
        icon: Youtube,
        href: 'https://mypags.app',
        title: 'YouTube',
      },
      {
        icon: Linkedin,
        href: 'https://mypags.app',
        title: 'Linkedin',
      },
    ],
  },
  copyright: '© 2021 E23 Srl - P.I 10866290967',
};
