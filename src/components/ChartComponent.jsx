import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const ChartComponent = ({ data, colors }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor || 'white' },
        textColor: colors.textColor || 'black',
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor: colors.lineColor || '#2962FF',
      topColor: colors.areaTopColor || '#2962FF',
      bottomColor: colors.areaBottomColor || 'rgba(41, 98, 255, 0.28)',
    });
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data, colors]);

  return <div ref={chartContainerRef} />;
};

export default ChartComponent;
