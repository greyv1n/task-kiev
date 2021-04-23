import { useEffect, useState } from "react";

function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('url')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return (
        <>
            <h1>Выводим данные пользователя</h1>
        </>
    )
}

export { Profile }