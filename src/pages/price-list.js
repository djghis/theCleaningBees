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
        <p>Suitable for: <b>1 Bedroom/retirement/sheltered house/elderly</b></p>
        <p>General Clean and Tidy of entrance, bathroom, bedroom, living room and kitchen
        includes a bed change. Floors are hoovered and mopped.</p>

        <h5><u>Two Bee Clean £30</u></h5>
        <p>Suitable for: <b>2 Bed average size home/cotage</b></p>
        <p>General Clean and Tidy of entrance, bathroom, bedroom, living room and kitchen.
         Floors are hoovered and mopped.</p>

        <h5><u>The Queen Clean £35 weekly/ £45 Fortnightly</u></h5>
        <p>Suitable for: <b>3 Bed home average size house</b></p>
        <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room and kitchen.
         Floors are hoovered and mopped.</p>

        <h5><u>The Bigger Queen Clean £45 Weekly/£60 Fortnightly </u></h5>
        <p>Suitable for: <b>3/4 bed Larger size house</b></p>
        <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room, dining area and kitchen.
         Floors are hoovered and mopped.</p>

        <h5><u>Queens Help By The Hour from  £28.50per hour</u></h5>
        <p>Suitable if you would like to pick and choose what you would like cleaned,
        includes 2 cleaning bees... Getting the job done twice as fast.</p>

        <h5><u>Beeutiful Bogs... and Floors from £30</u></h5>
        <p>Just want the bathrooms and floors done... We can do just that!</p>
    </div>
    <h4><u>Bee Prepared Clean...</u></h4>
    <div className="one-off-clean">
        <h5><u>Hive Deep Cleans...</u></h5>
        <p>Suitable for: <b>Holiday let/Spring Clean/End of Tenancy. All cleaning products etc ... supplied.</b></p>
         <h5>A Full Clean of your hive, checklist is available separately.</h5>
         <p><b>2 Bed                    </b><span>£120 Approx. 3 Hours</span></p>
         <p><b>3 Bed                    </b><span>£150 Approx. 4 Hours</span></p>
         <p><b>4 Bed                    </b><span>£185 Approx. 5 Hours</span></p>
         <p><b>5 Bed                    </b><span>£240 Approx. 7 Hours</span></p>
        
        <h5><u>individual Hive Rooms...</u></h5>
        <p><b>Kitchen deep clean                   </b><span>from £50</span></p>
        <p><b>Bathroom deep clean                   </b><span>£25</span></p>
        <p><b>Fridge clean             </b><span>£15</span></p>
        <p><b>Oven clean                   </b><span>from £45</span></p>
        <p><b>Internal windows clean                   </b><span>from £40</span></p>
        <p><b>Washing                   </b><span>from £25per Ikea bag</span></p>
        <p><b>Ironing                   </b><span>£15per hour</span></p>
        <p><b>Home styling for SALE                  </b><span>£30</span></p>
        <p><b>Fresh flowers by your Cleaning Bee Florist                  </b><span>from £20 per clean day</span></p>
        

    </div>
  </Layout>
)

export default PriceList