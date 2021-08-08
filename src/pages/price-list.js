import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const PriceList = () => (
  <Layout>
    <SEO title="Price list" />
    <h1>Price List August 2021</h1>
    <h4><u>Regular Cleaning for the Whole Hive...  ALL services includes 2 Cleaning Bees</u></h4>
    <div className="weekly-clean">
        <h5><u>The Wee Bee Clean £25 Weekly/£30 Fornightly</u></h5>
        <p>Suitable for: <b>1 Bedroom/retirement/sheltered house/elderly</b></p>
        {/* <p>General Clean and Tidy of entrance, bathroom, bedroom, living room and kitchen
        includes a bed change. Floors are hoovered and mopped.</p> */}
          <ul className="price-list-ul">
            <p><li>General Clean & tidy</li></p>
            <p> <li>Living room</li></p>
            <p> <li>Bathroom</li></p>        
            <p> <li>Kitchen</li></p>
            <p> <li>Washing Laundered</li></p>
            <p> <li>Bedroom Including bed change</li></p>
            <p> <li>Floors are hoovered and mopped</li></p>
          </ul>

        <h5><u>Two Bee Clean £40 Weekl/£45 Fornightly</u></h5>
        <p>Suitable for: <b>2 Bed average size home/cottage</b></p>
        {/* <p>General Clean and Tidy of entrance, bathroom, bedroom, living room and kitchen. */}
         {/* Floors are hoovered and mopped.</p> */}
          <ul className="price-list-ul">
            <p><li>General Clean & tidy</li></p>
            <p> <li>Bathroom</li></p>
            <p> <li>Kitchen</li></p>
            <p> <li>Living room</li></p>        
            <p> <li>Bedroom Including bed change</li></p>
            <p> <li>Floors are hoovered and mopped</li></p>
          </ul>

        <h5><u>The Queen Clean £45 weekly/ £50 Fortnightly</u></h5>
        <p>Suitable for: <b>3 Bed average size home</b></p>
        {/* <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room and kitchen.
         Floors are hoovered and mopped.</p> */}
          <ul className="price-list-ul">
            <p><li>General Clean & tidy</li></p>
            <p><li>Entrance</li></p>
            <p><li>Hallways</li></p>
            <p> <li>Bathroom</li></p>
            <p> <li>Bedrooms</li></p>
            <p> <li>Living room</li></p>
            <p> <li>Dining/Kitchen</li></p>
            <p> <li>Floors are hoovered and mopped</li></p>
          </ul>

        <h5><u>The Bigger Queen Clean £60 Weekly/£65 Fortnightly </u></h5>
        <p>Suitable for: <b>4 bed average size home</b></p>
        {/* <p>General Clean and Tidy of entrance, hallway, bathrooms, bedrooms, living room, dining area and kitchen.
         Floors are hoovered and mopped.</p> */}
          <ul className="price-list-ul">
            <p><li>General Clean & tidy</li></p>
            <p><li>Entrance & Hallways</li></p>
            <p> <li>Bathroom</li></p>
            <p> <li>Bedrooms</li></p>
            <p> <li>Living room</li></p>
            <p> <li>Dining/Kitchen</li></p>
            <p> <li>Office/Utility/Family Room</li></p>
            <p> <li>Floors are hoovered and mopped</li></p>
          </ul>


        <h5><u>Queens Help By The Hour from  £35per hour</u></h5>
        <p>Suitable if you would like to pick and choose what you would like cleaned</p>

        <h5><u>Beeutiful Bogs... and Floors from £30</u></h5>
        <p>Just want the bathrooms and floors done... We can do just that!</p>
        
        <h5><u>Hive Declutter £35per Hour</u></h5>
        <p>We can organise cupboards, declutter areas, Discaard unwanted items, Gift unwanted items and deep clean organised areas</p>
    </div>
    <h4><u>Bee Prepared...</u></h4>
  
    <div className="one-off-clean">
        <h5><u>Hive Deep Cleans...</u></h5>
        <p>Suitable for: <b>Holiday let/Spring Clean/End of Tenancy. All cleaning products etc ... supplied.</b></p>
         <h5>A Full Clean of your hive!</h5>
         <p><b>2 Bed                    </b><span>£150</span></p>
         <p><b>3 Bed                    </b><span>£170</span></p>
         <p><b>4 Bed                    </b><span>£190</span></p>
         <p><b>5 Bed                    </b><span>£240</span></p>
        
        <h5><u>individual Hive Rooms...</u></h5>
        <p><b>Kitchen deep clean                   </b><span>from £50</span></p>
        <p><b>Bathroom deep clean                   </b><span>from £30</span></p>
        <p><b>Fridge clean             </b><span>£15</span></p>
        <p><b>Oven clean                   </b><span>from £45</span></p>
        <p><b>Internal windows clean                   </b><span>from £40</span></p>
        <p><b>Washing                   </b><span>from £30per Ikea bag</span></p>
        <p><b>Ironing                   </b><span>from £30per Ikea bag</span></p>
        

    </div>
  </Layout>
)

export default PriceList