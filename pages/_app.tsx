import Layout from '@/common/tabs';
import '@/styles/globals.css';
import App from 'next/app';
import { withRouter } from 'next/router';
import { QrStyleProvider } from '../context';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps: { ...pageProps },
    } = this.props;
    return (
      <QrStyleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QrStyleProvider>
    );
  }
}

export default withRouter(MyApp);
