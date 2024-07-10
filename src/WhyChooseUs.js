import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiLineChartDown } from 'react-icons/bi';

const WhyChooseUs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <div style={{ backgroundColor: '#170F6B', display: 'flex', justifyContent: 'center' }} >
            <div className="row container align-items-center justify-content-center" style={{ padding: '25px 0' }}>

                <motion.div
                    className="col-sm-12 col-md-7"
                    style={{ color: 'white', fontSize: '20px', marginBottom: '25px' }}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 1.5 }}
                    ref={ref}
                >

                    <br />


                    <h1 style={{ fontSize: '50px' }}>Contact Us</h1>
                    <p>Ready to give your car the care it deserves? Contact us today to schedule an appointment!</p>
                    <div style={{ marginTop: '20px' }}>
                        <p><strong>Phone:</strong> <a href="tel:19543631256" style={{ color: 'white' }}>1-954-363-1256</a></p>
                    </div>


                </motion.div>
                <div className="col-sm-12 col-md-5">
                    <div style={{ padding: '25px', borderRadius: '10px', color: 'black', fontSize: '30px', backgroundColor: 'white', }}>
                        <div style={{ borderLeft: '3px solid #2E1ED0', paddingLeft: '10px', fontWeight: 'bolder' }}>
                            Why Choose Us?
                        </div>
                        <ul style={{ fontSize: '15px' }}>
                            <li><b>Experienced Professionals:</b> Our team is trained and skilled in the latest detailing techniques.</li>
                            <li><b>High-Quality Products:</b> We use only the best products to ensure long-lasting results.</li>
                            <li><b>Attention to Detail:</b> We treat every car as if it were our own, ensuring meticulous care.</li>
                            <li><b>Customer Satisfaction:</b> Our goal is to exceed your expectations and ensure you leave with a smile.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
