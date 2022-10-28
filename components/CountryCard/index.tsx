import Link from "next/link"
import s from "./country-card.module.scss"

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
      
        <div className={s.container}>
          <div
            className={s.header}
            style={{
              backgroundImage: `url(${flag})`,
            }}
          ></div>

          <div className={s.body}>
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
