import React, { useState, useEffect } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import headerPhoto from '../logo.png';
//import HowItWorksModal from './HowItWorksModal';

const Header = () => {
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const listControls = useAnimation();
    const imageControls = useAnimation();
    const [listRef, listInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const [imageRef, imageInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    useEffect(() => {
        const handleResize = () => {
            setDeviceIsMobile(window.innerWidth <= 1000);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (listInView) {
            listControls.start('visible');
        } else {
            listControls.start('hidden');
        }
    }, [listControls, listInView]);

    useEffect(() => {
        if (imageInView) {
            imageControls.start('visible');
        } else {
            imageControls.start('hidden');
        }
    }, [imageControls, imageInView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.75,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, x: 0, transition: {
                duration: 1.25
            }
        }
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }} >
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div style={{ fontSize: deviceIsMobile ? '30px' : '50px', lineHeight: '1', paddingBottom: '10px' }}>
                        Your Premier Destination for  <span style={{ color: '#2E1ED0', fontSize: deviceIsMobile ? '60px' : '80px', fontWeight: '600' }}>Professional </span><br /><span style={{ fontSize: deviceIsMobile ? '40px' : '70px', }}>Car Detailing!</span>
                    </div>
                    <div>
                        At Father & Son Detailing, we take pride in offering top-notch car detailing services to keep your vehicle looking pristine. Our team of experienced professionals uses the latest techniques and high-quality products to deliver exceptional results, ensuring your car always looks its best.
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <button style={{ margin: '25px 0', backgroundColor: '#2E1ED0', color: 'white', padding: '10px 10px', borderRadius: '20px' }}>
                                Book Now!
                            </button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6" style={{ display: 'flex', overflow: 'clip' }}>
                    <motion.img
                        src={headerPhoto}
                        className="img-fluid"
                        alt=""
                        style={{ objectFit: 'contain', borderRadius: '10px', width: '100%' }}
                        initial="hidden"
                        animate={imageControls}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 1.5 }}
                        ref={imageRef}
                    />
                </div>
            </div>
            {
                //<HowItWorksModal show={showModal} handleClose={handleCloseModal} />

            }
        </div>
    );
};

export default Header;
