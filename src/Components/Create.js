function getFormValues(event) {
    const data = new FormData(event.currentTarget);
    return Object.fromEntries(data.entries());
}
function Create({value}) {
    const {config, setConfig} = value;
    const handleSubmit = (event) => {
        event.preventDefault();
        const values = getFormValues(event)
        setConfig([...config, {key: values.key, type: values.type, condition: values.condition}])
        console.log(config)
    }
    return (
        <>
            <ul>
                {config.map((key, index) => {
                    return <li key={index}>
                        <form onSubmit={(event) => handleSubmit(event, index)}>
                            <input type="text" name="key" value={key.key}/>
                            <input type="text" name="type" value={key.type}/>
                            <input type="text" name="condition" value={key.condition}/>
                            <input type="submit" value="Add"/>
                        </form>
                    </li>
                })}
                <li>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="key" placeholder="key"/>
                        <input type="text" name="type" placeholder="type"/>
                        <input type="text" name="condition" placeholder="< 24"/>
                        <input type="submit" value="Add"/>
                    </form>
                </li>
            </ul>
        </>
    )
}

export default Create