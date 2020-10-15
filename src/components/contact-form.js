import React from 'react'
  

const ContactForm = () => {
    return (
      <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact"/>
        <label>
        Your name: 
            <input type="text" name="name" placeholder="John Smith">    
            </input>
        </label>
        <label>
        Your email: 
            <input type="email" name="email" placeholder="jhonsmith@gmail.com">    
            </input>
        </label>
        <label>
        Message: 
            <textarea name="message"/>
        </label>
        <button type="submit">
               Send   
        </button>
        <input type="reset" value="clear" />
      </form>   
    )
}

export default ContactForm