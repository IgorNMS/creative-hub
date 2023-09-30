import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Background from "@site/src/components/Background";
import { Analytics } from '@vercel/analytics/react';
import CEO from "../components/CEO";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  CEO();
  return (
      <header className={clsx("hero hero--black", styles.heroBanner)}>
        <Background>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
              Confira meus projetos.
            </p>
            <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  to="docs"
              >
                Confira! 👁
              </Link>
            </div>
          </div>
        </Background>
      </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Analytics/>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
