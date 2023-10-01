import React, { useEffect } from 'react';

const Sticker = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100',
        },
        {
          proName: 'FX_IDC:EURUSD',
          title: 'EUR to USD',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
        {
          description: 'Binance',
          proName: 'BINANCE:BNBUSDT',
        },
        {
          description: 'Cardano',
          proName: 'BINANCE:ADAUSDT',
        },
        {
          description: 'BNB',
          proName: 'CRYPTOCAP:BNB',
        },
        {
          description: 'Shiba',
          proName: 'COINBASE:SHIBUSD',
        },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'regular',
      locale: 'en',
    });
    document.getElementById('tradingview-widget-script').appendChild(script);

    return () => {
        document.getElementById('tradingview-widget-script').removeChild(script);
      };
  }, []);
  

  return (
    <div className="tradingview-widget-container  ">
      <div className="tradingview-widget-container__widget z-[199]  w-[800px]" id="tradingview-widget-script"></div>
      
    </div>
  );
};

export default Sticker;
