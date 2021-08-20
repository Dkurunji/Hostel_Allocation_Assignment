import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { HostelContext } from '../App'


const boysHostel = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];
const girlsHostel = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'];



// function checkGender(item) {
//     if(item) {
//         return boysHostel;
//     }
//     return girlsHostel;
// }

function HostelItem({ children }) {

    // let [option, selectedOption] = useState();
   
    return (
        <Link to="/RoomSelection"><div style={{ display: 'inline-block', width: '90px', height: '90px', backgroundColor: '#D2B48C', margin: '2px', color: 'white', borderRadius: '10px' }} onClick={
            function () {
                
            }
        }>{ children}</div></Link>
    );
}

export default function HostelSelection(props) {
    
    const {male} = useContext(HostelContext);
    // console.log(male);
    // console.log(setGender);

    // const [selectedHostel, setSelectedHostel] = useState(boysHostel);
    return (
        
        <div style={{ display: 'flex',flexDirection:'column' ,alignItems:'center'}}>
            <h1 >Choose A Hostel</h1>
            <div style={{ display: 'flex', width: '25%', flexWrap: 'wrap' , marginLeft:'50px'}}>
                {(male ? boysHostel : girlsHostel).map((num) => <HostelItem key={num}>{num}</HostelItem>)}
            </div>
        </div>
    )
}
