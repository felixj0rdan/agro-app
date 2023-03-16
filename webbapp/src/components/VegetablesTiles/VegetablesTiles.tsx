import React, { Dispatch, useState } from 'react'
import styled from 'styled-components'
import { Vegetables } from '../../assets'

interface VegetablesTilesProps {
    language: string,
    setVegetable: Dispatch<React.SetStateAction<string>>
}

interface Vegetable {
    english: string,
    tamil: string,
    img: string,
}

const VegetablesMain = styled.div`
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    /* position: absolute;
    width: 100%;
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

const VegetablesTiles = ({language, setVegetable} : VegetablesTilesProps ) => {

    // const [vegetables, setVegetables] = useState(["Tomoto", "Onion", "Small Onion", "Chillies", "Okra", "Brinjal", "Carrot", "Beetroot", "Cabbage", "Taro"])

  return (
    <VegetablesMain>
        {Vegetables.map((vegetable, index) => <VegetableCard key={index} onClick={() => setVegetable(vegetable.english)} > <img height={"60px"} width={"60px"} src={vegetable?.img} alt="" /> <Text>{vegetable[language]}</Text></VegetableCard>)}
    </VegetablesMain>
  )
}

export default VegetablesTiles