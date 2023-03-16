import React from 'react'
import styled from 'styled-components'
import { consumer, farmer, retailer, userTypes, wholesale } from '../../assets'

const LandingDiv = styled.div`
    width: 100%;
    display: flex;
    /* flex: 10 0 50%; */
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    /* align-items: center; */
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

const UserTypeTiles = ({setUserType} : any) => {

    // const userTypeName = ["Farmer", "Consumer", "Retailer", "WholeSale Dealer"]

  return (
    <LandingDiv>

        {
            userTypes.map((userT, index) =>
            <UserCard key={index} onClick={() => setUserType(userT.name)} >
                <img height={"75px"} src={userT.img} />
                <UserType size={"20px"} >{userT.name}</UserType>
            </UserCard> )
        }


        {/* <UserCard>
            <img height={"75px"} src={farmer} />
            <UserType size={"20px"} >Farmer</UserType>
        </UserCard>
        <UserCard>
            <img height={"75px"} src={consumer} />
            <UserType size={"20px"} >Consumer</UserType>

        </UserCard>
        <UserCard>
            <img height={"75px"} src={retailer} />
            <UserType size={"20px"} >Retailer</UserType>

        </UserCard>
        <UserCard>
            <img height={"75px"} src={wholesale} />
            <div>
                <UserType size={"20px"} >Wholesale Dealer</UserType>
            </div>

        </UserCard> */}
    </LandingDiv>
  )
}

export default UserTypeTiles