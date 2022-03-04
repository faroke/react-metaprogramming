import {useEffect, useState} from "react";

function Display({value}){
    const [config, setConfig] = useState([])

    useEffect(() => {
        console.log(config)
    }, [config])

    return (

        <>
            <h1>Display</h1>
            {value.map((key, index) => {
                return <div key={index}>
                    <button onClick={() => setConfig([...config, key])}>Add {key.key}</button>
                </div>
            })}
            <p>
                {config.map((key) => {
                    return key.key + ', '
                })}
            </p>

            <h2>Rendu</h2>
            {config.map((key, index) => {
                return <div key={index}>
                    <input placeholder={key.key} onChange={(e) => {
                        if(eval(e.target.value + key.condition))
                            console.log('VALIDE');
                        else
                            console.log('INVALIDE');
                    }}/>
                </div>
            })
            }
        </>
    )
}
export default Display;