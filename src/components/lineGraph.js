import React from 'react';

export default function LineGraph({ data }) {
  const casesData = data.map(({ newCases }) => newCases);
  const dataHighestValue = Math.max.apply(null, casesData);

  const initialX = 20;
  const initialY = 310;
  const offset = 5;

  const points = casesData.map((value, i) => {
    const barHeight = (value * 100) / dataHighestValue;
    const nextbarHeight = data[i + 1] ? (casesData[i + 1] * 100) / dataHighestValue : barHeight;
    return `M${initialX + offset * i} ${initialY - barHeight * 3} L${initialX + offset * (i + 1)} ${initialY - nextbarHeight * 3}`;
  });

  const path = (points.toString(' '));

  return (
    <svg width="100%" height="400" stroke="black">
      <path d={path} />
    </svg>
  );
}
