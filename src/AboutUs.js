import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineHandshake } from "react-icons/md";

const AboutUs = () => {




    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.15
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1, y: 0, transition: {
                duration: 1.25
            }
        }
    };

    return (
        <div className="container mb-5" id="fundingSolutions">
            <div className="row" style={{ display: 'flex', justifyContent: 'center', }}>

                <div className="col-sm-12 col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ padding: '25px', borderRadius: '10px', color: 'black', fontSize: '15px', backgroundColor: 'white' }}>
                        <div style={{ borderLeft: '3px solid #2E1ED0', paddingLeft: '10px', fontSize: '30px', }}>
                            Our Mission
                        </div>
                        Our mission at Father & Son Detailing is to redefine car care through meticulous attention to detail and a passion for excellence. We aim to elevate the driving experience by delivering premium automotive detailing services that not only restore but enhance the beauty and value of every vehicle we service.

                        <br />
                        <br />
                        At the heart of our mission is a dedication to integrity and reliability. We believe in transparency in our processes and recommendations, ensuring that every client receives personalized care tailored to their vehicle’s unique needs. Our team of skilled professionals, fueled by a shared passion for cars and craftsmanship passed down through generations, stands ready to exceed expectations and set new standards in automotive detailing.
                        <br />
                        <br />
                        Join us at Father & Son Detailing, where your car isn’t just a vehicle—it’s a testament to our unwavering commitment to excellence and the artistry of car care."





                    </div>
                </div>
                <div className="col-sm-12 col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
                    <MdOutlineHandshake style={{ fontSize: '200px', margin: 'auto', color: '#2E1ED0' }} />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
