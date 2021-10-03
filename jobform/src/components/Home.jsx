import React from 'react'
import {Link} from "react-router-dom";
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <header>
           <nav><h1>Afri<span>Hub</span> <span id="careers">Careers</span></h1> </nav> 

           <section>
               <span>
               <h3>Experienced Driver</h3>
               <h1>Supplychain and Logistics Dept</h1>
               <h4>Lagos | Nigeria</h4>
               </span>

               <span>
               <Link to='/form'>Apply Now</Link>
               </span>
           </section>
        </header>

           <main>
               
               <span>
               <h3>
                   Location - Marina Lagos Island
               </h3>

               <p>
                    AfriHub was founded on the principle that every African must be able to participate and 
                    thrive in the global Finacial economy. To achieve this objective, we thrive to be the best Customer Bank in Africa
               </p>
               </span>

        

               <span>
               <h3>
                    AfriHub's Vision
               </h3>

               <p>
                    To make it easier for Africans to build global businesses 
                    that can make and accept any payment, anywhere from across Africa and around the world.
               </p>
               </span>

               <span>
               <h3>
                    AfriHub Mission
               </h3>

               <p>
                    Simplifying Banking Services for endless possibilities.
               </p>
               </span>

               <span>
               <h3>
               Required competency and skillset
               </h3>
               <ul>
                   <li>Minimum of 5 years’ experience as a Logistics Driver</li>
                   <li>Expertise in driving Around the Busy Areas of lagos</li>
                   <li>Excellent communication skills and strong leadership capability</li>
                   <li>Ability to work in a fast paced environment.</li>
                   <li>Ability to adapt to the changing needs of the organization</li>
                   <li>Ability to perform under pressure.</li>
                   <li>Fluent in English</li>
                   <li>Experience in Car Auto Repair is an added advantage</li>
                   
               </ul>
               </span>
           </main>
           <Footer/>
           </>


       
    )
}

export default Home
