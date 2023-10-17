import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header = ({ name }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <p>facebook / react</p>
        <p>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              height={30}
              width={30}
              alt=""
            />
          </Link>
        </p>
      </div>
      <div className={styles.bottomHeader}>
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
