import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Background from "@site/src/components/Background";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--black", styles.heroBanner)}>
        <Background>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">Meus hobbys!</p>
            <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
              >
                Confira! 👁
              </Link>
            </div>
          </div>
        </Background>
      </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
