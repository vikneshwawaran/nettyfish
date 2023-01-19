import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Head from 'next/head'
import styles from "../styles/Footer.module.css";





export default function footer() {



    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
            </Head>
            <div className={`${styles['footer-all']}`}>

                <div className={`${styles['footer']}`}>

                    <Container>

                        <div className={`${styles['bor-bot']}`}>
                            <Row>

                                <Col md={3}>
                                    <h4>Products</h4>
                                    <ul>
                                        <li><a href='#'>Enterprise sms</a></li>
                                        <li><a href='#'>Smart url tracking</a></li>
                                        <li><a href='#'>Cloud telephony-ai-autodialer</a></li>
                                        <li><a href='#'>Missed call</a></li>
                                        <li><a href='#'>Virtual mobile number</a></li>
                                        <li><a href='#'>Obd calls</a></li>
                                        <li><a href='#'>Voice key input</a></li>
                                        <li><a href='#'>Ivr</a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Solutions</h4>
                                    <ul>
                                        <li><a href='#'>Advertising agencies</a></li>
                                        <li><a href='#'>Automobiles</a></li>
                                        <li><a href='#'>Bfsi</a></li>
                                        <li><a href='#'>Community</a></li>
                                        <li><a href='#'>Consultancy</a></li>
                                        <li><a href='#'>E-commerce</a></li>
                                        <li><a href='#'>Education</a></li>
                                        <li><a href='#'>Electrical & electronics</a></li>
                                        <li><a href='#'>Food & beverages</a></li>

                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Digital Marketing</h4>
                                    <ul>
                                        <li><a href='#'>We sms marketing</a></li>
                                        <li><a href='#'>WhatsApp broadcast</a></li>
                                        <li><a href='#'>Email marketing</a></li>
                                        <li><a href='#'>SEO</a></li>
                                        <li><a href='#'>Instagram  </a></li>
                                        <li><a href='#'>Linked-in</a></li>
                                        <li><a href='#'>YouTube </a></li>
                                        <li><a href='#'>Google ads </a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Become a Partner</h4>
                                    <ul>
                                        <li><a href='#'>Partner with Us</a></li>

                                    </ul>
                                </Col>

                            </Row>

                        </div>

                        <div>
                            <div className={`${styles['footercopy']} col-md-12 text-center`}>
                                <p className={`${styles['menu']}`}>
                                    <a href="#">Legal</a>
                                    <a href="#">Privacy</a>
                                    <a href="#">Press & Media</a>
                                    <a href="#">Signal</a>
                                    <a href="#">Investors</a>
                                    <a href="#">Jobs</a>
                                </p>
                            </div>

                            <p className={`${styles['copyright']}`}>2022@NettyfishSolutions</p>

                        </div>

                    </Container>
                </div>


            </div>






        </>

    );

}