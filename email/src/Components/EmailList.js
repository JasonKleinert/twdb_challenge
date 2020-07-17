import React, { useState, useEffect } from 'react';

function EmailList() {

  const [loading, setLoading] = useState(true)
  const [emails, setEmails] = useState() 


  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:5000/', { 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      }
      })
        .then(response => response.json())
        .then(data => {
            setEmails(data)
        });

    }, []);

  return (
    <div className="App">
    <h1>Emails</h1>
      {
        !emails || emails.length === 0 ?  (<p>...loading</p>)
        :(
          emails.map( (v,i) => (
          <div key={i+v}>{v.address}</div>
          ))
        )
      }
    </div>
  );
}

export default EmailList;
