import React, { useState } from 'react'
import styled from 'styled-components'
import { consumer, farmer, retailer, wholesale } from '../assets'
import { Navbar, UserTypeTiles, VegetablesTiles } from '../components'
import MarketTiles from '../components/MarketTiles/MarketTiles'

const LandingDiv = styled.div`
    width: 100%;
    display: flex;
    /* flex: 10 0 50%; */
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    /* align-items: center; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const UserCard = styled.div`
    height: 150px;
    width: 150px;
    /* flex-direction: row; */
    border-radius: 10px;
    background-color: #4e4ef5;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

`

const UserType = styled.p<{size:any}>`
    color: white;
    margin: 0px;
    font-size: ${props => props.size};
    text-align: center;
`

const Landing = () => {


    const [userType, setUserType] = useState("")
    const [market, setMarket] = useState("")
    const [vegetable, setVegetable] = useState("")

    const [language, setLanguage] = useState("english")

    console.log(userType+" "+market+" "+vegetable);
    


  return (
    <>
    <Navbar setLanguage={setLanguage} />
        { userType === "" && market === "" && vegetable === "" && <UserTypeTiles setUserType={setUserType} />}
        { userType !== "" && market === "" && vegetable === "" && <MarketTiles setMarket={setMarket} />}
        { userType !== "" && market !== "" && vegetable === "" && <VegetablesTiles language = {language} setVegetable={setVegetable} />}
    </>
  )
}

export default Landing