import React from 'react';
import page from '../../public/404.jpg'

const PageNotFound = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-center'>Page not Found.</h2>
            <img className='w-75 d-flex justify-content-center' src={page} alt="" />
        </div>
    );
};

export default PageNotFound;