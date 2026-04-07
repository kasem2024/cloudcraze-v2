"use client";
import React, { FC, useState } from "react";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import { GroupBase, StylesConfig } from "react-select";
import { geoApiOptions } from "@/data/api";

interface SearchProps {
  onSearchChange: (searchData: OptionType | null) => void;
}

interface OptionType {
  value: string;
  label: string;
}

const Search: FC<SearchProps> = ({ onSearchChange }) => {
  const [search, setSearch] = useState<OptionType | null>(null);

  const handleOnChange = (searchData: OptionType | null) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions: LoadOptions<
    OptionType,
    GroupBase<OptionType>,
    { page: number }
  > = async (inputValue) => {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions,
      );
      const data = await response.json();

      return {
        options: data.data.map((item: any) => ({
          value: `${item.latitude} ${item.longitude}`,
          label: `${item.name}, ${item.countryCode}`,
        })),
      };
    } catch (err) {
      console.error(err);
      return { options: [] };
    }
  };

  // 🎨 AAA STYLES
  const customStyles: StylesConfig<OptionType, false> = {
    control: (base, state) => ({
      ...base,
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
      backdropFilter: "blur(12px)",
      borderRadius: "12px",
      padding: "2px 6px",
      boxShadow: state.isFocused ? "0 0 0 1px rgba(34,211,238,0.6)" : "none",
      "&:hover": {
        border: "1px solid rgba(255,255,255,0.4)",
      },
    }),

    input: (base) => ({
      ...base,
      color: "#fff",
    }),

    placeholder: (base) => ({
      ...base,
      color: "rgba(255,255,255,0.6)",
    }),

    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),

    menu: (base) => ({
      ...base,
      background: "rgba(20,20,20,0.95)",
      backdropFilter: "blur(20px)",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      zIndex: 9999,
    }),

    menuList: (base) => ({
      ...base,
      maxHeight: "250px",
      padding: "4px",
    }),

    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "rgba(34,211,238,0.2)" : "transparent",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px",
      cursor: "pointer",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "rgba(255,255,255,0.6)",
      "&:hover": {
        color: "#22d3ee",
      },
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city..."
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
      isClearable
    />
  );
};

export default Search;
