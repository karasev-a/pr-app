import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import utilStyles from "@/styles/utils.module.scss";
import styles from "./header.module.scss";

const Header = ({ name }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </>
      <div>
        <ul className={styles.navLinks}>
          <li className={router.asPath == "/" ? styles.active : ""}>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li className={router.asPath == "/pulls" ? styles.active : ""}>
            <Link href="/pulls">
              <p>Pull requests</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
