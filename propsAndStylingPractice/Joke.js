import React from "react"

function Joke(props) {
    return (
        <div>
        
            {props.question ? (
              <div>
                Question: {props.question}
              </div>  
            ) : ( null
                
                
                
            )}

            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke