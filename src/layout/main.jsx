import React, { useState, useEffect } from 'react';

export function Main() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchApi()
  }, [page])

  const fetchApi = () => {
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then(data => setData(data.data))
  }

  return (
    <div className="list-user">
      <button type="button" onClick={() => setPage(page - 1)}>Prev</button>
      {
        (data || []).map((item, index) => 
          <div key={index}>
            <div className="item">
              <img src={item.avatar}></img>
              <p>{item.first_name} {item.last_name}</p>
            </div>
          </div>
        )
      }
      <button type="button" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
