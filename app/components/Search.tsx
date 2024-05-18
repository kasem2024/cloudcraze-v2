'use client'

import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {geoApiOptions} from "@/data/api"
const Search = ({ onSearchChange } : {onSearchChange:any} ) => {
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData : any ) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  
  const loadOptions  = async(inputValue : any) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((item : any) => {
            return {
              value: `${item.latitude} ${item.longitude}`,
              label: `${item.name}, ${item.countryCode} `,
            }
          }),
        }
      })
      .catch((err) => console.log(err))
  }
  console.log( 'LoadOption is here',loadOptions)
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}
export default Search
