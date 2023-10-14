import axios from 'axios';

export async function getCoin(coin) {
    const url = `https://api.coingecko.com/api/v3/coins/${coin}?localization=false`

    try {
        const response = await axios.get(url);
        console.log(response.data)
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

export async function loginUser(creds){
    
    const res =  await fetch("https://kojocalls.onrender.com/api/login",
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(creds), // body data type must match "Content-Type" header
    })
  
    const data = await res.json()
    console.log(data) 
    if (!res.ok) {
      if (res.status === 401) {
          throw new Error("User not found");
      } else {
          throw new Error(`Error: ${data.message} - ${res.statusText} (Status: ${res.status})`);
      }
  }
    return data
  }

  export async function links(id) {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
      const response = await axios.get(url);
      console.log("verify promo", response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it outside this function, if necessary
    }
  }
  