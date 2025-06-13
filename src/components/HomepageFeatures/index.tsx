import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Box } from "@mui/material";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "QUEM SOU EU?",
    description: (
      <>
        <div>
          Sou Igor Nascimento, desenvolvedor fullstack com 4+ anos de
          experiência profissional, especializado em .NET (C#) no backend e
          React/Next.js no frontend.
          <br />
          Possuo forte atuação em ambientes de alta demanda, com foco em
          construção de APIs RESTful, microsserviços escaláveis, mensageria
          assíncrona (RabbitMQ) e arquiteturas orientadas a eventos.
          <br />
          Domino práticas modernas de desenvolvimento como CI/CD, versionamento
          semântico, integração contínua, testes automatizados e monitoramento
          com ferramentas como Application Insights e Serilog.
        </div>
      </>
    ),
  },
  {
    title: "MINHAS EXPERIENCIAS:",
    description: (
      <>
        <div>
          <p>
            Desenvolvi e mantive aplicações baseadas em .NET Core/.NET 6+, com
            foco em performance e desacoplamento.
            <br />
            Implementei microsserviços com integração a bancos relacionais (SQL
            Server, MySQL) e NoSQL (MongoDB, Redis).
            <br />
            Atuei na criação de interfaces web com React + Next.js, focando em
            renderização SSR e experiência do usuário.
            <br />
            Utilizei RabbitMQ para orquestração de eventos e comunicações
            assíncronas entre serviços.
            <br />
            Automatizei pipelines de build e deploy usando Azure DevOps, com
            versionamento de pacotes via NuGet e deploy em containers com Docker
            e Docker Compose.
            <br />
            Escrevi testes unitários e de integração com xUnit, NUnit e
            ferramentas de mocking.
            <br />
            Participei ativamente da definição de arquitetura e refatorações com
            foco em clean code, SOLID e DDD.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "O QUE FAÇO ATUALMENTE:",
    description: (
      <>
        <div>
          <p>
            Desenvolvo aplicações backend com .NET 6/7/8, seguindo princípios de
            arquitetura limpa e com foco em escalabilidade horizontal.
            <br />
            Crio frontends utilizando Next.js, com TypeScript, Tailwind CSS e
            consumo eficiente de APIs.
            <br />
            Integro soluções com sistemas externos via REST e mensageria, além
            de trabalhar com autenticação e autorização (OAuth 2.0, JWT).
            <br />
            Participo da automação de pipelines, com foco em deploys contínuos,
            testes automatizados e observabilidade.
            <br />
            Estou constantemente estudando temas como arquitetura hexagonal,
            containers, performance e boas práticas de engenharia de software.
          </p>
        </div>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col")}>
      <Box
        sx={{
          border: 2,
          borderColor: "#242538",
          borderRadius: "10px",
          p: "10px",
          m: "5px",
        }}
      >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
      </Box>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div>
        <div className={styles.modContainer}>
          <div className={styles.resume}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
