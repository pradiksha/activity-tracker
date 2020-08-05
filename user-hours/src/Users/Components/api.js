import { fetchData } from "shared/fetchAuth"


export const getAllApi = () => {
  const url = " https://run.mocky.io/v3/da1b55dd-12ed-43f5-80d3-a1efad14b891"

  return fetchData(url)
}