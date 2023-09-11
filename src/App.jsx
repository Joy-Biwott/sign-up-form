import React, {useState} from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      okayToEmail: true
    })

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
          console.log("Successfully signed up")
      } else {
          console.log("Passwords do not match")
      }
      
      if(formData.okayToEmail) {
          console.log("Thanks for signing up for our newsletter!")
      }
  }
 
    
    function handleChange(e){
      const {name, value, type, checked} = e.target
      setFormData((prevFormData) => ({
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
      }))
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                />
            
                <input 
                    name="password"
                    type="password" 
                    value={formData.password}
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    name="confirmPassword"
                    type="password" 
                    value={formData.confirmPassword}
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        name="okayToEmail"
                        onChange={handleChange}
                        checked={formData.okayToEmail}
                        id="okayToEmail"
                        type="checkbox"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}





