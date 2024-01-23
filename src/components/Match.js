import React from "react";

function Match(props) {
  return (
    <article className="Match">
      <h1>{ props.Players[0] } <span>Vs</span> { props.Players[1] }</h1>
      { props.winner ? <h2>{ props.winner } is the winner by {props.scoreDifference}!</h2> : <h2>No winners yet!</h2>}
    </article>
  )
}

export default Match;