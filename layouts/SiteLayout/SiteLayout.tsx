import Head from 'next/head';
import { Header } from 'components';
import { SiteLayoutStyles } from './SiteLayout.styles';

const SiteLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Omma's Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SiteLayoutStyles.Main>{children}</SiteLayoutStyles.Main>
      {/* <SiteLayoutStyles.Footer>This is the footer</SiteLayoutStyles.Footer> */}
    </>
  );
};

export default SiteLayout;
