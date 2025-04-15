import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'QUEM SOU EU?',
        description: (
            <>
                Sou Igor Nascimento, desenvolvedor fullstack com 4+ anos de experiência profissional, especializado em .NET (C#) no backend e React/Next.js no frontend. 
                <br/>
                Possuo forte atuação em ambientes de alta demanda, com foco em construção de APIs RESTful, microsserviços escaláveis, mensageria assíncrona (RabbitMQ) e arquiteturas orientadas a eventos. 
                <br/>
                Domino práticas modernas de desenvolvimento como CI/CD, versionamento semântico, integração contínua, testes automatizados e monitoramento com ferramentas como Application Insights e Serilog.
            </>
        ),
    },
    {
        title: 'MINHAS EXPERIENCIAS:',
        description: (
            <>
                <ul>
                    <li>Desenvolvi e mantive aplicações baseadas em .NET Core/.NET 6+, com foco em performance e desacoplamento.</li>
                    <li>Implementei microsserviços com integração a bancos relacionais (SQL Server, MySQL) e NoSQL (MongoDB, Redis).</li>
                    <li>Atuei na criação de interfaces web com React + Next.js, focando em renderização SSR e experiência do usuário.</li>
                    <li>Utilizei RabbitMQ para orquestração de eventos e comunicações assíncronas entre serviços.</li>
                    <li>Automatizei pipelines de build e deploy usando Azure DevOps, com versionamento de pacotes via NuGet e deploy em containers com Docker e Docker Compose.</li>
                    <li>Escrevi testes unitários e de integração com xUnit, NUnit e ferramentas de mocking.</li>
                    <li>Participei ativamente da definição de arquitetura e refatorações com foco em clean code, SOLID e DDD.</li>
                </ul>
            </>
        )
    },
    {
        title: 'O QUE FAÇO ATUALMENTE:',
        description: (
            <>
                <ul>
                    <li>Desenvolvo aplicações backend com .NET 6/7/8, seguindo princípios de arquitetura limpa e com foco em escalabilidade horizontal.</li>
                    <li>Crio frontends utilizando Next.js, com TypeScript, Tailwind CSS e consumo eficiente de APIs.</li>
                    <li>Integro soluções com sistemas externos via REST e mensageria, além de trabalhar com autenticação e autorização (OAuth 2.0, JWT).</li>
                    <li>Participo da automação de pipelines, com foco em deploys contínuos, testes automatizados e observabilidade.</li>
                    <li>Estou constantemente estudando temas como arquitetura hexagonal, containers, performance e boas práticas de engenharia de software.</li>
                </ul>
            </>
        )
    }
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--10')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section>
            <div className="container">
                <div className={styles.resumo}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
