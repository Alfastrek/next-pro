"use client";

import { CoinCard } from "../ui/CoinCard";
const coins1 = [
  {
    name: "Bitcoin (BTC)",
    imgSrc: "/images/Table/bitcoin.svg",
    high: 60000,
    low: 20000,
    chartData: [
      { time: "Jan", high: 50000, low: 18000 },
      { time: "Feb", high: 55000, low: 22000 },
      { time: "Mar", high: 60000, low: 25000 },
      { time: "Apr", high: 58000, low: 23000 },
      { time: "May", high: 59000, low: 24000 },
      { time: "Jun", high: 57000, low: 22000 },
    ],
  },
  {
    name: "Ethereum (ETH)",
    imgSrc: "/images/Table/cryptoone.svg",
    high: 5000,
    low: 1500,
    chartData: [
      { time: "Jan", high: 4000, low: 1200 },
      { time: "Feb", high: 4500, low: 1600 },
      { time: "Mar", high: 4800, low: 1800 },
      { time: "Apr", high: 5000, low: 1900 },
      { time: "May", high: 5100, low: 2000 },
      { time: "Jun", high: 4900, low: 1800 },
    ],
  },
  {
    name: "Tether (USDT)",
    imgSrc: "/images/Table/cryptothree.svg",
    high: 1.5,
    low: 0.8,
    chartData: [
      { time: "Jan", high: 1.4, low: 0.7 },
      { time: "Feb", high: 1.5, low: 0.8 },
      { time: "Mar", high: 1.45, low: 0.85 },
      { time: "Apr", high: 1.48, low: 0.88 },
      { time: "May", high: 1.49, low: 0.9 },
      { time: "Jun", high: 1.5, low: 0.88 },
    ],
  },
];

const coins2 = [
  {
    name: "Solana (SOL)",
    imgSrc: "/images/Table/solana.svg",
    high: 80,
    low: 10,
    chartData: [
      { time: "Jan", high: 50, low: 8 },
      { time: "Feb", high: 60, low: 15 },
      { time: "Mar", high: 70, low: 20 },
      { time: "Apr", high: 80, low: 30 },
      { time: "May", high: 75, low: 28 },
      { time: "Jun", high: 70, low: 25 },
    ],
  },
  {
    name: "Polygon (MATIC)",
    imgSrc: "/images/Table/polygon.svg",
    high: 4.0,
    low: 0.5,
    chartData: [
      { time: "Jan", high: 3.0, low: 0.4 },
      { time: "Feb", high: 3.5, low: 0.6 },
      { time: "Mar", high: 4.0, low: 0.8 },
      { time: "Apr", high: 3.8, low: 0.9 },
      { time: "May", high: 3.7, low: 1.0 },
      { time: "Jun", high: 3.5, low: 0.8 },
    ],
  },
  {
    name: "USDC (USDC)",
    imgSrc: "/images/Table/usdc.svg",
    high: 1.2,
    low: 0.2,
    chartData: [
      { time: "Jan", high: 0.9, low: 0.1 },
      { time: "Feb", high: 1.0, low: 0.2 },
      { time: "Mar", high: 1.1, low: 0.3 },
      { time: "Apr", high: 1.2, low: 0.4 },
      { time: "May", high: 1.3, low: 0.5 },
      { time: "Jun", high: 1.1, low: 0.3 },
    ],
  },
];

const coins3 = [
  {
    name: "Arbitrum (ARB)",
    imgSrc: "/images/Table/arbitrum.svg",
    high: 2.0,
    low: 0.5,
    chartData: [
      { time: "Jan", high: 1.5, low: 0.3 },
      { time: "Feb", high: 1.7, low: 0.5 },
      { time: "Mar", high: 2.0, low: 0.6 },
      { time: "Apr", high: 1.9, low: 0.7 },
      { time: "May", high: 1.8, low: 0.6 },
      { time: "Jun", high: 1.7, low: 0.5 },
    ],
  },
  {
    name: "Optimism (OP)",
    imgSrc: "/images/Table/optimism.svg",
    high: 5.0,
    low: 1.0,
    chartData: [
      { time: "Jan", high: 4.0, low: 0.8 },
      { time: "Feb", high: 4.5, low: 1.2 },
      { time: "Mar", high: 5.0, low: 1.5 },
      { time: "Apr", high: 4.8, low: 1.4 },
      { time: "May", high: 4.6, low: 1.3 },
      { time: "Jun", high: 4.3, low: 1.1 },
    ],
  },
  {
    name: "Litecoin (LTC)",
    imgSrc: "/images/Table/litecoin.svg",
    high: 300,
    low: 80,
    chartData: [
      { time: "Jan", high: 200, low: 70 },
      { time: "Feb", high: 250, low: 90 },
      { time: "Mar", high: 280, low: 110 },
      { time: "Apr", high: 300, low: 130 },
      { time: "May", high: 290, low: 120 },
      { time: "Jun", high: 270, low: 100 },
    ],
  },
];
export function CoinOverview() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        <CoinCard
          title="🚀 Top Cryptocurrencies"
          coins={coins1}
          latestHigh={0}
          latestLow={0}
        />
        <CoinCard
          title="💰 Other Cryptocurrencies"
          coins={coins2}
          latestHigh={0}
          latestLow={0}
        />
        <CoinCard
          title="🆕 Recently Added"
          coins={coins3}
          latestHigh={0}
          latestLow={0}
        />
      </div>
    </div>
  );
}

export default CoinOverview;
