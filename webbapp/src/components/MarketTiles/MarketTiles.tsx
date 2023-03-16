import React, { useState } from 'react'
import styled from 'styled-components'

const MarketDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    /* justify-content: center; */
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const MarketTile = styled.div`
    /* border: 1px solid black; */
    background-color: #4e4ef5;
    height: 60px;
    width: 80%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Text = styled.p`
    margin: 0px;
    color: white;
    font-size: larger;
    /* text-align: center; */
`

const MarketTiles = ({setMarket} : any) => {

    const [markets, setMarkets] = useState(["Vellore Tolgate", "Katpadi", "Gudiyattam", "Kagithapattrai", "Chennai Koyambedu"]);


  return (
    <MarketDiv>
        {
            markets.map((market, index) => <MarketTile key={index} onClick={() => setMarket(market)} ><Text>{market}</Text></MarketTile>)
        }

    </MarketDiv>
  )
}

export default MarketTiles