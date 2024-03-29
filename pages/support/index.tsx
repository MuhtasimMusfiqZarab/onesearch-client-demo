import Head from 'next/head';
import Footer from 'components/shared/footer';
import { ForbiddenAccess } from 'components/general';
import styles from './styles.module.scss';
import { MessengerChat } from 'components/general/custom-chat';

const Support = () => {
  return (
    <>
      <Head>
        <title>Support</title>
        <meta property="og:support" content="Support" key="support" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>

      <div className={styles.privacy_policy}>
        <div className={styles.privacy_policy__content}>
          <a href="/" className={styles.go_to_home}>
            Go to Home
          </a>
          <h1>Support</h1>
          <p>
            Please contact us to know all about the Site and all products and services offered by
            us.
          </p>

          <h3>How to react us</h3>
          <p>
            If you have any queries regarding the Privacy policy or any other dealings with this
            site, please feel free to contact us at{' '}
            <a href="mailto:onesearchteam@gmail.com">onesearchteam@gmail.com</a>.
          </p>

          <h3> Mailing Address </h3>
          <div> ONESEARCH.IO LTD </div>
          <div> 63/66 Hatton Garden </div>
          <div> Fifth Floor, Suite 23 </div>
          <div> London </div>
          <div> EC1N 8LE </div>
          <div> United Kingdom </div>
          <div className={styles.map}>{/* <Map /> */}</div>
        </div>
      </div>
      <MessengerChat chatSupport={true} />
      <Footer />
    </>
  );
};

export default Support;
