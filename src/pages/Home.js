import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {HostelContext} from '../App';


function Home(props) {
   let {userName} = props
    let {bookedRoom, bookStatus, setGender} = useContext(HostelContext);
    console.log(bookStatus);

    return !bookedRoom ? (      
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Choose Your Hostel</h1>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 50, borderRadius: '5px' }}>
                    
                        <div style={{ width: '25%', height: "25vh", backgroundColor: 'lightpink', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 50, borderRadius: '5px' }} onClick={
                        function () {
                            // selectedBoys = false;
                            setGender(false)
                        }
                        }>
                        <img width="50%" alt="" src="https://us.123rf.com/450wm/topvectors/topvectors1910/topvectors191000180/130828177-emotion-of-laughter-on-the-face-of-a-brunette-woman-vector-illustration-.jpg?ver=6" style={{ borderRadius: "50%" }} />
                       <Link to="/selectHostel">Girls Hostels</Link>
                    </div>            
                    
                
                    <div style={{ width: '25%', height: "25vh", backgroundColor: 'lightgreen', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 50, borderRadius: '5px' }} onClick={
                    function () {
                        // selectedBoys = true;
                         
                        }
                        }>
                        <img width="50%" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-qDOci8do8NobQZe-KkqicN3CURhpar77QZoepd4c-sHlc9VpT-J3uc5KMv-1BubKfw&usqp=CAU" style={{ borderRadius: "50%" }} />
                       <Link to="/selectHostel">Boys Hostels</Link>
                        </div>
                    
            </div>   
            
            </div>
        )
        : (
            
            <div style={{boxShadow:'0 0 2px 2px black', backgroundColor: '#F0F8FF', borderRadius:'20px', width:'50%', display:'flex', flexDirection:'column',justifyContent:'center', margin:'auto', marginTop:'100px', padding:'10px', }}>
                <h1>Welcome {userName}!!</h1>
                <p>You have already booked a room.</p>

                <h3>Your room details are as follows</h3>
                <h5>Hostel No : {localStorage.getItem('hostel')}</h5>
                <h5>Room No : {localStorage.getItem('floor')}</h5>
            </div>
        );
    
}

export { Home };