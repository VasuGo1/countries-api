// pages/api/countries.js

export default async function handler(req, res) {
  // Fetch data from REST Countries API
  const url = 'https://restcountries.com/v3.1/all';

  try {
    const response = await fetch(url);
    const countries = await response.json();

    // Map the data to the required format
    const formattedCountries = countries.map(country => ({
      value: country.cca2,  // 2-letter country code
      label: country.name.common  // Common name of the country
    }));

    // Send the formatted data as a JSON response
    res.status(200).json(formattedCountries);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching country data' });
  }
}
