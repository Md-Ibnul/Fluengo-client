import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className='text-center pt-24 pb-14'>
            <p className='font-thin text-red-600 pb-1'>{subtitle}</p>
            <h2 className='font-bold text-black text-4xl uppercase tracking-wide font-serif relative inline px-4 border-l-4 border-r-4 border-yellow-500'>{title}</h2>
        </div>
    );
};

export default Title;