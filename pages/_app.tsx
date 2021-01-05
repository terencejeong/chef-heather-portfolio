import { createGlobalStyle } from 'styled-components';
import SiteLayout from 'layouts/SiteLayout/SiteLayout';
import { GlobalStyleRules } from 'styles/Global.styles';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`${GlobalStyleRules}`;

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || SiteLayout;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
