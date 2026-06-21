import { useQuery } from '@tanstack/react-query'
import { getHolidays, getCountries } from './api/holidays'
import { useState } from 'react'

const PublicHolidays = () => {

    const [countryIsoCode, setCountryIsoCode] = useState('DE')

    const holidaysQuery = useQuery({
        queryKey: ['holidays', countryIsoCode],
        queryFn: () => getHolidays(countryIsoCode),
    })

    const countriesQuery = useQuery({
        queryKey: ['countries'],
        queryFn: getCountries
    })


    return (
        
        <>
        <h3>Public Holidays</h3>
        <select
        value={countryIsoCode}
        onChange={(e) => setCountryIsoCode(e.target.value)}
        >
        {countriesQuery.data?.map((country => (
            <option key={country.isoCode} value={country.isoCode}>{country.name[0]?.text}</option>
        )))}
        
        </select>



        {holidaysQuery.data?.map(point =>(
            <ul key={point.id}>
                <li> {point.startDate} - {point.name[0]?.text}</li>
            </ul>

        ))}

        </>
    )

}

export default PublicHolidays