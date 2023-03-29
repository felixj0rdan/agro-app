import React, { Dispatch } from 'react'
import styled from "styled-components";

interface NavbarProps {
    setLanguage: Dispatch<React.SetStateAction<string>>
}

const NavDiv = styled.div`
    height: 60px;
    /* background-color: #bffbb4; */
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 25px;
    justify-content: space-between;
`
const Title = styled.p`
    font-size: 30px;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
`
const Select = styled.select`
    background-color: white;
    border: 0px;
    height: 30px;
    align-self: center;
    appearance: none;
    /* padding: 5px; */
    text-align: center;
    border-radius: 3px;
    &:focus{
        outline: none;
    }
`

const Navbar = ({language, setLanguage, isAdminPage}: any ) => {
  return (
    <NavDiv>
        <Title>AgroApp</Title>
        { !isAdminPage && <Select onChange={(e) => {setLanguage(e.target.value);}}  style={{width: "100px", fontSize: "17px"}}>
            <option defaultChecked value="english">English</option>
            <option value="tamil">தமிழ்</option>
        </Select>}
    </NavDiv>
  )
}

// { language === "english" ?"AgroApp":"நிர்வாகி"}
export default Navbar