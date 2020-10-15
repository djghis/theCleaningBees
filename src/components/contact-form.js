import React from 'react'
  

const ContactForm = () => {
    return (
      <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact"/>
        <label>
        Message: 
            <input type="text" name="message" placeholder="Your message here...">    
            </input>
        </label>
        <button type="submit">
               Send   
        </button>
        <input type="reset" value="clear" />
      </form>   
    )
}

export default ContactForm