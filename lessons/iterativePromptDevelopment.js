const SHIB = `
Where can you buy Shiba Inu?
SHIB tokens can be traded on centralized crypto exchanges. The most popular exchange to buy and trade Shiba Inu is MEXC Global, where the most active trading pair SHIB/USDT has a trading volume of $541,414 in the last 24 hours. Other popular options include Gate.io and BingX.

What is the daily trading volume of Shiba Inu (SHIB)?
The trading volume of Shiba Inu (SHIB) is $132,916,605 in the last 24 hours, representing a -11.90% decrease from one day ago and signalling a recent fall in market activity.

What is the all-time high for Shiba Inu (SHIB)?
The highest price paid for Shiba Inu (SHIB) is $0.00008616, which was recorded on Oct 28, 2021 (over 1 year). Comparatively, the current price is -89.71% lower than the all-time high price.

What is the all-time low for Shiba Inu (SHIB)?
The lowest price paid for Shiba Inu (SHIB) is $0.000000000056366, which was recorded on Nov 28, 2020 (over 2 years). Comparatively, the current price is 15,735,408.12% higher than the all-time low price.

What is the market cap of Shiba Inu (SHIB)?
Market capitalization of Shiba Inu (SHIB) is $5,226,757,358 and is ranked #16 on CoinGecko today. Market cap is measured by multiplying token price with the circulating supply of SHIB tokens (590 Trillion tokens are tradable on the market today).

How does the price performance of Shiba Inu compare against its peers?
With a price decline of -7.90% in the last 7 days, Shiba Inu (SHIB) is underperforming the global cryptocurrency market which is down -5.20%, while underperforming when compared to similar Ethereum Ecosystem cryptocurrencies which are up 12.70%.

What is the market sentiment of Shiba Inu today?
The community is bullish as more than 71% of users are feeling good about Shiba Inu (SHIB) today.
`

const PEPE = `Pepe (PEPE) price has increased today.
The price of Pepe (PEPE) is $0.00000200 today with a 24-hour trading volume of $905,831,603. This represents a 57.54% price increase in the last 24 hours and a -34.79% price decline in the past 7 days. With a circulating supply of 420 Trillion PEPE, Pepe is valued at a market cap of $840,265,347.

Where can you buy Pepe?
PEPE tokens can be traded on centralized crypto exchanges. The most popular exchange to buy and trade Pepe is Binance, where the most active trading pair PEPE/USDT has a trading volume of $311,763,088 in the last 24 hours. Other popular options include OKX and DigiFinex.

What is the daily trading volume of Pepe (PEPE)?
The trading volume of Pepe (PEPE) is $905,831,603 in the last 24 hours, representing a 41.00% increase from one day ago and signalling a recent rise in market activity.

What is the all-time high for Pepe (PEPE)?
The highest price paid for Pepe (PEPE) is $0.00000431, which was recorded on May 05, 2023 (8 days). Comparatively, the current price is -54.05% lower than the all-time high price.

What is the all-time low for Pepe (PEPE)?
The lowest price paid for Pepe (PEPE) is $0.000000055142, which was recorded on Apr 18, 2023 (25 days). Comparatively, the current price is 3,489.38% higher than the all-time low price.

What is the market cap of Pepe (PEPE)?
Market capitalization of Pepe (PEPE) is $840,265,347 and is ranked #55 on CoinGecko today. Market cap is measured by multiplying token price with the circulating supply of PEPE tokens (420 Trillion tokens are tradable on the market today).

What is the fully diluted valuation of Pepe (PEPE)?
The fully diluted valuation (FDV) of Pepe (PEPE) is $840,265,347. This is a statistical representation of the maximum market cap, assuming the maximum number of 420 Trillion PEPE tokens are in circulation today. Depending on how the emission schedule of PEPE tokens are designed, it might take multiple years before FDV is realized.`


module.exports.prompt = `
Your task is to help a marketing team create a 
description for a retail website of a product based 
on description.

Text of every token should be limited by 150 characters.

Write a product description based on the information 
provided in the technical specifications delimited by 
<>.

Specifications shiba: <${SHIB}>
Specifications pepe: <${PEPE}>

Provide output in the HTML format and facts related to numbers both tokens should be provided in table
`
