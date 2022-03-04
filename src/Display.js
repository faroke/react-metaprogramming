import {useEffect, useState} from "react";

function Display({myObject, partner}){
    const [config, setConfig] = useState([])

    useEffect(() => {
        console.log(config)
    }, [config])

    return (
        <>
            <h1>Config {partner}</h1>
            {Object.keys(myObject).map((key, index) => {
                return <div key={index}>
                    <button onClick={() => setConfig([...config, key])}>Add {key}</button>
                </div>
            })}
            <p>
                {config.map((key) => {
                    return key + ', '
                })}
            </p>

            <h2>Rendu {partner}</h2>
            {config.map((key, index) => {
                return <div key={index}>
                    <label>{key} : </label>
                    <input placeholder={myObject[key]}/>
                </div>
            })
            }
        </>
    )
}
export default Display;