import React from 'react'

export default function Button({ bgColor, color, size, width, text, borderRadius }) {
    return (
        <button
            type='button'
            width={width}
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3
            hover:drop-shadow-xl`}>
            {text}
        </button>
    )
}
