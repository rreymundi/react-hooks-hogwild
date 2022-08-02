import React, {useState} from "react";

function HogCard({ hogs }) {
    const [isVisible, setVisibility] = useState(false)

    function handleClick(){
        setVisibility(!isVisible)
    }

    const hogInfo = hogs.map((hog) => {
        return (
            <>
            <div>{hog.specialty}</div>
            <div>{hog.weight}</div>
            <div>{hog.greased}</div>
            <div>{hog["highest medal achieved"]}</div>
            </>
        )
    })

    const renderedHogs = hogs.map((hog) => {
        return (
            <div className="ui eight wide column" key={hog.id} onClick={handleClick}>
                <h3 className="hog name">{hog.name}</h3>
                <img src={hog.image} alt={hog.name}></img>
                <div>{isVisible ? {hogInfo} : null}</div>
            </div>
        )
    })

    return (
        <div>{renderedHogs}</div>
    )
}

export default HogCard;