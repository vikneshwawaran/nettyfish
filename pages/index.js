import { Container, Row, Col, Card, Button } from "reactstrap"
import CountUp from "react-countup";
import { TiTick } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgFormatLeft } from "react-icons/cg";
import styles from "../styles/Home.module.css"
import Head from "next/head"
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}
const Home = () => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
            </Head>
            <div>


                <div className={styles.banner}>

                    <Container>
                        <div>
                            <Row className="banner-row">

                                <Col md={6}>
                                    <div style={{ alignSelf: "center" }}>
                                        <div style={{ marginTop: "20px" }}>
                                            <h1>Create Interaction
                                                Using Our Multi-Channel Messaging Platform</h1>
                                            <p className={`${styles['sub-para']}`}>Create seamless customer experience using automation of transaction notifications in multiple channel all at once</p>

                                            <form className="d-flex">
                                                <input className={`${styles['form-control']} form-control me-2`} type="search" placeholder="Enter Your Email" aria-label="Search" />
                                                <button className={`${styles['btn-outline-success']} ${styles['sea-btn']} btn btn-outline-success sea-btn`} type="submit">Lets Talk</button>
                                            </form>

                                        </div>
                                    </div>
                                </Col>


                                <Col md={6} >
                                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                                        <Image
                                            loader={myLoader}

                                            src="/assets/Groupg.png"
                                            alt="Picture of the author"
                                            width={360}
                                            height={400}
                                        />
                                    </div>

                                </Col>

                            </Row>

                        </div>

                    </Container>


                </div>



                {/* business worldwide */}

                <div className={styles.business}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4" style={{ alignSelf: "center" }}>
                                <div>
                                    <p className={`${styles['business-p']}`}>Trusted by over 100+ businesses worldwide!</p>
                                </div>

                            </div>

                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <p className={styles.countno}><CountUp end={300} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>More revenues for the brand</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <p className={styles.countno}><CountUp end={2300} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>Brands Tied up across Globe</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <p className={styles.countno}><CountUp end={4309} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>brands work with us</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <p className={styles.countno}><CountUp end={29620} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>Happy Clients</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* aboutus */}

                <div className={styles.aboutus}>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6">
                                <div className={`${styles['about-img']}`} style={{ marginTop: "20px" }}>

                                    <Image
                                        loader={myLoader}
                                        src="/assets/aboutus.png"
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div style={{ marginTop: "20px" }}>
                                    <h1>Scale-up your Business using AI-Powered Omnichannel</h1>
                                    <p className={`${styles['sub-para']}`}>Automate reminders, offers, delivery updates using business WhatsApp chatbot. WACTO WhatsApp chatbot facilitates multi-agent inbox with 24*7 sales and support by configuring auto-response chatbot flows.
                                        <br></br><br></br>
                                        Build no-code chatbot flows using keyword inputs that creates intelligent bot for business. Customers get engaged and feel like communicating with real person . WACTO Business API has user-friendly chat interface for agents to interupt bot and chat with customers. You can get a free 1000 conversations every month on business whatsapp API.</p>
                                </div>

                                <div>

                                    <Image
                                        loader={myLoader}
                                        src="/assets/playicon.png"
                                        alt="Picture of the author"
                                        width={6}
                                        height={6}
                                        priority
                                    />
                                    <span className={`${styles['read-about']}`}>Read About Us</span>
                                    <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>




                {/* products */}

                <div className={`${styles['products']}`}>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-6">
                                <div style={{ marginTop: "20px" }}>
                                    <h1>Products & Solutions</h1>
                                    <p className={`${styles['sub-para']}`}>Our digital marketing experts follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Digital marketing services today and let us help you boost your customer acquisition and retention rates.</p>
                                </div>


                                <div>

                                    <div className={`${styles['title-solution']}`}>
                                        <ul>
                                            <li>
                                                <p>
                                                    <CgFormatLeft />
                                                    <span className={`${styles['title-solution']}`}> Whatsapp Business Solutions</span>
                                                    <span>
                                                        <Image
                                                            loader={myLoader}
                                                            src="/assets/play1.png"
                                                            alt="Picture of the author"
                                                            width={50}
                                                            height={50}
                                                            priority
                                                        />
                                                    </span>
                                                </p>

                                            </li>
                                            <li> <p><CgFormatLeft /> <span className={`${styles['title-solution']}`}> AI Powered - Cloud CRM</span> <span>
                                                <Image
                                                    loader={myLoader}
                                                    src="/assets/play1.png"
                                                    alt="Picture of the author"
                                                    width={50}
                                                    height={50}
                                                    priority
                                                />
                                            </span></p>

                                            </li>
                                            <li> <p><CgFormatLeft /> <span className={`${styles['title-solution']}`}> RCS- Next generation of SMS</span> <span>
                                                <Image
                                                    loader={myLoader}
                                                    src="/assets/play1.png"
                                                    alt="Picture of the author"
                                                    width={50}
                                                    height={50}
                                                    priority
                                                />
                                            </span></p>

                                            </li>

                                        </ul>

                                    </div>

                                </div>






                            </div>

                            <div className="col-md-6">

                                <div>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/whatsapp.png"
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        priority
                                    />

                                </div>

                            </div>


                        </div>


                    </div>



                </div>








                {/* smarter */}

                <div className={`${styles['smarter']}`}>

                    <div className="container">

                        <p className={`${styles['sub-head']}`}>Just 3 Steps</p>
                        <h1 className={`${styles['h1-1']}`}>Make it Smarter</h1>

                        <div className={`${styles['widddth']}`}>
                            <div className="row">

                                <div className="col-md-12">

                                    <p className={`${styles['fulldash']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}> Login the Dashboard</span></p>

                                </div>

                                <div className="col-md-12">
                                    <div>
                                        <p className={`${styles['fulldash1']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}> Send SMS URL & Attachment
                                        </span></p>
                                    </div>
                                </div>

                                <div className="col-md-12">

                                    <p className={`${styles['fulldash2']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}>Track Campaign Metrics
                                    </span></p>

                                </div>



                            </div>

                        </div>



                        <div className={`${styles['smarter1']}`}>

                            <div className="row">

                                <div className="col-md-6">
                                    <div style={{ marginTop: "20px" }}>
                                        <h1 className={`${styles['h1-2']}`}>Automate Business WhatsApp Conversations with AI Chatbot</h1>
                                        <p className={`${styles['sub-para']}`}>Experience the human-like realtime conversation by creating no-code chat not workflow to improve customer service</p>
                                        <button type="button" className={`${styles['freedemo']} btn btn-primary`}>View Pricing</button>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div>
                                        <Image
                                            loader={myLoader}
                                            className={`${styles['chatbot']} imm chatbot`}
                                            src="/assets/chatbot.png"
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            priority
                                        />

                                    </div>
                                </div>

                            </div>


                        </div>







                    </div>



                </div>






                {/* solutions */}

                <div className={`${styles['solutions']}`}>

                    <div className="container">
                        <h1>Nettyfish Solutions</h1>
                        <p className={`${styles['sub-head']}`}>Whats heppening around the World.</p>
                        <div className="row">

                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>

                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21 (3).png"
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>Solutions</p>

                                        <h5 className={`${styles['card-title']}`}>Digital Marketing</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>

                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21 (4).png"
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>CRM</p>

                                        <h5 className={`${styles['card-title']}`}>Solutions for Business</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21 (5).png"
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                        priority
                                    />

                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>SMS</p>

                                        <h5 className={`${styles['card-title']}`}>RCS- Next generation of SMS</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>




                        </div>

                    </div>

                </div>






                {/* integration */}
                <div className={`${styles['aboutus']} ${styles['integration']} aboutus integration`}>

                    <div className="container">

                        <div className="row">



                            <div className="col-md-6">

                                <div style={{ marginTop: "20px" }}>
                                    <h1>Integration</h1>
                                    <p className={`${styles['sub-para']}`}>I run Nettyfish Solutions. We&quot;ve been working on a product that helps you automate the process of sending transaction notifications to end users in your business, so they can get connected to the company&quot;s digital presence more easily.
                                        <br></br><br></br>
                                        If you&quot;re interested in using our product, we&quot;d love to have you join us at a meetup or join our community online. You can sign up directly through the website.
                                        <br></br><br></br>
                                        We hope you&quot;ll find value in our product!</p>
                                </div>

                                <div>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/play1.png"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        priority
                                    />

                                    <span className={`${styles['read-about']}`}>Read About Us</span>
                                    <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className={`${styles['about-imgz']}`} style={{ marginTop: "20px" }}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/group.png"
                                        alt="Picture of the author"
                                        width={700}
                                        height={700}
                                        priority
                                    />

                                </div>
                            </div>


                        </div>

                    </div>


                </div>





                {/* aboutus 2 */}

                <div className={`${styles['aboutus']}`}>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6">
                                <div className={`${styles['about-imgz']}`} style={{ marginTop: "20px" }}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/phone-img.png"
                                        alt="Picture of the author"
                                        width={400}
                                        height={300}
                                        priority
                                    />

                                </div>
                            </div>

                            <div className="col-md-6">

                                <div style={{ marginTop: "20px" }}>
                                    <h1>About Us</h1>
                                    <p className={`${styles['sub-para']}`}>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
                                </div>

                                <div>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/playicon.png"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        priority
                                    />

                                    <span className={`${styles['read-about']}`}>Read About Us</span>
                                    <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>



                {/* updates */}

                <div className={`${styles['updates']}`}>

                    <div className="container">
                        <h1>Our Latest Updates</h1>
                        <p className={`${styles['sub-head']}`}>Whats heppening around the World.</p>
                        <div className="row">

                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21.png"
                                        alt="Picture of the author"
                                        width={356}
                                        height={400}
                                        priority
                                    />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']}`}>
                                        <p>JUL 22,2022</p>
                                        <h5 className={`${styles['card-title']}`}>How to Use SMS Marketing to Grow Your Ecommerce Business?</h5>

                                        <p className={`${styles['card-text']}`}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>




                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21 (1).png"
                                        alt="Picture of the author"
                                        width={356}
                                        height={400}
                                        priority
                                    />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']}`}>
                                        <p>JUL 22,2022</p>
                                        <h5 className={`${styles['card-title']}`}>How to Use SMS Marketing to Grow Your Ecommerce Business?</h5>

                                        <p className={`${styles['card-text']}`}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>




                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/Rectangle 21 (2).png"
                                        alt="Picture of the author"
                                        width={356}
                                        height={400}
                                        priority
                                    />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']} card-body`}>
                                        <p>JUL 22,2022</p>
                                        <h5 className={`${styles['card-title']}`}>How to Use SMS Marketing to Grow Your Ecommerce Business?</h5>

                                        <p className={`${styles['card-text']}`}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className={`${styles['text-center']} col-md-12 text-center`}>
                                <div style={{ marginTop: "25px" }}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/play1.png"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        priority
                                    />

                                    <span className={`${styles['read-about']}`}>View More</span>
                                    <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                </div>
                            </div>




                        </div>

                    </div>

                </div>




            </div>






        </>
    );
};
export default Home;