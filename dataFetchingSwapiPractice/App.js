import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            person: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => 
            {this.setState({
                loading: false,
                person: data
                
            })
            })
        
    }
    
    render() {
        const text = this.state.loading ? "Loading..." : this.state.person.name
        return (
            <div>
            <p>{text}</p>
                        </div>
        )
    }
}

export default App
