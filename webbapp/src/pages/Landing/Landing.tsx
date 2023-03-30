import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { consumer, farmer, MarketType, retailer, UserType, VegetableType, wholesale } from '../../assets'
import { Bottombar, DailyPrice, MarketTiles, Navbar, UserTypeTiles, VegetablesTiles } from '../../components'
import { GetDailyPrice } from '../../helper'
// import Bottombar from '../../components/Bottombar/Bottombar'
// import MarketTiles from '../../components/MarketTiles/MarketTiles'

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

const LandingDiv = styled.div`
    width: 100%;
    display: flex;
    /* flex: 10 0 50%; */
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    flex-direction: column;
    /* align-items: center; */
    margin-bottom: 50px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
`



const Landing = () => {

    const navigate = useNavigate();

    const [userType, setUserType] = useState<UserType>()
    const [market, setMarket] = useState<MarketType>()
    const [vegetable, setVegetable] = useState<VegetableType>()

    const [language, setLanguage] = useState("english")

    const [data, setData] = useState<DailyPriceProp[]>([])

    // console.log(userType+" "+market+" "+vegetable);

    useEffect(() => {
    //   if(userType === "" || market === "" || vegetable === "" ){
    //     return;
    //   }

    }, [vegetable])

    useEffect(() => {
        getDailyPrices();
    }, [])

    // console.log(vegetable, market);
    


    const getDailyPrices = async () => {
        setData(await GetDailyPrice());
    }

    // console.log(data);
    
    
    
    


  return (
    <>
        <Navbar language={language} setLanguage={setLanguage} />
            <LandingDiv>
                {/* <div> */}
                    { userType === undefined && market === undefined && vegetable === undefined && <UserTypeTiles language = {language} setUserType={setUserType} />}
                    { userType !== undefined && market === undefined && vegetable === undefined && <MarketTiles language = {language} setUserType={setUserType} setMarket={setMarket} />}
                    { userType !== undefined && market !== undefined && vegetable === undefined && <VegetablesTiles setMartket={setMarket} language = {language} setVegetable={setVegetable} />}
                {/* </div> */}
                {userType !== undefined && market !== undefined && vegetable !== undefined && <DailyPrice vegetableData={data.filter(d => (d.marketName === market?.id && d.vegetableName == vegetable.id) )} /> }
            </LandingDiv>
        <Bottombar navigate={navigate} />
    </>
  )
}

export default Landing