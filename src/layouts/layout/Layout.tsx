import Head from 'next/head';
import Header from '../header/Header';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const pathToTitle: { [key: string]: string } = {
    '/#about': 'À Propos',
    '/#portfolio': 'Projets',
    '/#contact': 'Contact',
  };

  const title = pathToTitle[router.asPath] || 'Mon Portfolio';

  return (
    <>
      <Head>
        <title>{`${title} - Jessica LEMARCHAND`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>{children}</section>
    </>
  );
};

export default Layout;
