import React from 'react'
import {useNavigate } from 'react-router-dom';


function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <h1>HOME</h1>
            <h2 onClick={()=>navigate('/transaction')}>Navigate to Transactions</h2>
        </div>
    )
}

export default Home