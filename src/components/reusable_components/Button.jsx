import React from 'react'

function Button({ onclick, buttonTitle, svg, styles}) {
    return (
        <button className={styles} onClick={onclick}>  
            {svg}
            {buttonTitle}
        </button>
    )
}

export default Button