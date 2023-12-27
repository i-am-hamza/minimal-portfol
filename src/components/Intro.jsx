import React from 'react';

function Intro (){
    return(
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-12'>
        
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'> Hamza</h1>
            <p className='text-base md:text-x1 mb-3 font-medium'>Computer Science Engineer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>This is my entire bio</p>
        </div>
    )
}

export default Intro;