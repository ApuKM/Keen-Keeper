import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex items-center justify-center h-[60vh]'>
            <HashLoader />
        </div>
    );
};

export default loading;