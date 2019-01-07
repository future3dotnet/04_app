import React from 'react'

const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
       }}
    >
      {children}
    </button>
)


export default Link
