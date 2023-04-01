import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import { GetData } from '../../helper';

const GraphDiv = styled.div`
    /* padding: 10px; */
    width: 100%;
    background-color: white;
`

const Graph = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [priceData, setPriceData] = useState<any>()
    // const data:any ={} ;

    const [data, setData] = useState<any>([])

    const legendContent = (
        <div>
          <span style={{ color: "#8884d8" }}>Price</span>
        </div>
      );

    useEffect(() => {
        
        let arr:any[] = []
        GetData()
        .then((res:any) => {            
            res.map((d:any, index:any) => {
                arr.push(d[0])
            })
            setPriceData(arr)
            arr = arr.slice(0,12)
            setData(months.map((value, index) => ({ name: value, data: arr[index] })))
        }
        )
        // console.log(data1);
        
      
    }, [])

    console.log(data);
    
    

    return (
        <GraphDiv>
            <div style={{ margin: "5px 0 0 -30px" }} >
                <LineChart width={350} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#505050" strokeDasharray="5 5"  />
                    <Line type="monotone" dataKey="data" stroke="#ff0101" />
                    <Tooltip />
                </LineChart>
            </div>
        </GraphDiv>
    )
}

export default Graph