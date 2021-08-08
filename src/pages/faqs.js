import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Faqs = () => (
  <Layout>
    <SEO title="FAQs" />
    <h1>FAQs</h1>
  
    <div className="faqs">
    <h5>Who supplies the cleaning products ?</h5>
    <p>We supply a full range of cleaning products for your home. We are currently using the Method cleaning range which not only smell fantastic, are antibacterial, cruelty free and free of nasty toxins by being plant based!
    If you would like to supply the cleaning kit, we can send you a list of what is required.
    </p>

    <h5>How often will I need to use Cleaning Bees ?</h5>
    <p>We are available for weekly, fortnightly and One offs clean.</p>

    <h5>What are our standards ?</h5>
    <p>Cleaning Bees are a professional, reliable an discreet service based in North Berwick. We have substantial experience
    in domestic and commercial cleaning, both privately and within the hospitality sector. We want you to feel secure in every aspect
    of our service. We are fully insured and currently being police checked. We hold a COSHH training certificate, ensuring the safe use of chemicals
    and substances within the workplace.</p>

    <h5>What if we need to reschedule/cancel ?</h5>
    <p>In the event you may need to reschedule planned cleaning or need to cancel it, we will do our very best to accomodate a new slot or if you could 
     let us know at your earliest convenience it would be appreciated. Likewise if for any reason we would have to make any changes to our schedule you would 
     be contacted as soon as possible and if one of the Bees may need cover due to illness or absence thier replacement would be fully trained and equally committed
     to your satisfacion of a BEE-autifully clean home!</p>

     <h5>What other measures are in place regarding Covid19 ?</h5>
     <p>With restriction we ask you are NOT home for the clean. If you must be there, we ask you stay within a room with the door closed. All measures are in place to minimise any risk and keep you and your household, as well as ourselves as safe as possible during this time.
      We currently also: </p>

    <ul className="price-list-ul">
            <p><li>Antibacterial our hands</li></p>
            <p> <li>Wear a mask at all times</li></p>
            <p> <li>Take our temperature before entering all properties</li></p>
            <p> <li>All door handles antibacterial wiped before leaving</li></p>      
            <p> <li>All cloths and cleaning products are bagged separately and sterilised between clients.</li></p>
            
          </ul>

    <h5>How do I pay</h5>
     <p>It’s nice and simple really, we accept cash or send an invoice after each clean ready to make a bank transfer! All cleans must be paid for within 24 hours of us providing our regular service and One-off services
        require a 50% Deposit to secure an appointment. </p>
     
    </div>
    
  </Layout>
)

export default Faqs
