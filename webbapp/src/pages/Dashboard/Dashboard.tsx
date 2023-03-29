import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Bottombar, DailyPriceForm, MarketTiles, Navbar, VegetablesTiles } from '../../components'
// import Bottombar from '../../components/Bottombar/Bottombar'
// import MarketTiles from '../../components/MarketTiles/MarketTiles'

const DashMain = styled.div`
    
`

const Dashboard = () => {

    const [market, setMarket] = useState("")
    const [vegetable, setVegetable] = useState("")
   
    const [language, setLanguage] = useState("english")

    const navigate = useNavigate();

    
    return (
        <>
        <Navbar language={language} setLanguage={setLanguage} />
        <DashMain>
            
            { market === "" && vegetable === "" && <MarketTiles language = {language} setMarket={setMarket} />}
            { market !== "" && vegetable === "" && <VegetablesTiles setMartket={setMarket} language = {language} setVegetable={setVegetable} />}
            { market !== "" && vegetable !== "" && <DailyPriceForm market={market} vegetable={vegetable} /> }
        </DashMain>
        <Bottombar navigate={navigate} />
        </>
    )
}

export default Dashboard