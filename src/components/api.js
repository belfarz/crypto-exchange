import axios from 'axios';

export async function getCoin(coin) {
    const url = `https://api.coingecko.com/api/v3/coins/${coin}?localization=false`

    try {
        const response = await axios.get(url);
        return response.data; // Return the data fetched from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null if there is an error during the request
    }
}