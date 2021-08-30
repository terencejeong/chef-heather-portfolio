// @ts-nocheck
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

        <script>
          {(function (l, i, n, k, t, r, ee) {
            (l[t] =
              l[t] ||
              function () {
                (l[t].q = l[t].q || []).push(arguments);
              }),
              (l[t].l = 1 * new Date());
            r = i.createElement(n);
            ee = i.getElementsByTagName(n)[0];
            r.async = 1;
            r.src = k;
            ee.parentNode.insertBefore(r, ee);
          })(
            window,
            document,
            'script',
            'https://assets.production.linktr.ee/ltpixel/ltpix.min.js?t=' +
              864e5 * Math.ceil(new Date() / 864e5),
            'lti'
          )}
        </script>
        <script>
          {(function () {
            console.log('hello');
            window.lti('init', 'LTU-abba3c96-170a-4772-a39f-2781338d25b9');
            window.localStorageti('pageloaded');
          })()}
        </script>
      </Head>
      <Header />
      <SiteLayoutStyles.Main>{children}</SiteLayoutStyles.Main>
      <SiteLayoutStyles.Footer>This is the footer</SiteLayoutStyles.Footer>
    </>
  );
};

export default SiteLayout;
