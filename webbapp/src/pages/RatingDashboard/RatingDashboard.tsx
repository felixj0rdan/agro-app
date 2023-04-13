import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Bottombar, Navbar, RatingCard } from '../../components'
import { GetRatings } from '../../helper'

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 70px;
    flex-direction: column;
    gap: 15px;
`

const RatingDashboard = () => {

    const [ratings, setRatings] = useState<any[]>([])

    useEffect(() => {
      GetRatings()
      .then(res => setRatings(res.ratings))
      .catch(err => toast.error(err.response.data.message))
    }, [])

    console.log(ratings);
    
    

    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <MainDiv>
            {
                ratings && ratings.map(rating => <RatingCard rating={rating} />)
            }
            </MainDiv>
            <Bottombar isAdminPage={true} navigate={navigate} />
        </>
    )
}

export default RatingDashboard