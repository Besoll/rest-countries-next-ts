import Link from "next/link";
import s from "../../styles/info-page.module.scss";
import { useEffect, useState } from "react";
import { Button, Footer, Header, PageInfo } from "../../components/";
import { GetCountries } from "../../services/getCountries";
import Back from "../../assets/back.svg";

export async function getStaticPaths() {
  const country = new GetCountries();
  const countries = await country.getCountries();
  const paths = countries.map((country: { name: { common: string } }) => ({
    params: {
      countryName: country.name.common,
    },
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async (context: {
  params: { countryName: string };
}) => {
  const countryName = context.params.countryName;

  const country = new GetCountries();

  const countryData = await country
    .getCountriesByName(countryName)
    .then((res) => {
      return res;
    });
  return {
    props: {
      countryName: countryData[0],
    },
  };
};

export default function CountryDetail({ countryName }) {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    setCountryInfo(countryName);
  }, [countryName]);

  return (
    <div className={s.container}>
      <Header />
      <div className={s.main_info}>
        <div className={s.back}>
          <Link href="/" passHref>
              <Button
                text={"Back"}
                type={"secondary"}
                icon={<Back />}
                onClick={() => {
                }}
              />
          </Link>
        </div>
        {countryInfo !== null && (
          <>
            <PageInfo
              name={countryInfo.name.common}
              flag={countryInfo.flags.svg}
              nativeLanguage={
                [Object.values(countryInfo.languages)[0]] as unknown as string
              }
              population={countryInfo.population}
              region={countryInfo.region}
              capital={countryInfo.capital[0]}
              subRegion={countryInfo.subregion}
              topLevelDomain={countryInfo.tld}
              currencies={Object.values(countryInfo.currencies)}
              languages={
                Object.values(countryInfo.languages) as unknown as string[]
              }
              borderCountries={countryInfo.borders}
            />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}
