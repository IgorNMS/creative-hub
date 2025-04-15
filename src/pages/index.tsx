import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Background from "@site/src/components/Background";
import {Analytics} from '@vercel/analytics/react';
import CEO from "../components/CEO";
import Link from "@docusaurus/Link";
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  void CEO();
  return (
      <header className={clsx("hero hero--black", styles.heroBanner)}>
        <Background>
          <div className="container">
            <h3 className="hero__title"><Translate description="The homepage to present myself">Quem sou eu?</Translate></h3>
            <p className="hero__subtitle">
            <Translate>Um dev Fullstack | .NET & Next.js | APIs escaláveis, microsserviços e CI/CD com Azure DevOps</Translate>
            </p>
          </div>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="docs"
                >
                  <Translate>Confira meus projetos!!</Translate>
                </Link>
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
