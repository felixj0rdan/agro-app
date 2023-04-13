import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Bottombar, Navbar, RatingForm } from '../../components'

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const RatingPage = () => {
    const navigate = useNavigate();

  return (
        <>
        <Navbar />
            <RatingForm navigate={navigate} />
        <Bottombar navigate={navigate} />
        </>
  )
}

export default RatingPage