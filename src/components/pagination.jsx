import React from 'react';

export function Pagination (props) {

  return (
    <ul className="pagination d-flex justify-content-between">
      {
        Array.from({length: props.data.total / props.data.perPage },  (v, i) => 
          <li
            onClick={() => props.changePage(i + 1)}
            key={i}
            className={
              `item ${i + 1 === props.data.current ? 'item-active' : ''}`
            }
          >{ i + 1 }</li>
        )
      }
    </ul>
  )
}
