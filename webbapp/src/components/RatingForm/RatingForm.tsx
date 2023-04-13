import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { star, starGold } from '../../assets'
import { PostRating } from '../../helper'

const MainDiv = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const StarDiv = styled.div`
    height: 50px;
`

const RatingDiv = styled.div`
    display: flex;
    gap: 10px;
`
const TextInput = styled.input`
    border: 1px solid white;
    background-color: white;
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    &:focus{
        outline: none;
    }
`
const Comment = styled.textarea`
    border: 0px;
    width: 300px;
    border-radius: 5px;
    padding: 5px;
    &:focus{
        outline: none;
    }
`
const SubmitBtn = styled.button`
    margin-top: 10px;
    border: 0px;
    padding: 5px;
    width: 120px;
    color: white;
    border-radius: 50px;
    font-size: x-large;
    background-color: #07a507;
`

const RatingForm = ({navigate}:any) => {

    const [rating, setRating] = useState(0)
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    const onSubmit = () => {
        if(rating < 1)
            return
        PostRating({rating: rating, name: name, comment: comment, userType: localStorage.getItem("user-type")})
        .then(res => {
            console.log(res);
            toast.success("Successful")
            navigate("/")
        })
    }
    

    return (
        <MainDiv>
            <RatingDiv>
                <StarDiv onClick={() => setRating(1)} ><img height={50} src={rating > 0 ? starGold : star} alt="" /></StarDiv>
                <StarDiv onClick={() => setRating(2)} ><img height={50} src={rating > 1 ? starGold : star} alt="" /></StarDiv>
                <StarDiv onClick={() => setRating(3)} ><img height={50} src={rating > 2 ? starGold : star} alt="" /></StarDiv>
                <StarDiv onClick={() => setRating(4)} ><img height={50} src={rating > 3 ? starGold : star} alt="" /></StarDiv>
                <StarDiv onClick={() => setRating(5)} ><img height={50} src={rating > 4 ? starGold : star} alt="" /></StarDiv>
            </RatingDiv>
            <TextInput onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <Comment onChange={(e) => setComment(e.target.value)} placeholder='Comments...' rows={3} />
            <SubmitBtn onClick={onSubmit} >Submit</SubmitBtn>
        </MainDiv>
    )
}

export default RatingForm
