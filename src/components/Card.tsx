import { useState } from "react";
import type { CardProps } from "../models/movieflix.model";

function Card(props: CardProps) {
  const [hasLiked, setLiked] = useState(false);
  const { title } = props;
  return (
    <>
      <div className="card" style={{ backgroundColor: "#31363f" }}>
        <h2>{title}</h2>

        <button onClick={() => setLiked(!hasLiked)}>
          {hasLiked ? "❤️" : "🤍"}
        </button>
      </div>
    </>
  );
}

export default Card;
