import React from 'react';

export const Test = () => {
  return (
    <div style={{ paddingTop: '200px', paddingBottom: '100px', paddingLeft: '20px' }}>
      <h1>Contact Us</h1>
      <form 
        name="subscribe" 
        method="POST" 
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <input type="hidden" name="bot-field" />

        <div>
          <label>
            Email: 
            <input type="email" name="email" required style={{ border: '1px solid black' }} />
          </label>
        </div>

        <div>
          <button type="submit" style={{ border: '1px solid black' }}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Test;
