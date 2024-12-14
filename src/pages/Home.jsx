import React from 'react';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import Picture from '../assets/PNG/picture.png';
import Button from '../components/GradientButton';
import { goldText } from '../constant/Colors';
import News from '../components/News';
import GreatestHits from '../components/GreatestHits';
import FeaturedVideo from '../components/FeaturedVideo';
import NewsLetter from '../components/NewsLetter';
import About from '../components/About';
import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
import { Typography } from '@mui/material';  // Importing Typography component
import { useMediaQuery } from 'react-responsive';

const Home = () => {

    //mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    //smaller  query
    const isSmallPhone = useMediaQuery({ query: '(max-width: 376px)' });

    //laptop media query
    const isLaptop = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1440px)' });


    return (
        <div>
            <div className='image' id="home"
                style={{
                    paddingTop: isMobile ? '0px' : isLaptop ? '100px' : '100px',
                    height: isSmallPhone ? "105vh":""
                }}
            >
                <motion.div
                    style={{
                        width: isMobile ? "90%" : "80%",
                        margin: isLaptop ? "-5% auto" : "0% auto",
                        paddingBottom: isMobile ? "2rem" : "0rem",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "",
                        justifyContent: isMobile ? "center" : "space-between",
                        alignItems: "center",
                    }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: .5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: isMobile ? "50vh" : "90vh",
                            position: "relative",

                        }}
                    >
                        <img
                            src={Picture}
                            alt="Naa Amamua"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain", // "cover" will ensure the image fills the container fully
                                objectPosition: "center",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "1rem" : "1.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            width: isMobile ? "100%" : "80%",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                            style={{
                                color: "#fff",
                                textTransform: "capitalize",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h2"
                                align="center"
                                style={{
                                    color: "#fff",
                                    fontSize: isSmallPhone ? "3rem" : "",
                                    textAlign: "center",
                                    textTransform: "capitalize",
                                    display: "flex",
                                    gap: isMobile && "1rem",
                                    flexDirection: isMobile ? "row" : "column",
                                }}
                            >
                                Naa 
                                <span style={{ textTransform: "capitalize" }}> Amanua</span>

                            </Typography>
                            <Typography
                                variant="h2"
                                align='center'
                                component="span"
                                sx={{
                                    color: goldText,

                                }}
                            >
                                "Wulomei"
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                            style = {{  }}
                        >
                            <Typography variant="body1" sx={{ textTransform: "none", color: "#fff", textAlign: "center",}}>
                                The official website of the legendary Mary Naa Amanua Dodoo
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                            style = {{paddingBottom: "2rem"}}
                        >
                            <Button text={"Learn More"} width={"200px"} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* --------------------ABOUT */}

            <About />


            {/* --------------------NEWS */}
            <motion.div
                id='news'
                style={{
                    width: "100%",
                }}
            >
                <News />
            </motion.div>

            {/* --------------------GREATEST HITS*/}

            <GreatestHits />


            <FeaturedVideo />



            <Foundation />


            <NewsLetter />
            
           
            <Footer />
        </div>
    );
};

export default Home;