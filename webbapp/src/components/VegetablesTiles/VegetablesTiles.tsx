import React, { Dispatch, useState } from 'react'
import styled from 'styled-components'
import { Vegetables } from '../../assets'

interface VegetablesTilesProps {
    language: string,
    setVegetable: Dispatch<React.SetStateAction<string>>,
    setMartket: Dispatch<React.SetStateAction<string>>
}

interface Vegetable {
    english: string,
    tamil: string,
    img: string,
}

const VegetablesMain = styled.div`
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    width: 100%;
    align-items: center;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    gap: 20px;
`

const VegetablesGrid = styled.div`
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    /* align-items: center; */
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    gap: 20px;
`

const VegetableCard = styled.div`
    background-color: #4e4ef5;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
`

const Text = styled.p`
    margin: 0px;
    color: white;
    text-align: center;
`
const BackButton = styled.button`
    border: 0px;
    padding: 5px;
    font-size: larger;
    width: 100px;
    border-radius: 20px;
`

const VegetablesTiles = ({language, setVegetable, setMartket} : any ) => {

    // const [vegetables, setVegetables] = useState(["Tomoto", "Onion", "Small Onion", "Chillies", "Okra", "Brinjal", "Carrot", "Beetroot", "Cabbage", "Taro"])

  return (
    <VegetablesMain>
        <BackButton onClick={() => setMartket("")} >Back</BackButton>
        <VegetablesGrid>

        {Vegetables.map((vegetable, index) => <VegetableCard key={index} onClick={() => setVegetable(vegetable)} > <img height={"60px"} width={"60px"} src={vegetable?.img} alt="" /> <Text>{vegetable[language]}</Text></VegetableCard>)}
        </VegetablesGrid>
    </VegetablesMain>
  )
}

export default VegetablesTiles