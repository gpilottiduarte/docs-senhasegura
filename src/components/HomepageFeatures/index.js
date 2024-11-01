import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Changelog',
    Img: '/img/settings.png',
    link: '/docs/changelog', // Adiciona o link correspondente
    description: (
      <>
       Check the changelog for the new senhasegura version.
      </>
    ),
  },
  {
    title: 'Upgrade notes',
    Img: '/img/reports.png',
    link: '/docs/upgrade_notes', // Adiciona o link correspondente
    description: (
      <>
        Check the upgrade notes for the new senhasegura version
      </>
    ),
  },
  {
    title: 'Documentation',
    Img: '/img/desktop.png',
    link: '/docs/changelog', // Adiciona o link correspondente
    description: (
      <>
        Check the senhasegura documentation.
      </>
    ),
  },
];

function Feature({Img, link, title, description}) {
  const imgStyle = {
    /* Removemos as definições de tamanho para usar o tamanho original */
  };

  return (
    <div className={styles.feature}>
      <div className="text--center">
        <Link to={link}>
          <img src={Img} style={imgStyle} className={styles.featureImage} alt={title} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}