import React, { useState } from 'react'
import styled from 'styled-components'
import { back, markets } from '../../assets'

const MarketDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    /* justify-content: center; */
    /* position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%); */
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

const BackButton = styled.button`
    border: 0px;
    padding: 5px;
    font-size: larger;
    width: 100px;
    border-radius: 20px;
`

const MarketTiles = ({setMarket, language, setUserType} : any) => {

    // const [markets, setMarkets] = useState(["Vellore Tolgate", "Katpadi", "Gudiyattam", "Kagithapattrai", "Chennai Koyambedu"]);


  return (
    <MarketDiv>
        <BackButton onClick={() => setUserType(undefined)} >
            <img src={back} height="35px" alt="" />
        </BackButton>
        {
            markets.map((market, index) => <MarketTile key={index} onClick={() => setMarket(market)} ><Text>{market[language]}</Text></MarketTile>)
        }

    </MarketDiv>
  )
}

export default MarketTiles