import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AddDailyPrice } from '../../helper'

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const DatePicker = styled.input`
`
const DateDiv = styled.div`
    
`

const PriceInput = styled.input`
    width: 100px;
    text-align: center;
`
const PriceMainDiv = styled.div`
    display: flex;
    gap: 20px;
`

const PriceDiv = styled.div`
    width: 100px;
`

const PriceLabel = styled.p`
    text-align: center;
    font-size: larger;
`
const SubmitBtn = styled.button`
    
`


const DateDisplay = styled.p`
    margin: 0px;
`

const DayDisplay = styled.p`
    margin: 0px;
    
`

declare global {
    interface JQuery {
      datepicker(options?: any): any;
    }
  }

const DailyPriceForm = ({vegetable, market} : any) => {

    const [date, setDate] = useState<Date>(new Date());
    const [d, setD] = useState("")
    const [datePickerVisible, setDatePickerVisible] = useState(false)
    const $dateInput = $("#dateInput");
    $dateInput.datepicker();


    const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const [farmerPrice, setFarmerPrice] = useState(0);
    const [retailPrice, setRetailPrice] = useState(0);
    const [wholesalePrice, setWholesalePrice] = useState(0);

    useEffect(() => {
    //   let d = new Date(date);
    //   d.setDate(d.getDate() - 21)
    //   console.log(date.toLocaleDateString("en-US", {
    //       day: "2-digit", 
    //       month: "numeric", 
    //       year: "numeric",
    //     }).split('/').reverse().join('-'));

    //   console.log(date.toLocaleDateString());
      
      

    }, [date])

    const onSubmit = () => {
        let data = {
            vegetableName: vegetable.id,
            marketName: market.id,
            retailPrice: retailPrice,
            farmerMarketPrice: farmerPrice,
            wholesalePrice: wholesalePrice,
            dateTime: d
        }

        console.log(data);

        AddDailyPrice(data)
        .then(res => console.log(res))
        
    }

    const showDatePicker = () => {
        if(datePickerVisible){
            $dateInput.datepicker()
        } else {
            $dateInput.datepicker("show")
        }
        setDatePickerVisible(c => !c)
    }
    

    return (
        <MainDiv>
            <DateDiv  >
                {/* <DayDisplay>{days[date.getDay()]}</DayDisplay>
                <DateDisplay>{date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()}</DateDisplay> */}
                <DatePicker onChange={(e) => {setDate(new Date(e.target.value)); setD(e.target.value)}} type="date"  />
            </DateDiv>
            <PriceMainDiv>
                <PriceDiv>
                    <PriceInput onChange={(e) => setFarmerPrice(parseFloat(e.target.value))} type="number" />
                    <PriceLabel>Farmer's</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput onChange={(e) => setRetailPrice(parseFloat(e.target.value))} type="number" />
                    <PriceLabel>Retail</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput onChange={(e) => setWholesalePrice(parseFloat(e.target.value))} type="number" />
                    <PriceLabel>Wholesale</PriceLabel>
                </PriceDiv>
            </PriceMainDiv>
            <SubmitBtn onClick={onSubmit} >Enter</SubmitBtn>
        </MainDiv>
    )
}

export default DailyPriceForm