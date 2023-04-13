import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserType, MarketType, VegetableType } from '../../assets'
import { Bottombar, DailyPriceForm, MarketTiles, Navbar, VegetablesTiles } from '../../components'
import { GetDailyPrice } from '../../helper'
// import Bottombar from '../../components/Bottombar/Bottombar'
// import MarketTiles from '../../components/MarketTiles/MarketTiles'

const DashMain = styled.div`
    
`
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

const Dashboard = () => {

    const [market, setMarket] = useState<MarketType>()
    const [vegetable, setVegetable] = useState<VegetableType>()
   
    const [language, setLanguage] = useState("english")
    const [data, setData] = useState<DailyPriceProp[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        getDailyPrices();
    }, [])

    const getDailyPrices = async () => {
        setData(await GetDailyPrice());
    }

    
    return (
        <>
        <Navbar language={language} setLanguage={setLanguage} />
        <DashMain>
            
            { market === undefined && vegetable === undefined && <MarketTiles setUserType={() => null} language = {language} setMarket={setMarket} />}
            { market !== undefined && vegetable === undefined && <VegetablesTiles setMartket={setMarket} language = {language} setVegetable={setVegetable} />}
            { market !== undefined && vegetable !== undefined && <DailyPriceForm setVegetable={setVegetable} language={language} vegetableData={data && data?.filter(d => (d.marketName === market?.id && d.vegetableName == vegetable.id) )} market={market} vegetable={vegetable} /> }
        </DashMain>
        <Bottombar isAdminPage={true} navigate={navigate} />
        </>
    )
}

export default Dashboard