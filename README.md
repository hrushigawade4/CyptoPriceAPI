# CyptoPriceAPI


![Node.js](https://img.shields.io/badge/Node.js-v14.17.5-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue)

This API allows you to fetch cryptocurrency prices, volume, and last trade price using the Blockchain.com Exchange API.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

The Crypto Price Fetch API is built with Node.js and Express.js to provide real-time cryptocurrency price data from the [Blockchain.com Exchange API](https://api.blockchain.com/v3/exchange/). It allows you to retrieve price information for various cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and more.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.17.5 or higher) installed on your machine.
- Basic knowledge of Node.js and Express.js.
- An internet connection to make API requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hrushigawade4/CryptoPriceAPI.git
   cd CryptoPriceAPI
   npm install
   nodemon index.js
   ```

  then go to curl http://localhost:3000/getThePrice
  Enter the Symbol e.g BTC-USD

  You will see the result like on front end 
  ```bash
       {
    "symbol": "BTC",
    "price": 46000.12,
    "volume": 123456.78,
    "last_trade_price": 46001.23
    }
```


##Usage


##License

