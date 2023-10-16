import Head from "next/head";

import Header from "../shared/header/header";
import styles from "./layout.module.scss";

const name = "Alex Kar";
export const siteTitle = "My github";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header name={name} />
      <main>{children}</main>
    </div>
  );
}
