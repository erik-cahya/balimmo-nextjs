import React from 'react'

export const Test = () => {
  return (
    <div>
        <h1>Contact Us</h1>
        <form 
        name="subscripe" method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field">
            
        <input type="hidden" name="form-name" value="subscripe" />
    
        <div>
            <label>
            Email: <input type="email" name="email"/>
            </label>
        </div>
        
        <div>
            <button type="submit">Send</button>
        </div>
        </form>
    </div>
  )
}
export default Test
