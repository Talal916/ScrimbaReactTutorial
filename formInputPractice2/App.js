import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: null,
            favColor: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type,checked} = event.target
        type === "checkbox" ? 
        this.setState({
            [name]: checked
        })
        : this.setState({
            [name]: value
        })
    }
    
    renderResponse() {
        const { favColor,gender,firstName,lastName} = this.state
        if(favColor && gender && firstName && lastName != null) {
        return(
        <h4> You are a {this.state.gender} by the name of {this.state.firstName} {this.state.lastName} and your favorite color is {this.state.favColor}</h4>    
        )}
    }
    render() {
        return (//onSubmit undefined
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                
                <textarea 
                value = {"some default value"}
                onChange={this.handleChange}
                />
                
                <label>
                <input 
                    type="checkbox" 
                    name = "isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                />
                </label>
                <br/>
                <label>
                <input 
                    type="radio" 
                    name = "gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                /> Male
                </label>
                <br />
                <label>
                <input 
                    type="radio" 
                    name = "gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                /> Female
                </label>
                
                <br/>
                
                <select 
                value = {this.state.favColor}
                onChange={this.handleChange}
                name = "favColor" >
                    <option value = "blue">Blue</option>
                    <option value = "green">Green</option>
                    <option value = "red">Red</option>
                    <option value = "orange">Orange</option>
                    <option value = "yellow">Yellow</option>


                </select>
                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                
            {this.renderResponse()}
            <button>Submit</button>
            </form>   
        )
    }
}

export default App
