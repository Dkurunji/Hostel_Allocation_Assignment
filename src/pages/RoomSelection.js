import React, { useState} from 'react';
// import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
// import { HostelContext } from '../App';
import ConfirmationModal from '../components/ConfirmationModal';



const roomNumbers = [1 , 2 , 3 , 4, 5 , 6, 7 , 8, 9, 10];

function RoomlItem({ children }) {
    //  const { booked } = useContext(HostelContext);
    // console.log(booked)
    const [toggle, setToggle] = useState(true);
    const color = toggle ? '#3CB371' : '#708090';
    return (
        <div style={{ display: 'inline-block', width: '70px', height: '70px', backgroundColor: color, margin: '2px', color: 'white', borderRadius: '10px' }} onClick={function (e) {
            setToggle(!toggle);
        //     if (!booked.includes(children)) {
        //         booked.push(children)
        //         console.log(booked)
        //    }
            localStorage.setItem('hostel',children);
        }}>{children}</div>
    );
}

export default function RoomSelection(props) {

    // let { booked , floor} = useContext(HostelContext);
    // let [fr, setFr] = useState(floor);

    // const [selectedFloor, setSelectedFloor] = useState(1);


    return (
        < Container>
        <div style={{ display: 'flex',flexDirection:'column' ,alignItems:'center'}}>
            <h1 >Choose A Floor</h1>
                <select id="floor" onChange={(e) => {
                    // floor = e.target.value;
                    // console.log(floor);
                    localStorage.setItem('floor', e.target.value)
                }} style={{padding:'8px', backgroundColor:'lightgrey' , borderRadius:'5px'}}>
                <option value="1">1st Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
                <option value="4">4th Floor</option>
                <option value="5">5th Floor</option>
            </select>            

               
            <div style={{ display: 'flex', width: '20%', flexWrap: 'wrap' ,  marginTop:'20px', border:'2px solid black', padding:'20px', justifyContent:'center', borderRadius:"15px", boxShadow:'0 0 2px 2px black'}}>
                {roomNumbers.map((num) => <RoomlItem key={num}>{num}</RoomlItem>)}
            </div>
            {/* <Button variant="contained" color="primary" href="#contained-buttons" style={{marginTop:'20px'}}>Book Room</Button> */}
                <ConfirmationModal/>
            </div>
            </Container>
    )
}
