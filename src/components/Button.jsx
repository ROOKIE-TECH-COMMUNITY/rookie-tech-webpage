import React from 'react';


export const Button = ({name}) => {
    return (
        <>
            <div className={`flex items-center justify-center py-12 md:py-6`}>
                <button type="submit" className={`inline-flex transition shadow-button-box-shadow items-center justify-center px-4 py-4 text-sm font-bold tracking-widest text-white transition border border-transparent rounded-md bg-gray-800 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 w-full`} >
                    {name}
                </button>
            </div>
        </>
    )
}