import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { consumer, farmer, retailer, wholesale } from '../../assets'
import { Bottombar, MarketTiles, Navbar, UserTypeTiles, VegetablesTiles } from '../../components'
// import Bottombar from '../../components/Bottombar/Bottombar'
// import MarketTiles from '../../components/MarketTiles/MarketTiles'

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

    const navigate = useNavigate();

    const [userType, setUserType] = useState("")
    const [market, setMarket] = useState("")
    const [vegetable, setVegetable] = useState("")

    const [language, setLanguage] = useState("english")

    // console.log(userType+" "+market+" "+vegetable);

    useEffect(() => {
      if(userType === "" || market === "" || vegetable === "" ){
        return;
      }

      

    }, [vegetable])
    
    


  return (
    <>
        <Navbar language={language} setLanguage={setLanguage} />
            <LandingDiv>
                {/* <div> */}
                    { userType === "" && market === "" && vegetable === "" && <UserTypeTiles language = {language} setUserType={setUserType} />}
                    { userType !== "" && market === "" && vegetable === "" && <MarketTiles language = {language} setUserType={setUserType} setMarket={setMarket} />}
                    { userType !== "" && market !== "" && vegetable === "" && <VegetablesTiles setMartket={setMarket} language = {language} setVegetable={setVegetable} />}
                {/* </div> */}
            </LandingDiv>
        <Bottombar navigate={navigate} />
    </>
  )
}

export default Landing