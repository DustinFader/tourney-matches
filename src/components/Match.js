import React from "react";

function Match(props) {
  return (
    <article className="Match">
      <h1>{ props.players[0] } <span>Vs</span> { props.players[1] }</h1>
      { props.winner ? <h2>{ props.winner } is the winner by 1!</h2> : <h2>No winners yet!</h2>}
    </article>
  )
}

export default Match;