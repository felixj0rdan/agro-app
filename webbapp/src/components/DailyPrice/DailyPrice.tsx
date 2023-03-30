import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { left, right } from '../../assets'

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
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    position: absolute;
    gap: 50px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

`
const DatePicker = styled.input`
`
const DateDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

`

const PriceInput = styled.p`
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
const DateBtn = styled.div`
    
`


const DailyPrice = ({ vegetableData }:DailyPriceInterface) => {

    const [date, setDate] = useState(new Date().toLocaleDateString("en-CA", {
        month: "2-digit", 
        day: "2-digit", 
        year: "numeric",
    }))

    const [dateCounter, setDateCounter] = useState(1)

    const [dailyPrice, setDailyPrice] = useState<DailyPriceProp>()

    useEffect(() => {
      setDailyPrice(vegetableData.filter(data => data.dateTime === date)[0])
    }, [date])

    // console.log(date);
    
    const changeDate = (val:number) => {
        let d = new Date(date);
        d.setDate(d.getDate() + val)
        setDate(d.toLocaleDateString("en-CA", {
            month: "2-digit", 
            day: "2-digit", 
            year: "numeric",
        }));
        setDateCounter(d => d+1);
    }
    

    // console.log(vegetableData);
    

    return (
        <MainDiv>
            <DateDiv  >
            {/* <DayDisplay>{days[date.getDay()]}</DayDisplay>
            <DateDisplay>{date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()}</DateDisplay> */}
                <DateBtn onClick={() => changeDate(-1)} ><img src={left} height="30px" alt="" /></DateBtn>
                <DatePicker value={date} onChange={(e) => {setDate(e.target.value)}} type="date"  />
                <DateBtn onClick={() => changeDate(1)} ><img src={right} height="30px" alt="" /></DateBtn>

            </DateDiv>
            <PriceMainDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.farmerMarketPrice || "-"}</PriceInput>
                    <PriceLabel>Farmer's</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.retailPrice || "-"}</PriceInput>
                    <PriceLabel>Retail</PriceLabel>
                </PriceDiv>
                <PriceDiv>
                    <PriceInput>{dailyPrice?.wholesalePrice || "-"}</PriceInput>
                    <PriceLabel>Wholesale</PriceLabel>
                </PriceDiv>
            </PriceMainDiv>
        </MainDiv>
    )
}

export default DailyPrice