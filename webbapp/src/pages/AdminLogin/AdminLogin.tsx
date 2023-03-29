import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { hide, show } from '../../assets'
import { Bottombar, Navbar } from '../../components'
// import Bottombar from '../../components/Bottombar/Bottombar'
import { Login } from '../../helper'

const AdminLoginMain = styled.div`
     position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    background-color: white;
`

const NameInput = styled.input`
    padding: 5px;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    width: 250px;
    height: 38px;
    &:focus{
        outline: none;
    }
    border: 1px solid skyblue;

`

const PasswordDiv = styled.div`
    background-color: white;
    border-radius: 5px;
    border: 1px solid skyblue;
    width: 250px;
    height: 38px;
    display: flex;
    padding-right: 10px;
    align-items: center;
    justify-content: space-between;

`

// 87ceeb

const PasswordInput = styled.input`
    padding: 5px;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    width: 210px;
    &:focus{
        outline: none;
   }
`

const Label = styled.label`
    /* margin-top: 10px; */
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Submit = styled.button<{loginEnabled : boolean}>`
    background-color: ${props => props.loginEnabled ? "skyblue" : "white" };
    color: ${props => props.loginEnabled ? "white" : "black" };
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    width: 50%;
    padding: 5px;
    &:focus{
        outline: none;
    }
    border: 1px solid skyblue;
`

const AdminLogin = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginEnabled, setLoginEnabled] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    useEffect(() => {
      if(username === "" || password === ""){
        setLoginEnabled(false)
      } else {
        setLoginEnabled(true)
      }
    }, [username, password])

    const onLogin = () => {
        Login({
            username: username,
            password: password
        })
        .then(data => {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            console.log(data);
            
            navigate("/dashboard")
        })
        .catch(err => console.log(err))
    }
    

  return (
    <>
        <Navbar isAdminPage  />
        <AdminLoginMain>
            <Label>
                Username
                <NameInput onChange={(e) => setUsername(e.target.value)} />
            </Label>
            <Label>
                Password
                <PasswordDiv>
                    <PasswordInput type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                    <img onClick={() => setShowPassword(s => !s)} src={showPassword ? show : hide} height="30px" alt="" />
                </PasswordDiv>
            </Label>
            <Submit loginEnabled={loginEnabled} onClick={onLogin} >Login</Submit>
        </AdminLoginMain>
        <Bottombar isAdminPage navigate={navigate} />
    </>
  )
}

export default AdminLogin