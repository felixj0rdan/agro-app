import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { star, starGold } from '../../assets'

const MainDiv = styled.div`
    /* height: 50px; */
    width: 300px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    padding: 5px;
    display: flex;
    padding-right: 10px;
    padding-left: 10px;
    flex-direction: column;
    gap: 10px;
`
const Name = styled.p`
    margin: 0px;
`
const ID = styled.p`
    font-size: 10px;
    text-align: center;
    margin: 0px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StarDiv = styled.div`
    /* height: 30px; */
`
const Ratings = styled.div`
    display: flex;
    gap: 5px;
`
const Comment = styled.p`
    margin: 0px;
`

const RatingCard = ({rating}: any) => {

    const [stars, setStars] = useState<number[]>([])

    useEffect(() => {
      setStars(Array(rating.rating).fill(1));
    }, [])
    

    return (
        <MainDiv>
            <Top>
                <Name>{rating.name || "Anonymous"}</Name>
                <ID>{rating.id}</ID>
            </Top>
            <Ratings>
            {
                stars.map(_ => <StarDiv ><img height={30} src={starGold} alt="" /></StarDiv>)
            }
            </Ratings>
            <Comment>{rating.comment || "No comments"}</Comment>
        </MainDiv>
  )
}

export default RatingCard