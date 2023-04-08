import React from 'react';
import { LinearProgress,Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config/Api';
import { numberWithCommas } from '../Components/CoinsTable';
import parse from "html-react-parser"
import CoinInfo from '../Components/CoinInfo';



const CoinPage = () => {

  const {id} = useParams();
  const[coin, setCoin] =useState();
  const{currency, symbol} =CryptoState();

  const fetchData = async() =>{
    const {data} = await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  }

  useEffect(() =>{
    fetchData();
  },[])

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className='xl:flex xl:flex-row flex-row lg:items-center lg:flex-col md:flex-col md:items-center'  >
<div className='xl:w-1/3 xl:items-start  md:w-full flex flex-col items-center mt-6 border-solid border-r-2 border-grey'>
<img
          src={coin?.image.large}
          alt={coin?.name}
          className="h-52 xl:pl-32"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className="font-bold pb-5  md:pl-32 font-mono">
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className="w-full font-mono p-6 pb-6 pt-0 text-justify">
          {parse(coin?.description.en.split(". ")[0])}.
        </Typography>

        <div className="item-start p-6 pt-2 w-full">
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="font-bold mb-5 pb-3 font-mono">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="font-bold mb-5 pb-3 font-mono">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="font-extrabold mb-5 pb-3 font-mono">
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
</div>
<CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage;
