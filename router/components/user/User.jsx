import React from 'react';
import { useParams } from 'react-router';
const User = () => {
    const {id}=useParams();
    return (
        <div className='flex justify-center align-middle'>
            <h1 className='bg-black text-white text-4xl '>Hello : {id}</h1>
        </div>
    );
};

export default User;