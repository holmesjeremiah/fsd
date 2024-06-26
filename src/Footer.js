import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa6'
//import logoAlt from './cfaLogoAlt.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div className='container row' style={{ margin: '25px' }}>


                <div className="col-sm-3" style={{ paddingTop: '25px', }}>

                    <div style={{ paddingLeft: '15px' }}>
                        <div style={{ borderLeft: '2px solid #2E1ED0', paddingLeft: '10px' }}>
                            Address
                        </div>
                        <div style={{ paddingLeft: '15px' }}>

                            <a href="https://g.co/kgs/fTCBJe3" >

                                901 Hillcrest Dr. # 611
                                <br />
                                Hollywood, FL 33021

                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ paddingTop: '25px', }}>

                    <div style={{ paddingLeft: '15px' }}>
                        <div style={{ borderLeft: '2px solid #2E1ED0', paddingLeft: '10px' }}>
                            Quick Links
                        </div>
                        <div style={{ paddingLeft: '15px' }}>

                            <a href="/" style={{ color: '#41628b !important' }}>Home</a>
                            <br />


                        </div>
                    </div>
                </div>


                {
                    /*
                    <div className="col-sm-2" style={{ paddingLeft: '10px', fontSize: '30px', color: '#41628b', display: 'flex', gap: '10px', margin: '25px 0' }}>
                    
                    <a href="https://www.facebook.com/profile.php?id=61560812047498" style={{ color: '#41628b !important', }}>
                    <FaFacebookF />
                    </a>
                    <a href="">
                    <FaInstagram />
                    </a>
                    <a href="">
                    <FaLinkedin />
                    </a>
                    </div>
                 */
                }

                <div className="col-sm-4">

                    <img src={'logoAlt'} alt="" style={{ height: '100px' }} />
                    <div style={{ paddingLeft: '10px' }}>

                        ©2024 Father & Sons Detailing, All Rights Reserved

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer;