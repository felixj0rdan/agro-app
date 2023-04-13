import React, { Dispatch, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { back, left, priceType, right, VegetableType } from '../../assets'
import { AddDailyPrice, EditDailyPrice } from '../../helper'
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
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    position: absolute;
    /* margin-top: 30px; */
    /* gap: 50px; */
    top: 35%;
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

const PriceInput = styled.input`
    width: 90px;
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

const SubmitBtn = styled.button`
    margin-top: 50px;
    border: 0px;
    padding: 5px;
    width: 120px;
    color: white;
    /* padding-left: 15px;
    padding-right: 15px; */
    border-radius: 50px;
    font-size: x-large;
    background-color: #07a507;
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

const DailyPriceForm = ({ vegetableData, language, vegetable, market, setVegetable }:DailyPriceInterface) => {

    const [farmerPrice, setFarmerPrice] = useState<string>("");
    const [retailPrice, setRetailPrice] = useState<string>("");
    const [wholesalePrice, setWholesalePrice] = useState<string>("");

    const [dailyPriceID, setDailyPriceID] = useState<string>("")

    const [addMode, setAddMode] = useState(true)

    const [date, setDate] = useState(new Date().toLocaleDateString("en-CA", {
        day: "2-digit", 
        month: "2-digit",
        year: "numeric",
    }).split("/").reverse().join("-"))

    // const [dateCounter, setDateCounter] = useState(1)

    // const [dailyPrice, setDailyPrice] = useState<DailyPriceProp>()

    useEffect(() => {

        let dpData = vegetableData?.filter(data => data.dateTime === date)[0]
        // setDailyPrice(dpData)
        console.log(dpData);
        
        if(dpData === undefined){
            setAddMode(true)
            setDailyPriceID("");
            setFarmerPrice("")
            setRetailPrice("")
            setWholesalePrice("")
        } else {
            setAddMode(false)
            setDailyPriceID(dpData.id)
            setFarmerPrice(""+dpData?.farmerMarketPrice)
            setRetailPrice(""+dpData?.retailPrice)
            setWholesalePrice(""+dpData?.wholesalePrice)
        }

        

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


    const onSubmit = () => {
        if (addMode){

            // if( retailPrice === "" || farmerPrice ===  "" || wholesalePrice === "" || date === "" ){
            //     toast.error("All the fields are required.")
            //     return;
            // }


            let data = {
                vegetableName: vegetable.id,
                marketName: market.id,
                retailPrice: Number(retailPrice),
                farmerMarketPrice: Number(farmerPrice),
                wholesalePrice: Number(wholesalePrice),
                dateTime: date
            }
    
            console.log(data);
    
            AddDailyPrice(data)
            .then(res => toast.success(res.message))
            .catch(e => {toast.error(e.response.data.message)})
        } else {
            if( retailPrice === "" || farmerPrice ===  "" || wholesalePrice === "" || date === "" ){
                toast.error("All the fields are required.")
                return;
            }

            let data = {
                retailPrice: Number(retailPrice),
                farmerMarketPrice: Number(farmerPrice),
                wholesalePrice: Number(wholesalePrice),
            }

            EditDailyPrice(data, dailyPriceID)
            .then(res => toast.success(res.message))
            .catch(e => {toast.error(e.response.data.message)})
        }
        
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
            <DateDiv  >
                <DateBtn onClick={() => changeDate(-1)} ><img src={left} height="30px" alt="" /></DateBtn>
                    <DatePicker value={date} onChange={(e) => {setDate(e.target.value)}} type="date"/>
                <DateBtn onClick={() => changeDate(1)} ><img src={right} height="30px" alt="" /></DateBtn>
            </DateDiv>
            <PriceMainDiv>
                <PriceDiv>
                    <PriceInput type="number" value={farmerPrice} onChange={(e) => setFarmerPrice(e.target.value)} />
                    <PriceLabel>{priceType[0][language]}</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput type="number" value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
                    <PriceLabel>{priceType[1][language]}</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput type="number" value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} />
                    <PriceLabel>{priceType[2][language]}</PriceLabel>
                </PriceDiv>
            </PriceMainDiv>
            <SubmitBtn onClick={onSubmit} >{addMode ? "ADD" : "EDIT"}</SubmitBtn>
        </MainDiv>
    )
}

export default DailyPriceForm