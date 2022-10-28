import React, { useState } from "react";
import { GetCountries } from "../../services/getCountries";
import s from "./filter.module.scss";

export  function Filter({
  type,
  value,
  SetCountries,
  setLoading,
}: {
  type: string;
  value: string[];
  SetCountries: (countries: any) => void;
  setLoading: (loading: boolean) => void;
}) {
  const [selectedOption, setSelectedOption] = useState("");


  
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    let selectValue = event.target.value as string;
    setSelectedOption(selectValue);
    const country = new GetCountries();

    setLoading(true);
    
    country.getCountryByRegion(selectValue).then((res) => {
      SetCountries(res);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    });

    if (selectValue === "") {
      country.getCountries().then((res) => {
        SetCountries(res);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      });
    }
  };

  return (
    <>
      <select
        value={selectedOption}
        onChange={(e) => {
          handleChange(e);
        }}
        className={s.container}
        name={type}
        id={type}
      >
        <option className="first-element" value="">
          Select a {type}
        </option>

        {value.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
