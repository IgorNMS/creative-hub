import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '',
        description: (
            <>
                Site criado usando o Docusaurus, para apresentação de alguns projetos e
                hobbys que faço no meu tempo livre.
                <br/>
                Tem alguns posts descrevendo os projetos e o do problema que ele resolve na aba blogs.
                <br/>
                Na aba docs tem algumas documentações e tutoriais.
                <br/>
                Sinta se a vontade para explorar e contribuir!
            </>
        ),
    },
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
        <section className={styles.features}>
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
