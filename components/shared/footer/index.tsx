import Link from 'next/link';
import { FacebookIcon, Logo, YoutubeIcon, LinkedinIcon } from 'components/_icons';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_widget}>
          <Link href="/">
            <a className={styles.footer_widget_logo}>
              <Logo />
            </a>
          </Link>

          <div className={styles.socials}>
            <ul>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_widget}>
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.footer_widget} ${styles.footer_widget_subscription}`}>
          <h3>Subscribe us for updates and news</h3>
          <div className={styles.subscription_form}>
            <form action="">
              <input type="email" placeholder="Email" required />
              <button className="btn btn_fill_white" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footer_copy}>
        <p>{new Date().getFullYear()} © OneSearch. All rights reserved</p>
      </div>
    </footer>
  );
}