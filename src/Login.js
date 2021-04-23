import { useState } from "react"
import {Profile} from './Profile'

function Login(props) {
    const [value, setValue] = useState();
    const [state, setState] = useState(false);

    function save(e) {
        setValue(e.target.value);
        if (e.target.value === '1234') setState(true)
    }

    return (
        <>
            <input value={value} onChange={save} />
            {state
                ?
                <Profile />
                :
                <h1>Введите пароль: 1234</h1>
            }
        </>
    )
}

export { Login }