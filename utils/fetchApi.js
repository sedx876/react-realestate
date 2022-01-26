import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '94ed48a4cfmsh77b5a798b2f9860p12fc6djsnfffc2e935fbc'
    }
  })
  return data
}