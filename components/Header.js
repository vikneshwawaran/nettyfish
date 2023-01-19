import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { useEffect, useState } from "react";

import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from "next/link";
import styles from '../styles/Header.module.css'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"; 

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}

const Header = () => {


  return (
    <>
      <Head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>


      </Head>
     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>

      <div className={`${styles['is-sticky']} ${styles['header-all']} header-all`}>
        <div className={`${styles['container']} container`}>
          <nav className={`${styles.navbar}  ${styles['navbar-light']} ${styles['navbar-expand-lg']} navbar navbar-expand-lg navbar-light`}>

            <Link legacyBehavior href="/"><a className="navbar-brand" >
              <Image
                className={styles.logoimg}
                loader={myLoader}
                src='assets/headerLogo.png'
                alt="Picture of the author"
                width={150}
                height={100}
              />
            </a></Link>
            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </Button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`${styles['navbar-nav']} navbar-nav me-auto mb-2 mb-lg-0`}>

                <li className="nav-item dropdown">
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link legacyBehavior href="/enterprise_sms"><a className="dropdown-item" >Enterprise SMS</a></Link></li>
                    <li><Link legacyBehavior href="/smart_url_tracking"><a className="dropdown-item" >Smart URL Tracking</a></Link></li>
                    <li><Link legacyBehavior href="/cloud-telephony-ai-autodialer"><a className="dropdown-item" >Cloud-telephony-ai-autodialer</a></Link></li>
                    <li><Link legacyBehavior href="/missed_call_service"><a className="dropdown-item" >Missed call Service</a></Link></li>
                    <li><Link legacyBehavior href="/virtual_mobile_number"><a className="dropdown-item" >Virtual Mobile Number</a></Link></li>
                    <li><Link legacyBehavior href="/obd_calls"><a className="dropdown-item" >OBD Calls</a></Link></li>
                    <li><Link legacyBehavior href="/voice_key_input"><a className="dropdown-item" >Voice Key Input</a></Link></li>
                    <li><Link legacyBehavior href="/ivr_service"><a className="dropdown-item" >IVR Service</a></Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Solutions <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link legacyBehavior href="/advertising_agencies"><a className="dropdown-item" >Advertising Agencies</a></Link></li>
                    <li><Link legacyBehavior href="/automobiles_solutions"><a className="dropdown-item" >Automobiles</a></Link></li>
                    <li><Link legacyBehavior href="/bfsi_solutions"><a className="dropdown-item" >BFSI</a></Link></li>
                    <li><Link legacyBehavior href="/community"><a className="dropdown-item" >Community</a></Link></li>
                    <li><Link legacyBehavior href="/consultancy"><a className="dropdown-item" >Consultancy</a></Link></li>
                    <li><Link legacyBehavior href="/E-commerce"><a className="dropdown-item" >E-commerce Solutions</a></Link></li>
                    <li><Link legacyBehavior href="/education"><a className="dropdown-item" >Education</a></Link></li>
                    <li><Link legacyBehavior href="/electrical_electronics"><a className="dropdown-item" >Electrical & Electronics</a></Link></li>
                    <li><Link legacyBehavior href="/food_beverages"><a className="dropdown-item" >Food & Beverages</a></Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Digital Marketing <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link legacyBehavior href="/sms_marketing"><a className="dropdown-item" >SMS Marketing</a></Link></li>
                    <li><Link legacyBehavior href="/voice_broadcast"><a className="dropdown-item" >Voice Broadcast</a></Link></li>
                    <li><Link legacyBehavior href="/whatsapp_broadcast"><a className="dropdown-item" >Whatsapp Broadcast</a></Link></li>
                    <li><Link legacyBehavior href="/email_marketing"><a className="dropdown-item" >Email Marketing</a></Link></li>
                    <li><Link legacyBehavior href="/seo"><a className="dropdown-item" >SEO</a></Link></li>
                    <li><Link legacyBehavior href="/facebook_smm"><a className="dropdown-item" >Facebook (SMM)</a></Link></li>
                    <li><Link legacyBehavior href="/instagram_smm"><a className="dropdown-item" >Instagram (SMM)</a></Link></li>
                    <li><Link legacyBehavior href="/linked_in_smm"><a className="dropdown-item" >Linked-in (SMM)</a></Link></li>
                    <li><Link legacyBehavior href="/youtube_smm"><a className="dropdown-item" >Youtube (SMM)</a></Link></li>
                    <li><Link legacyBehavior href="/google_sem"><a className="dropdown-item" >Google Ads (SEM)</a></Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Become a partner <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link legacyBehavior href="/partner"><a className="dropdown-item" >Partner with Us</a></Link></li>
                  </ul>
                </li>


                {/* <li className="nav-item dropdown">
         <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Become a partner <span className={styles.arrowz}><RiArrowDropDownLine/></span> 
         </a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a className="dropdown-item" >Action</a></li>
           <li><a className="dropdown-item" >Another action</a></li>
           
           <li><a className="dropdown-item" >Something else here</a></li>
         </ul>
       </li> */}


                <li className="nav-item dropdown">
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" >Action</a></li>
                    <li><a className="dropdown-item" >Another action</a></li>

                    <li><a className="dropdown-item" >Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link legacyBehavior href="pages/enterprise_sms">
                    <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contact Us <span className={styles.arrowz}></span>
                    </a>
                  </Link>
                </li>

                {/* <li className="nav-item">
         <a className="nav-link" >Contact Us</a>
       </li> */}

              </ul>
              {/* <form className="d-flex">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form> */}

              <Button className={styles.freedemo} variant="primary">Free Demo</Button>{' '}

              <div className="nav-item dropdown color_btn" style={{ paddingLeft: " 10px" }}>
                <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Image
              loader={myLoader}
              src="assets/button group.png"
              alt="Picture of the author"
              width={40}
              height={40}
            />
                
                </a>
                <ul className={`${styles['logout']} dropdown-menu `} aria-labelledby="navbarDropdown">
                  <li style={{ width: "100%" }}><a className="dropdown-item" >Logout</a></li>

                </ul>
              </div>

            </div>

          </nav>
        </div>

      </div>

    </>
  );
};

export default Header;