import React from 'react'
import styled from 'styled-components'
import { consumer, farmer, retailer, userTypes, wholesale } from '../../assets'

const UserTypeMain = styled.div`
    width: 100%;
    display: flex;
    /* flex: 10 0 50%; */
    /* flex-wrap: wrap; */
    gap: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const UserTypeGrid = styled.div`
    width: 100%;
    display: flex;
    flex: 50 0 50%;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    line-height: 22px;
`



const UserTypeTiles = ({setUserType, language} : any) => {

    // const userTypeName = ["Farmer", "Consumer", "Retailer", "WholeSale Dealer"]

  return (
    // <UserTypeMain>
        <UserTypeGrid>

        {
            userTypes.map((userT, index) =>
            <UserCard key={index} onClick={() => setUserType(userT.english)} >
                <img height={"75px"} src={userT.img} />
                <UserType size={"20px"} >{userT[language]}</UserType>
            </UserCard> )
        }
        </UserTypeGrid>


        
    // </UserTypeMain>
  )
}

export default UserTypeTiles