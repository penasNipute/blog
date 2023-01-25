import './Card.css'

import { Heart } from "phosphor-react";

export function Card(props) {
  return(
    <div className="container">
      <div className="card">
        <div className="header_card">
          <div className="date">{ props.date }</div>
          <Heart
            size={20}
            cursor='pointer'
            color='#574AE8'
          />
        </div>
  
        <div className="body_card">
          <h1>{ props.title }</h1>
          <p>
            { props.paragraph }
          </p>
        </div>
      </div>
    </div>
  )
}