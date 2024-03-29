import Image from 'next/image';
import { Text } from '../text';
import { Heading } from '../heading';
import { Tabs } from '../tabs';
import DashboardImage from '../../../../public/dashboard.png';
import styles from './styles.module.scss';

export default function Services() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.text__box_mobile}>
        <Text
          title="Growing your business <br>just got easier."
          // subtitle="Find business emails"
          content="85% of B2B marketers say lead generation is their most <br/>important content marketing goal."
          isButton={true}
          isDark={true}
          buttonText="Get Started"
          buttonClasses="btn btn_outline_secondary"
          buttonUrl="/dashboard/search/youtube"
        />
      </div>
      <div className={styles.services_wrap__inner}>
        <Heading title="Our Services" isUnderline={true} isDark={true} />

        {/* <Tabs items={[]} defaultActive="search" /> */}

        <div className={styles.services_items}>
          <Text
            title=""
            typedText={true}
            content="Our simple and easy-to-use dashboard lets you search for leads with filters for fast searching."
            isDark={true}
            isButton={true}
            buttonText="Go to Dashboard"
            buttonClasses="btn btn_outline_secondary"
            buttonUrl="/dashboard/search/youtube"
          />

          <div id="features" className={`${styles.features_wrap__thumbnail}`}>
            <Image src={DashboardImage} alt="Search for your lead" width="441" height="312" />
          </div>
        </div>
      </div>
    </div>
  );
}
