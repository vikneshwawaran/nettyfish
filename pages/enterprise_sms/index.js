import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import styles from "../../styles/Enterprise.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}
const Enterprise = (props) => {

  

  return (
    <>
    <Head>
    <title>NettyFish - Enterprise</title>

  </Head>
  
    <section>
    
      <div >
        <div className={styles.banner}>

          <Row>
            <Col  md={7} className="offset-2">
              <p className={styles.title}>Automobiles Solutions</p>
              <p className={styles.breadcrumb}><Link legacyBehavior href="/"><a className={styles.home}>Home</a></Link> &gt;&gt; Enterprise SMS</p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={7}>
            <Image
              loader={myLoader}
              src="assets/image 26.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Col>

          <Col md={5} style={{ alignSelf: "center" }}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Untitled-9 1.png"
                alt="Picture of the author"
                width={380}
                height={250}
              />
            </div>
            <p className={styles.heading}>Whatsapp API for <br />Automobile dealers</p>
            <p> Nettyfish Bot assistant gives automated service reminders for all the customers who have purchased from their showroom. This automates the process of booking service appointments. In case of new purchase, all enquiries are being answered instantly by bot assistant about the car details, car models, car pricing, car recommendations with car images, mileage details, comparison with other cars, booking test drives, address the queries about breakdown, repair and maintenance support.
              It also helps in qualifying the leads and prioritize the leads and does the complete sales process without human intervention.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={styles.heading_one}>Automobiles Solutions AI - Auto<br /> WhatsApp Chatbot</h1>
            <p className={styles.pera}> Nettyfish Chatbot provides solutions for Automotive industry with complete automation in interacting for customer queries about finding a new car,<br /> auto brands, financing options, car parts, car tires, reminders about service. Automobile virtual assistant uses Artificial Intelligence specifically <br /> designed to do the role of Agents answering customer queries in showroom.<br />
              While most of the automobiles takes time to attend customers who visit the showrroom, they have no time to chat on mobile to share new brands of cars but whatsapp chatbot services are being very convenient with a feature automatically respond customers by sharing videos and images of newly launched car models and it enables customer to book a test drive online by giving a scheduled date and time for test drive. Automotive assistant is also used for collecting required documents for financial support and loan arrangements and collect all required documents on phone.</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "50px" }}>
          <Col md={6}>
            <Image
              loader={myLoader}
              src="assets/automo.png"
              alt="Picture of the author"
              width={650}
              height={500}
            />
          </Col>
          <Col md={6}>
            <Image
              loader={myLoader}
              src="assets/chat-wp.png"
              alt="Picture of the author"
              width={650}
              height={500}
            />
          </Col>

        </Row>



      </Container>
      <div className={styles.background}>
        <h1 className={styles.ta_center}>Steps to use SMS</h1>
        <Container>
        <div>
          <Row>
            <Col>
              <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                <Card.Header>
                  <Image
                    loader={myLoader}
                    src="assets/Ellipse 42 (1).png"
                    alt="Picture of the author"
                    width={35}
                    height={35}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css=
                        {{
                          lineHeight: "$2",
                          fontSize: "$13"
                        }}>
                        <b>Step 1 :</b>  Signup with Nettyfish - Firstly, Sign up
                        with Nettyfish Solutions on Smart SMS login
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Col>
            <Col>
              <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                <Card.Header>
                  <Image
                    loader={myLoader}
                    src="assets/Ellipse 42 (1).png"
                    alt="Picture of the author"
                    width={35}
                    height={35}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css=
                        {{
                          lineHeight: "$2",
                          fontSize: "$13"
                        }}>
                        <b>Step 2 :</b>  Signup with Nettyfish - Firstly, Sign up
                        with Nettyfish Solutions on Smart SMS login
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col>
              <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                <Card.Header>
                  <Image
                    loader={myLoader}
                    src="assets/Ellipse 42 (1).png"
                    alt="Picture of the author"
                    width={35}
                    height={35}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css=
                        {{
                          lineHeight: "$2",
                          fontSize: "$13"
                        }}>
                        <b>Step 3 :</b>  Signup with Nettyfish - Firstly, Sign up
                        with Nettyfish Solutions on Smart SMS login
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Col>
            <Col>
              <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                <Card.Header>
                  <Image
                    loader={myLoader}
                    src="assets/Ellipse 42 (1).png"
                    alt="Picture of the author"
                    width={35}
                    height={35}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css=
                        {{
                          lineHeight: "$2",
                          fontSize: "$13"
                        }}>
                        <b>Step 3 :</b>  Signup with Nettyfish - Firstly, Sign up
                        with Nettyfish Solutions on Smart SMS login
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                <Card.Header>
                  <Image
                    loader={myLoader}
                    src="assets/Ellipse 42 (1).png"
                    alt="Picture of the author"
                    width={35}
                    height={35}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css=
                        {{
                          lineHeight: "$2",
                          fontSize: "$13"
                        }}>
                        <b>Step 3 :</b>  Signup with Nettyfish - Firstly, Sign up
                        with Nettyfish Solutions on Smart SMS login
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Col>
          </Row>
          </div>
        </Container>

      </div>
    </section>
    </>
  );
};

export default Enterprise;