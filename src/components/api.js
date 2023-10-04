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

export async function getData() {
    try {
        const responsePromoted = await axios.get("https://kojocalls.onrender.com/api/promoted");
        const idsString = responsePromoted.data.map(item => item.coinId).join('%2C');

        console.log("Promoted IDs:", idsString);

        const promUrl = idsString
            ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsString}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
            : null;

        const responseVerifyPromoted = await axios.get(promUrl);
        const verifyPromoted = responseVerifyPromoted.data;
        console.log("verify promo", verifyPromoted);

        return verifyPromoted;
    } catch (error) {
        console.error(error);
        return null
    }
}
