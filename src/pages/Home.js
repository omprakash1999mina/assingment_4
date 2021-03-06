import React, { useState,useEffect } from 'react';
import Questions from '../components/Questions';

// fake data
const data= ['1','2','3','4','5','6','7','8','9'];
let response ;
let count ;

function Home() {

    const [state, setstate] = useState([]);
    
    const backHandler =()=>{
        response = [];
        // checking the condition for possibility for back
        if( 0 < count <= data.length) {
            // droping the count by 6
            for ( let index=count-6 ;index < count-3; index++) {
                response.push(data[index])
            }
            // new count position
            count = count - 3;
        }
        // initializing shorted data for sending to <Questions/> element
        setstate(response);
        
    }
    
    const nextHandler =()=>{
        response = [];
        // checking the condition for possibility for Next
        if((count) < (data.length) ) {
            
            for ( let index=count ;index < count+3; index++) {
                response.push(data[index])
            }
            // new count position
            count = count + 3;
        }
        // initializing shorted data for sending to <Questions/> element
        setstate(response);
        
    }
    const submitHandler=() => {
        window.alert('Successfully submitted ');
        // Refreshing the for new
        window.location.reload();
    }
    
    useEffect(() => {
        // first time initailizating the count= 0 on mount
        count = 0 ;
        nextHandler();
    }, [])
    
        
        return (
            <div className='flex flex-col justify-center items-center'>
                <h1 className='p-6 text-green-500 text-3xl'>My Awesome Page</h1>
                <p className='text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nemo sunt dicta officiis animi nobis hic voluptate, laborum magnam sit libero ratione amet consequuntur officia aut dolor vel quasi blanditiis! sit amet consectetur adipisicing elit. Quis nemo sunt dicta officiis animi nobis hic voluptate, laborum magnam sit libero ratione amet consequuntur officia aut dolor vel quasi blanditiis!</p>
                <p className='text-center p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nemo sunt dicta officiis animi nobis hic voluptate, laborum magnam sit libero ratione </p>

                {
                    state.map(res => <Questions key={res} res={res}/>)
                }
                <div className='pt-8'>
                    {(count > 3) && <button onClick={backHandler} className='py-2 px-4 m-4 bg-green-600 rounded text-white hover:bg-green-700'>Back</button>}
                    {(count < data.length ) && <button onClick={nextHandler} className='py-2 px-4 m-4 bg-green-600 rounded text-white hover:bg-green-700'>Next</button>}
                    {(count === data.length ) && <button onClick={submitHandler} className='py-2 px-4 m-4 bg-green-600 rounded text-white hover:bg-green-700'>Submit</button>}
                </div>

            </div>
        )
}

export default Home;
