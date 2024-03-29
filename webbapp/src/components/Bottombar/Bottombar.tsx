import React, { useState } from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
    position: fixed;
    bottom: 0;
    /* margin-top: 45px; */
    height: 60px;
    width: 100%;
    border-top: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: skyblue;
`

const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 8px;
    /* margin: 15px; */
    &:focus{
        outline: none;
    }
`
const RatingBtn = styled.button`
    position: absolute;
    right: 0;
    margin-right: 10px;
    border: 1px solid white;
    background-color: skyblue;
    color: white;
    border-radius: 3px;
    padding: 5px;
`

const Bottombar = ({navigate, isAdminPage} : any) => {

    const [token, setToken] = useState(localStorage.getItem("access_token"))

    const Goto = () => {
        if(token !== ""){
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
        }
        if(isAdminPage){
            navigate("/")
        } else {
            navigate("/admin-login")
        }
    }

  return (
    <MainDiv>
        <Button onClick={Goto} >
            { isAdminPage ? "Go Back" : token ? "Logout" :"Admin"}
        </Button>
        <RatingBtn onClick={() => isAdminPage ? navigate("/rating-dashboard") : navigate("/rating")} >{isAdminPage ? "Ratings" : "Rate Us"}</RatingBtn>
    </MainDiv>
  )
}

export default Bottombar