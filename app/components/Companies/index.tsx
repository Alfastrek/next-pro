"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "flag-icons/css/flag-icons.min.css";
import { TrendingUp, TrendingDown } from "lucide-react";
const stockExchanges = [
  {
    name: "NYSE",
    currentValue: 14450.3,
    previousValue: 14300.0, // Trending up
    highValue: 14500.0,
    lowValue: 14200.0,
    flagCode: "us",
  },
  {
    name: "NASDAQ",
    currentValue: 14400.3,
    previousValue: 14450.0, // Trending down
    highValue: 14550.0,
    lowValue: 14350.0,
    flagCode: "us",
  },
  {
    name: "LSE",
    currentValue: 7800.6,
    previousValue: 7800.0, // Stable
    highValue: 7850.0,
    lowValue: 7750.0,
    flagCode: "gb",
  },
  {
    name: "JPX",
    currentValue: 30500.2,
    previousValue: 30520.0, // Trending down
    highValue: 30600.0,
    lowValue: 30400.0,
    flagCode: "jp",
  },
  {
    name: "SSE",
    currentValue: 3530.8,
    previousValue: 3520.0, // Trending up
    highValue: 3550.0,
    lowValue: 3500.0,
    flagCode: "cn",
  },
  {
    name: "HKEX",
    currentValue: 24400.9,
    previousValue: 24500.0, // Trending down
    highValue: 24600.0,
    lowValue: 24300.0,
    flagCode: "hk",
  },
  {
    name: "BSE",
    currentValue: 65000.1,
    previousValue: 64900.0, // Trending up
    highValue: 65100.0,
    lowValue: 64800.0,
    flagCode: "in",
  },
  {
    name: "TSX",
    currentValue: 19500.4,
    previousValue: 19450.0, // Trending up
    highValue: 19600.0,
    lowValue: 19400.0,
    flagCode: "ca",
  },
  {
    name: "DAX",
    currentValue: 15750.7,
    previousValue: 15800.0, // Trending down
    highValue: 15900.0,
    lowValue: 15700.0,
    flagCode: "de",
  },
  {
    name: "CAC",
    currentValue: 7250.5,
    previousValue: 7200.0, // Trending up
    highValue: 7300.0,
    lowValue: 7200.0,
    flagCode: "fr",
  },
  {
    name: "ASX",
    currentValue: 7180.3,
    previousValue: 7200.0, // Trending down
    highValue: 7220.0,
    lowValue: 7160.0,
    flagCode: "au",
  },
  {
    name: "NSE",
    currentValue: 19800.6,
    previousValue: 19750.0, // Trending up
    highValue: 19900.0,
    lowValue: 19700.0,
    flagCode: "in",
  },
];

export default class StockExchangeCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="stock-exchange-carousel-container">
        <div className="stock-exchange-carousel-background"></div>
        <div className="stock-exchange-carousel-content">
          <Slider {...settings}>
            {stockExchanges.map((exchange, i) => {
              const isRising = exchange.currentValue > exchange.previousValue;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <div
                        className={`fi fi-${exchange.flagCode} h-6 w-6 mr-2`}
                      ></div>
                      <div className="text-3xl font-bold">{exchange.name}</div>
                    </div>
                  </div>
                  <div
                    className={`text-base font-semibold ${
                      isRising ? "text-green-500" : "text-red-500"
                    } flex items-center`}
                  >
                    {isRising ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    ${exchange.currentValue.toLocaleString()}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
