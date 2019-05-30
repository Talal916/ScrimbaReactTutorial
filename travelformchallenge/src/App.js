import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions:"",
            isDisabled: true 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const {name,value,type,checked} = event.target;
        type === "checkbox" ? 
        this.setState({
            [name]: checked
        })
        :
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <main>
                <form>
                    <div className ="identifyingFields">
                    <div>
                        <h2>Trip Planner!</h2>
                    <input 
                    type="text"
                    name = "firstName"
                    placeholder="First Name" 
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                    
                    </div>
                        
                    <br />
                    <div>
                    <input 
                    type="text"
                    name = "lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange = {this.handleChange}
                    />
                    </div>

                    <br />
                    <div>
                    <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                     />
                     </div>
                    </div>
                    
                    <br/>

                    <div>
                    {/* Create radio buttons for gender here */}
                    <input 
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={this.state.gender === "Male"}
                    onChange={this.handleChange}
                    />
                    Male
                  

                    <p/>
                
                    <input 
                    type="radio"
                    name="gender"
                    value="Female"
                    checked = {this.state.gender === "Female"}
                    onChange={this.handleChange}
                    />
                    Female
                    </div>


                    
                    <br/>
                    <div>

                    {/* Create select box for location here */}
                    <select
                        value={this.state.destination}
                        onChange = {this.handleChange}
                        name = "destination" >
                        <option value = "Seattle">Seattle</option>
                        <option value = "Sacramento">Sacramento</option>
                        <option value = "Atlanta">Atlanta</option>
                        <option value = "New York">New York</option>
                        </select>
                
                    </div>

                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <div>
                    <input
                        type ="checkbox"
                        name = "isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                    /> Vegan
                    <br />

                    <input
                        type ="checkbox"
                        name = "isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                    /> Kosher

                    <br />

                    <input
                        type ="checkbox"
                        name = "isHalal"
                        checked={this.state.isHalal}
                        onChange={this.handleChange}
                    /> Halal
                    <br />

                    <input
                        type ="checkbox"
                        name = "isLactose"
                        checked={this.state.isLactose}
                        onChange={this.handleChange}
                    /> Lactose Intolerant

                    <br />

                    <input
                        type ="checkbox"
                        name = "isOther"
                        checked={this.state.isOther}
                        onChange={this.handleChange}
                       
                        onClick= {() => this.setState({
                            isDisabled: !this.state.isDisabled
                        })} 

                    /> 

                    <input
                        type = "text"
                        name = "otherRestriction"
                        placeholder="Other Restriction" 
                        disabled = {this.state.isDisabled}
                        
                        value={this.state.otherRestriction}
                        onChange={this.handleChange}

                    />
                    </div>

                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}
export default App
