// 'use client'

// import React, { FC, useState } from 'react'
// import { AsyncPaginate } from 'react-select-async-paginate'
// import { LoadOptions, GroupBase } from 'react-select';
// import {geoApiOptions} from "@/data/api";
// interface SearchProps {
//   onSearchChange:()=> void;
// }
// const Search : FC<SearchProps> = ({ onSearchChange } ) => {
//   const [search, setSearch] = useState(null)

//   const handleOnChange = (searchData :any ) => {
//     setSearch(searchData)
//     onSearchChange(searchData)
//   }
  
//   const loadOptions  = async(inputValue : any ) => {
//     return fetch(
//       `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputValue}`,
//       geoApiOptions
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         return {
//           options: response.data.map((item : any) => {
//             return {
//               value: `${item.latitude} ${item.longitude}`,
//               label: `${item.name}, ${item.countryCode} `,
//             }
//           }),
//         }
//       })
//       .catch((err) => console.log(err))
//   }
//   console.log( 'LoadOption is here',loadOptions)
//   return (
//     <AsyncPaginate
//       placeholder="Search for city"
//       debounceTimeout={600}
//       value={search}
//       onChange={handleOnChange}
//       loadOptions={loadOptions}
//     />
//   )
// }
// export default Search
'use client'
import React, { FC, useState } from 'react';
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate';
import { GroupBase } from 'react-select';
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

  const loadOptions: LoadOptions<OptionType, GroupBase<OptionType>, { page: number }> = async (
    inputValue,

  
  ) => {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const data = await response.json();
      const options = data.data.map((item: any) => ({
        value: `${item.latitude} ${item.longitude}`,
        label: `${item.name}, ${item.countryCode}`,
      }));
      return {
        options,
       
     
      };
    } catch (err) {
      console.error(err);
      return {
        options: [],
      };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
