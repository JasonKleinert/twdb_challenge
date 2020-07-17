import React, { useState, useEffect } from 'react'

const DomainList = () => {

    const [loading, setLoading] = useState(true)
    const [domains, setDomains] = useState()


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:5000/domains', {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setDomains(data)
            });

    }, []);

    return (
        <div>
            <h1>domains</h1>
            {
                !domains || domains.length === 0 ? (<p>...loading</p>)
                : (
                    domains.map((v, i) => (
                    <div key={i + v}> {v.domain}: {v.count}</div>
                )))
                    }
        </div>
    )
}

export default DomainList