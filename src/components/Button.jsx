import React from 'react';


export const Button = ({name}) => {
    return (
        <>
            <div className={`flex items-center justify-center pb-2 pt-8 md:pt-8`}>
                <button type="submit" className={`inline-flex transition shadow-button-box-shadow items-center justify-center px-4 py-2 text-sm font-bold tracking-widest text-white transition border border-transparent rounded-md bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 w-full`} >
                    {name}
                </button>
            </div>
        </>
    )
}