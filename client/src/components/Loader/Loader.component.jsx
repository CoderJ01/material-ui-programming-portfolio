import React from 'react';
import { Oval } from  'react-loader-spinner';
import './Loader.style.css';

const Loader = () => {
    return (
        <div className='loader'>
            <Oval
                height={80}
                width={80}
                color='rgb(0, 4, 55)'
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor='rgb(255, 253, 208)'
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    );
}

export default Loader;