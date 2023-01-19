import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import styles from "../../styles/VirtualMobileNumber.module.css";
import { Card, Grid, Text } from "@nextui-org/react";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}
const Missedcall = (props) => {




  return (
    <section>
      <Head>
   <title>NettyFish - Virtual Mobile Number </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
  </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Virtual Mobile Number</p>
              <p className={styles.breadcrumb}><Link legacyBehavior href="/"><a className={styles.home}>Home</a></Link> &gt;&gt; Virtual Mobile Number</p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row style={{ borderBottom: "2px solid #97949436" }}>
     
          <Col md={6} style={{ alignSelf: "center" }}>

            <Image
              src="/assets/1653988161_VR-Mob-No.webp"
              alt="Picture of the author"
              height={300}
              width={500}

              quality={100}
              priority
            />

          </Col>

          <Col md={6} className={styles.content} >
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Untitled-9 1.png"
                alt="Picture of the author"
                width={380}
                height={250}
                quality={100}

                priority
              />
            </div>
            <h1 className={styles.heading}>What is Virtual Mobile number?</h1>
            <p>A virtual phone number is usually a particular mobile number that which is not connected to any phone physically or to a SIM-Card by the phone company.</p>
          
            <p>When you have a virtual Mobile Number, you will be able to answer incoming calls with an application across the networks.</p>
          
          </Col>
          
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div >
        <Container>
         
          <Row style={{ borderBottom: "2px solid #97949436" }}>
          <Col md={6} >

       
          <h1 className={styles.heading} >Premium MO & MT<br/>Shortcode/Longcode (VMN) </h1>
            <p>2 way SMS starts when the message is sent by the client to short or long code. This message received by the short or long code is then delivered through to the ‘PULL’ server by the mobile operator.</p>
          
            <p>The server, in turn, processes the message based on the keyword. The incoming messages are delivered back to the client’s web application by initiating a reverse ‘PUSH’ process.</p>
          
          </Col>

          <Col md={6} style={{ alignSelf: "center",paddingBottom:"20px",paddingTop:"20px" }}>
          <Image
              src="/assets/1653988348_VMN-4 (1).webp"
              alt="Picture of the author"
              height={300}
              width={500}

              quality={100}
              priority
            />
           
          </Col>
        </Row>
        <Row style={{ borderBottom: "2px solid #97949436" }}>
        <Col md={6} style={{ alignSelf: "center",paddingBottom:"20px",paddingTop:"20px" }}>
          <Image
              src="/assets/1653987586tele.webp"
              alt="Picture of the author"
              height={300}
              width={500}

              quality={100}
              priority
            />
           
          </Col>
          <Col md={6} >

       
          <h1 className={styles.heading} >Who can use SMS Shortcode/Longcode Service? </h1>
           <ul className={styles.ul}>
            <li>Businesses looking to get feedback from the customers</li>
            <li>Creating Poll campaigns.</li>
            <li>To answer Quiz questions for lucky draw </li>
            <li>Voting through SMS for reality shows, etc.,</li>
            <li>Surveys for marketing purposes.</li>
            <li>Promotion of new products.</li>
           </ul>
          
          </Col>

         
        </Row>
      <div>
        <h1 className={styles.heading}>Benefits of Using Virtual Mobile Number</h1>
        <div className={styles.border}>
        <Row >
        <Col md={5} style={{ alignSelf: "center"}}>
          <Image
              src="/assets/ppl-34223.webp"
              alt="Picture of the author"
              height={500}
              width={800}

              quality={100}
              priority
            />
           
          </Col>
          <Col md={4} style={{ alignSelf: "center"}}>

           <ul className={styles.ul}>
            <li>No mobile required separately</li>
            <li>Access calls from everywhere</li>
            <li>Adaptable in navigating calls</li>
            <li>Keep record of your Marketing</li>
            <li>Missed calls can be eliminated</li>
            <li>Obtain better quality services</li>
           </ul>
          
          </Col>

         
        </Row>
        </div>
        </div>
        <div className={styles.pb_30}>
        <h1 className={styles.heading}>Key Features</h1>
        <div className={styles.border}>
        <Row >
        <Col md={5} style={{ alignSelf: "center" ,textAlign:"center"}}>
          <Image
              src="/assets/1653995985_1653474376_ezgif.com-gif-maker (16).webp"
              alt="Picture of the author"
              height={250}
              width={250}

              quality={100}
              priority
            />
           
          </Col>
          <Col md={4} style={{ alignSelf: "center"}}>

           <ul className={styles.ul}>
            <li>No mobile required separately</li>
            <li>Access calls from everywhere</li>
            <li>Adaptable in navigating calls</li>
            <li>Keep record of your Marketing</li>
            <li>Missed calls can be eliminated</li>
            <li>Obtain better quality services</li>
           </ul>
          
          </Col>

         
        </Row>
        </div>
        </div>
        </Container>
      </div>
     



      
    </section>
  );
};

export default Missedcall;