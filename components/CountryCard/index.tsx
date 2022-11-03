import React from "react";
import Link from "next/link";

import styles from "./country-card.module.scss";

export  function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}) {

  return (
    <Link href={`/country/${name}`}>
      <div className={styles.container}>
        <div
          className={styles.header}
          style={{
            backgroundImage: `url(${flag})`,
          }}
        ></div>

        <div className={styles.body}>
          <h1>{name}</h1>
          <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Capital: {capital}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
