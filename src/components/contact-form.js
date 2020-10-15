import React from 'react'
  

const ContactForm = () => {
    return (
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="text" name="name" placeholder="Your message here...">
              
        </input>
        <button>
               Send   
        </button>
      </form>   
    )
}

export default ContactForm