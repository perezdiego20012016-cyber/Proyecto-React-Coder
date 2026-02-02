
function Button ({label, styles,handleClick,children}){
    return (
        <button onClick={handleClick} style ={styles}>{children}</button>
    )
}

export default Button