import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const PriceList = () => (
  <Layout>
    <SEO title="Price list" />
    <h1>Our prices</h1>
    <h4><u>Regular Cleaning for the Whole Hive...</u></h4>
    <div className="weekly-clean">
        <h5><u>The Wee Bee Clean £25</u></h5>
        <p>Suitable for: <b>1 Bedroom/retirement/sheltered houses/elderly</b></p>
        <p>General Clean and Tidy of entrance, bathroom, bedroom, living room and kitchen
        includes a bed change. Floors are hoovered and mopped.</p>

        <h5><u>The Queen Clean £45 (Approx. 1,5 hours)</u></h5>
        <p>Suitable for: <b>3 Bed home/average size/1 toilet/1 en-suite/1 family bathroom</b></p>
        <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room and kitchen
        can include a bed changes. Floors are hoovered and mopped.</p>

        <h5><u>The Bigger Queen Clean £60 (Approx. 2 hours)</u></h5>
        <p>Suitable for: <b>4 Bed home/average size/ dining area/1 toilet/1 en-suite/1 family bathroom</b></p>
        <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room and kitchen
        can include a bed changes. Floors are hoovered and mopped.</p>

        <h5><u>Queens Help By The Hour £30 Per Hour</u></h5>
        <p>Suitable if you would like to pick and choose what you would like cleaned,
        includes 2 cleaning bees.</p>
    </div>
    <h4><u>Bee Preapred Clean...</u></h4>
    <div className="one-off-clean">
        <h5><u>Hive Deep Cleans...</u></h5>
        <p>Suitable for: <b>Holiday let/Spring Clean/End of Tenancy. All cleaning products etc ... supplied.</b></p>
         <h5>A Full Clean of your hive, checklist is available separately.</h5>
         <p><b>2 Bed                    </b><span>£100 Approx. 3 Hours</span></p>
         <p><b>3 Bed                    </b><span>£150 Approx. 4 Hours</span></p>
         <p><b>4 Bed                    </b><span>£185 Approx. 5 Hours</span></p>
         <p><b>5 Bed                    </b><span>£240 Approx. 7 Hours</span></p>
        
        <h5><u>individual Hive Rooms...</u></h5>
        <p><b>Kitchen deep clean                   </b><span>from £30</span></p>
        <p><b>Bathroom deep clean                   </b><span>£25</span></p>
        <p><b>Fridge clean             </b><span>£15</span></p>
        <p><b>Oven clean                   </b><span>from £45</span></p>
        <p><b>Internal windows clean                   </b><span>from £40</span></p>
        <p><b>Washing                   </b><span>from £20per Ikea bag</span></p>
        <p><b>Ironing                   </b><span>£15per hour</span></p>
        

    </div>
  </Layout>
)

export default PriceList