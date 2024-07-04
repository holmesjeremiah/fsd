import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {

    const services = [
        {
            "title": "Exterior Detailing",
            "description": "Our comprehensive exterior detailing service includes:",
            "services": [
                "Hand wash and dry",
                "Paint decontamination",
                "Clay bar treatment",
                "Polishing and waxing",
                "Tire and wheel cleaning",
                "Trim and chrome restoration"
            ]
        },
        {
            "title": "Interior Detailing",
            "description": "Our meticulous interior detailing service covers:",
            "services": [
                "Vacuuming and dusting",
                "Deep cleaning of upholstery and carpets",
                "Leather cleaning and conditioning",
                "Dashboard and console cleaning",
                "Window cleaning"
            ]
        },
        {
            "title": "Paint Protection",
            "description": "Protect your vehicle's paint with our advanced paint protection solutions:",
            "services": [
                "Ceramic coating",
                "Paint sealants",
                "Clear bra installation"
            ]
        },
        {
            "title": "Additional Services",
            "description": "",
            "services": [
                "Headlight restoration",
                "Engine bay cleaning",
                "Odor removal",
                "Pet hair removal"
            ]
        }
    ];


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
            <div style={{ display: 'flex', justifyContent: 'center', color: 'black', fontWeight: 'bold', fontSize: '30px', marginBottom: '25px', }}><div style={{ borderLeft: '5px solid #2E1ED0', paddingLeft: '10px', }}>Our Services</div> </div>
            <motion.div
                ref={ref}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {
                    services.map((service, index) => (
                        <motion.div
                            key={index}
                            style={{ width: '300px', backgroundColor: 'white', borderRadius: '10px', padding: '25px' }}
                            variants={cardVariants}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: '#2E1ED0', fontWeight: 'bold', fontSize: '25px' }}>
                                    {service.title}
                                </div>
                            </div>
                            <div>
                                {service.description}
                            </div>
                            <ul>
                                {service.services.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default Services;
