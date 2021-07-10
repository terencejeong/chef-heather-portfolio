import Head from 'next/head';
import { Header } from 'components';
import { SiteLayoutStyles } from './SiteLayout.styles';

const SiteLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Omma's Recipes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Playfair_Display/PlayfairDisplay-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Playfair_Display/PlayfairDisplay-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora/static/Lora-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Merriweather/Merriweather-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Merriweather/Merriweather-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Merriweather/Merriweather-Light.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <SiteLayoutStyles.Main>{children}</SiteLayoutStyles.Main>
      <SiteLayoutStyles.Footer>This is the footer</SiteLayoutStyles.Footer>
    </>
  );
};

export default SiteLayout;
