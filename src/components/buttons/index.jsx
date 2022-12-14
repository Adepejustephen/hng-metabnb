import React from 'react'

export const Button = ({ children, whitebg, onClick}) => {
    return (
      <>
        {whitebg ? (
          <button
            className="text-txtPurple border-0 outline-0 rounded-[10px] px-8 py-4 text-base font-normal bg-white"
            onClick={onClick}
          >
            {children}
          </button>
        ) : (
          <button
            className="bg-mainPurple border-0 outline-0 rounded-[10px] px-8 py-4 text-base font-normal text-white"
            onClick={onClick}
          >
            {children}
          </button>
        )}
      </>
    );
}
