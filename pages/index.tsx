import Head from "next/head";

import { useEffect, useState } from "react";

import SearchIcon from "../assets/search.svg";

import {
  Header,
  SearchBar,
  Filter,
  CountryCard,
  Loading,
  Footer,
  NotFound,
} from "../components/";

import stylesFilter from "../styles/filter-section.module.scss";
import stylesCard from "../styles/card-section.module.scss";
import styleApp from "../styles/app-section.module.scss";

import { GetCountries } from "../services/getCountries";
import { numberWithCommas } from "../utils/numberWithCommas";

export default function Home() {
  const [countries, SetCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const country = new GetCountries();
    country.getCountries().then((res) => {
      SetCountries(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styleApp.container}>
      <Head>
        <title>REST Countries API with color theme switcher</title>
        <meta name="description" content="Generated Besik Kavzharadze inspired by George Báez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className={stylesFilter.container}>
          <SearchBar
            placeholder="Search for a country..."
            icon={<SearchIcon />}
            SetCountries={SetCountries}
            setLoading={setLoading}
          />
          <Filter
            type={"region"}
            value={["Africa", "America", "Asia", "Europe", "Oceania"]}
            SetCountries={SetCountries}
            setLoading={setLoading}
          />
        </div>
      </div>

      <main className={loading ? styleApp.loading : styleApp.loaded}>
        {/* card container */}
        <div className={stylesCard.main}>
          <div className={stylesCard.container}>
            {loading ? (
              <Loading />
            ) : countries === false as any? (
              <NotFound />
            ) : (
              countries.map((country) => (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  population={numberWithCommas(country.population)}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flags[0] || country.flags.svg}
                />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
