// import { useState, useRef, useEffect } from 'react'
// import { useLocalStorage } from '~/utils/hooks'
// import { handle } from '~/utils/bin';

// type LineData = {
//     command: string;
//     output: string;
// }


function Prompt() {
    const user = 'guest'
    const machine = 'start'

    return (
        <p className="prompt">{user}@{machine}:$&nbsp;</p>
    )
}

export default function Terminal() {

    return (
        <>
            <div className='terminal'>
                <Prompt />
                <input
                    // ref={inputRef}
                    className="input"
                    type="text"
                    autoFocus
                    spellCheck={false}
                // onKeyDown={handleKeyPress}
                />
            </div>
        </>
    )
}