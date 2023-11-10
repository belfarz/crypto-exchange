// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function Chart({ name }) {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_35089') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: window.innerWidth < 765 ? window.innerWidth-15 : window.innerWidth/2,
            height: 500,
            symbol: `${name}USD`,
            timezone: "Etc/UTC",
            theme: "dark",
            interval: "60",
            style: "1",
            locale: "en",
            enable_publishing: true,
            withdateranges: true,
            range: "YTD",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: "tradingview_35089"
          });
        }
      }
    },
    [name]
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_35089' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" ><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}
