import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export function Card (props) {
  return (
    <div onClick={() => props.openSideBar(props.data.id)} className={`card card__${props.data.type}`}>
      <div className="card-img">
        <img src={props.data.image} alt="poke-image"/>
        {
          props.data.isFavorite ?
          <AiFillHeart
            onClick={() => props.addFavorite(props.data.id)}
            className="icon-hear fav"
          /> :
          <AiOutlineHeart
            onClick={() => props.addFavorite(props.data.id)}
            className="icon-hear"
          />
        }
      </div>
      <div className="card-info">
        <span className="card-info--id mb-1">#{props.data.id}</span>
        <p className="card-info--name mb-1 pt-1 fw-bold">{props.data.name}</p>
        <p className="card-info--type fs-8">Type: {props.data.type}</p>
      </div>
    </div>
  )
}
