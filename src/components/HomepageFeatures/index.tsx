import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: "Quem sou eu?",
    icon: "",
    description: [
      "Desenvolvedor fullstack com 6+ anos de experiência, especializado em .NET (C#) e React/Next.js",
      "Forte atuação em APIs RESTful, microsserviços escaláveis e mensageria assíncrona (RabbitMQ)",
      "Experiência com CI/CD, versionamento semântico, testes automatizados e observabilidade com Application Insights e Serilog",
    ],
  },
  {
    title: "Minhas Experiências",
    icon: "",
    description: [
      "Aplicações .NET Core/.NET 6+ com foco em performance e desacoplamento",
      "Microsserviços integrados a SQL Server, MySQL, MongoDB e Redis",
      "Interfaces web com React + Next.js focando em SSR e UX",
      "Orquestração de eventos com RabbitMQ entre serviços",
      "Pipelines CI/CD com Azure DevOps, Docker e Docker Compose",
      "Testes unitários e de integração com xUnit, NUnit e mocking",
      "Arquitetura com foco em Clean Code, SOLID e DDD",
    ],
  },
  {
    title: "O que faço atualmente",
    icon: "",
    description: [
      "Backend com .NET 6/7/8, arquitetura limpa e escalabilidade horizontal",
      "Frontends com Next.js, TypeScript e Tailwind CSS",
      "Integrações via REST, mensageria, OAuth 2.0 e JWT",
      "Automação de pipelines com foco em deploys contínuos e observabilidade",
      "Estudando arquitetura hexagonal, containers e performance",
    ],
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <ul className={styles.cardList}>
        {description.map((item, idx) => (
          <li key={idx} className={styles.cardListItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
