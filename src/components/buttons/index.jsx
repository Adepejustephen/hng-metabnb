import React from 'react'

export const Button = ({ children, whitebg}) => {
    return (
      <>
        {whitebg ? (
          <button className="text-mainPurple border-0 outline-0 rounded-[10px] px-8 py-4 text-base font-normal bgb-white">
            {children}
          </button>
        ) : (
          <button className="bg-mainPurple border-0 outline-0 rounded-[10px] px-8 py-4 text-base font-normal text-white">
            {children}
          </button>
        )}
      </>
    );
}
