import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""        
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )    
    }
    render() {
        return (
            <div>
            <form> 
                <input type="email" 
                name ="email"
                placeholder="Email"
                onChange ={this.handleChange}/>
                <h1>{this.state.email}</h1>
                

            </form>
            <form>
            <input type="password" name = "password" placeholder="password" onChange ={this.handleChange}/>
            </form>
            </div>
        )
    }
}

export default App
