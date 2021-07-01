import styles from './styles.module.scss';

export default function SideNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={`${styles.nav__item} ${styles.nav__itemSelected}`}>
            <a href="#">
              <svg viewBox="0 0 576 512" width="100">
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
              </svg>
              <p className={styles.nav__itemlabel}>Dashboard</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.465 14.646c1.398 1.516-.156 3.949-2.146 3.227 1.462-.311 2.47-1.49 2.146-3.227zm-16.148 3.227c1.99.722 3.545-1.71 2.146-3.227.325 1.737-.683 2.916-2.146 3.227zm12.554-13.561c-.282-.764-1.01-1.312-1.871-1.312-1.298 0-2.313 1.244-1.904 2.582 1.111-.395 2.346-1.103 3.775-1.27zm7.129 11.688c0 2.761-2.238 5-5 5-4.039 0-4.156-4.123-7-4.123s-2.961 4.123-7 4.123c-2.762 0-5-2.239-5-5 0-2.135 1.535-4.567 3.941-8.821 1.908-3.372 4.754-1.26 6.815-.585.781.256 1.654.272 2.486 0 2.062-.674 4.908-2.787 6.815.585 2.408 4.254 3.943 6.686 3.943 8.821zm-16 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm5-2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm9 2c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-13-13c-.861 0-1.589.548-1.871 1.312 1.429.168 2.664.875 3.775 1.27.409-1.338-.606-2.582-1.904-2.582z" />
              </svg>
              <p className={styles.nav__itemlabel}>Search</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <svg viewBox="0 0 544 512" width="100">
                <path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" />
              </svg>
              <p className={styles.nav__itemlabel}>Subscription</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <svg viewBox="0 0 512 512" width="100">
                <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
              </svg>
              <p className={styles.nav__itemlabel}>Analytics</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <svg viewBox="0 0 576 512" width="100">
                <path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z" />
              </svg>
              <p className={styles.nav__itemlabel}>Download</p>
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">
              <svg viewBox="0 0 512 512" width="100">
                <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
              </svg>
              <p className={styles.nav__itemlabel}>Settings</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}