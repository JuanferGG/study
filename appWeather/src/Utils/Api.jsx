import axios from 'axios'
import { useQuery } from 'react-query'

// eslint-disable-next-line react-refresh/only-export-components
const ApiKey = import.meta.env.VITE_API_KEY;

const getWeatherData = async (city) => {
    try {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=no`)
        return data
    } catch (error) {
        // console.log(error.response.data.error.message)
    }
}

export const useWeatherData = (city) => {
    return useQuery(['weatherData', city], () => getWeatherData(city), {
        enabled: !!city
    })
}