import React, { useEffect, useState } from 'react'

const useFetch = ( url : string ) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
         fetch(url)
            .then((response : Response) => {
                response.json()
                .then((data) => { setLoading(false); setData(data) })
            })
            .then(data => {
                console.log(data);
                setLoading(false);
            }).catch((error) => {
                console.error(error);
            })
    }, []);

    return [loading, data];

}

export default useFetch