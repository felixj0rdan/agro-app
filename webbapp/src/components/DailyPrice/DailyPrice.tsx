import React, { Dispatch, useEffect, useState } from 'react'
import styled from 'styled-components'
import { back, left, priceType, right, VegetableType } from '../../assets'
import Graph from '../Graph/Graph'

interface DailyPriceProp {
    id: string,
    marketName: string,
    vegetableName: string,
    adminId: string,
    adminUsername: string,
    farmerMarketPrice: number,
    retailPrice: number,
    wholesalePrice: number,
    dateTime: string
}

interface DailyPriceInterface {
    vegetableData: DailyPriceProp[],
    language: string,
    vegetable: any,
    market: any,
    setVegetable: Dispatch<React.SetStateAction<VegetableType | undefined>>
}

const MainDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 70px;
    margin-bottom: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`
const DatePicker = styled.input`
width: 120px;
`
const DateDiv = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const BackButton = styled.button`
    border: 0px;
    padding: 5px;
    font-size: larger;
    width: 50px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
`

const PriceInput = styled.p`
    /* width: 100px; */
    text-align: center;
    margin: 0px;
    font-size: xx-large;
`
const PriceMainDiv = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`

const PriceDiv = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border: 1px solid  white;
    border-radius: 5px;
    padding: 5px;
    background-color: white;
`

const PriceLabel = styled.p`
    text-align: center;
    font-size: 18px;
    margin: 0px;
`
const DateBtn = styled.div`
    
`

const VegetableTitle = styled.p`
    margin: 0px;
    padding: 0px;
    text-align: center;
    font-size: 30px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 10px;

    
`

const MarketTitle = styled.p`
    margin: 0px;
`

const PriceTag = styled.p`
    margin: 0px;
    padding: 0px;
    text-align: center;
`

const DailyPrice = ({ vegetableData, language, vegetable, market, setVegetable }:DailyPriceInterface) => {

    const [date, setDate] = useState(new Date().toLocaleDateString("en-CA", {
        day: "2-digit", 
        month: "2-digit",
        year: "numeric",
    }).split("/").reverse().join("-"))

    const [dateCounter, setDateCounter] = useState(1)

    const [dailyPrice, setDailyPrice] = useState<DailyPriceProp>()

    useEffect(() => {
      setDailyPrice(vegetableData.filter(data => data.dateTime === date)[0])
    }, [date])
    
    const changeDate = (val:number) => {
        let d = new Date(date);
        d.setDate(d.getDate() + val)
        setDate(d.toLocaleDateString("en-CA", {
            day: "2-digit", 
            month: "2-digit", 
            year: "numeric",
        }).split("/").reverse().join("-"));
    }
    
    return (
        <MainDiv>
            <BackButton onClick={() => setVegetable(undefined)} >
                <img src={back} height="35px" alt="" />
            </BackButton>
            <Details> 
                <VegetableTitle>{vegetable[language]}</VegetableTitle>
                <MarketTitle>{market[language]}</MarketTitle>
            </Details>
                {/* <PriceTag>price as on:</PriceTag> */}
            <DateDiv  >
                <DateBtn onClick={() => changeDate(-1)} ><img src={left} height="30px" alt="" /></DateBtn>
                    <DatePicker value={date} onChange={(e) => {setDate(e.target.value)}} type="date"/>
                <DateBtn onClick={() => changeDate(1)} ><img src={right} height="30px" alt="" /></DateBtn>
            </DateDiv>
            <PriceMainDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.farmerMarketPrice || "-"}</PriceInput>
                    <PriceLabel>{priceType[0][language]}</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.retailPrice || "-"}</PriceInput>
                    <PriceLabel>{priceType[1][language]}</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.wholesalePrice || "-"}</PriceInput>
                    <PriceLabel>{priceType[2][language]}</PriceLabel>
                </PriceDiv>
            </PriceMainDiv>
            {market.city === "Vellore" && vegetable.id === "001" && <p style={{margin: 0}} >**{language === "english" ? "monthly average price graph" : "மாதாந்திர சராசரி விலை வரைபடம்"}**</p>}
            {market.city === "Vellore" && vegetable.id === "001" ? <Graph /> : <div style={{height: 300, fontSize: 25, paddingTop: "10% ", textAlign: "center"}} >No prediction data<br/> available!</div> }
        </MainDiv>
    )
}

export default DailyPrice