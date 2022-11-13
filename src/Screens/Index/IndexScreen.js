import axios from "axios";
import React, { useState } from "react";

const IndexScreen = () => {
    const [test, setTest] = useState({});

    axios.get("https://inteli-blockchain-campus-party.herokuapp.com/").then((value) => {
        setTest({"resposta da api": value.data});
    });

    return <main>
        <div>
            {JSON.stringify(test)}
        </div>
        <h1>Index</h1>
    </main>
}

export default IndexScreen