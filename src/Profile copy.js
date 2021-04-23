import { useEffect, useState } from "react";
import { useParams } from "react-router"

function Profile(props) {
    let {noteURL} = useParams();
    let [url, setUrl] = useState();
    let [lineClass, setLineClass] = useState();

    useEffect(() => {
        
    }, )
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}

export {Profile}