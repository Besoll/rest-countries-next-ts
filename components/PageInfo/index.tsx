import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetCountries } from "../../services/getCountries";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { Button } from "../Button";
import style from "./page-info.module.scss";
import Image from "next/image";
import Back from "../../assets/back.svg";

export function PageInfo({
  name,
  flag,
  nativeLanguage,
  population,
  region,
  capital,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}: {
  name: string;
  flag: string;
  nativeLanguage: string;
  population: number;
  region: string;
  capital: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: { name: string }[];
  languages: string[];
  borderCountries: string[];
}) {
  const getBorderNAme = new GetCountries();

  const [borderCountryName, setBorderCountryName] = useState([]);

  useEffect(() => {
    getBorderNAme.getCountriesByCode(borderCountries).then((data) => {
      setBorderCountryName(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.container}>
      <div className={style.first_block}>
        <Image src={flag} alt={name} />
      </div>
      <div className={style.second_block}>
        <div className={style.second_block_section_1}>
          <h1>{name}</h1>
          <p>
            <span>Native Language: </span>
            {nativeLanguage}
          </p>
          <p>
            <span>Population: </span>
            {numberWithCommas(population)}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Sub Region: </span>
            {subRegion}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
        <div className={style.second_block_section_2}>
          <p>
            <span>Top Level Domain: </span>
            {topLevelDomain}
          </p>
          <span>
            <ul>
              <span>Currencies: </span>

              {currencies &&
                currencies.map((currency, index) => (
                  <>
                    {currencies.length >= 0 && index < currencies.length - 1 ? (
                      <>
                        <li key={Math.floor(Math.random() * 1000 * index)}>
                          {currency.name},
                        </li>
                      </>
                    ) : (
                      <li key={Math.floor(Math.random() * 1000 * index)}>
                        {currency.name}
                      </li>
                    )}
                  </>
                ))}
            </ul>
          </span>
          <ul>
            <span>Languages: </span>
            {languages &&
              languages.map((language, index) => (
                <>
                  {languages.length > 0 && index < languages.length - 1 ? (
                    <>
                      <li key={Math.floor(Math.random() * 1000 * index)}>
                        {language},
                      </li>
                    </>
                  ) : (
                    <li key={Math.floor(Math.random() * 1000 * index)}>
                      {language}
                    </li>
                  )}
                </>
              ))}
          </ul>
        </div>
      </div>

      <div className={style.third_block}>
        <span>{borderCountries && " Border Countries:"} </span>
        <div className={style.boundary_container}>
          <>
            {borderCountries &&
              borderCountryName &&
              borderCountryName.map((borderCountry) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/country/${borderCountry.name.common}`}>
                    <Button
                      type="secondary"
                      text={borderCountry.name.common}
                      key={borderCountry.name.common}
                    />
                </Link>
              ))}
          </>
        </div>
      </div>
    </div>
  );
}
