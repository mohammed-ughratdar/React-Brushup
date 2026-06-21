import axios from 'axios'
import type { Holiday, Country } from '../types/holidays'

const BASE_URL = 'https://openholidaysapi.org'
const VALID_FROM = '2023-01-01'
const VALID_TO = '2023-12-31'

export const getHolidays = async (countryIsoCode: string): Promise<Holiday[]> => {
    const response = await axios.get(`${BASE_URL}/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=${VALID_FROM}&validTo=${VALID_TO}`)
    return response.data
}

export const getCountries = async (): Promise<Country[]> => {
    const response = await axios.get(`${BASE_URL}/Countries?languageIsoCode=en`)
    return response.data
}