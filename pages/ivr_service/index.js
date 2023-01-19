import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import styles from "../../styles/IVR.module.css";
import { Card, Grid, Text } from "@nextui-org/react";

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}
const IVR = (props) => {




    return (
        <section>
            <Head>
        <title>NettyFish - IVR Service </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>IVR Service</p>
                            <p className={styles.breadcrumb}><Link legacyBehavior href="/"><a className={styles.home}>Home</a></Link> &gt;&gt; IVR Service</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Row style={{ borderBottom: "2px solid #97949436" }}>



                    <Col md={12} className={styles.content} >
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
                        {/* <h1 className={styles.heading}>Voice Broadcast</h1> */}
                        <p className={styles.backfont}>IVR - <span>&quot;A self-operating customer assistance made user-friendly&quot;</span></p>
                        <p className={styles.backfontone}>The greatly assembled IVR connection system that presents a magnificent and expert vision of the company, disregarding of the range of the business enterprise.</p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row style={{ borderBottom: "2px solid #97949436" }}>
                        <Col md={6} >


                            <h1 className={styles.heading} >IVR Features</h1>

                            <p className={styles.pera}>IVR stands for <span>Interactive Voice Response</span>.</p>
                            <p className={styles.pera}>It is a Self-Operating administrative solution that connects with customers with a customized salutation while presenting a classification of menus to choose the required query.  </p>
                            <p className={styles.pera}>Nettyfish’s hosted IVR system(IVRS) permits you to customize the service to the customers. </p>

                        </Col>

                        <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                                src="/assets/1653475891_ezgif.com-gif-maker (21).webp"
                                alt="Picture of the author"
                                height={300}
                                width={500}

                                quality={100}
                                priority
                            />

                        </Col>
                    </Row>

                    <Row style={{ borderBottom: "2px solid #97949436" }}>
                        <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                                src="/assets/1653475967_ezgif.com-gif-maker (22).webp"
                                alt="Picture of the author"
                                height={300}
                                width={550}

                                quality={100}
                                priority
                            />

                        </Col>
                        <Col md={6} >


                            <h1 className={styles.heading} >Why IVR is required?</h1>

                            <ul className={styles.ul}>
                                <li>To produce more leads</li>
                                <li>Widening your business brand image</li>
                                <li>Strengthen representative&apos;s output</li>
                                <li>Supervise a wide range of call capacity</li>
                                <li>Render customized know-how</li>
                            </ul>

                        </Col>


                    </Row>

                    <div>

                        <div className={styles.pt_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Benefits of IVR</h2>
                                        <p>There are various benefits to the user to have a well organized communication process with strong solutions to Get your customers on their desired channel by giving them a customised experience.</p>

                                        <ul className={styles.ul}>
                                            <li>CRM association</li>
                                            <li>Reliability</li>
                                            <li>Adaptable</li>
                                            <li>Personalized</li>
                                            <li>24*7 Support</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Steps to Use IVR Service</h2>
                                        <p className={styles.subpera}><span>Step 1 : </span> Signup in voicesms.nettyfish.com and provide your username</p>
                                        <p className={styles.subpera}><span>Step 2 : </span> Choose your desired number from IVR Number list provided by Nettyfish</p>
                                        <p className={styles.subpera}><span>Step 3 : </span> Chosen number will be configured under your user’s name as per your IVR plan</p>
                                        <p className={styles.subpera}><span>Step 4 : </span> Provide flowchart with script, welcome recordings and other recording according to script of the IVR Channels</p>
                                        <p className={styles.subpera}><span>Step 5 : </span> Provide destination mobile numbers or landline</p>
                                        <p className={styles.subpera}><span>Step 6 : </span> Start Using the IVR service</p>
                                        <p className={styles.subpera}><span>Step 7 : </span> Check updated reports with Numbers, Time of call, Call conversation recordings and destinations connected</p>
                                    </Col>
                                </Row>
                            </div> 
                        </div>



                    </div>

                </Container>
            </div>





        </section>
    );
};

export default IVR;