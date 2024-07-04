import logo from './logo.png';
import { CgMenuRight } from 'react-icons/cg';
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Nav = () => {
    function scrollToElement(id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <>
            <div style={{ backgroundColor: '#ACA6F2', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

                <div style={{ padding: '10px' }}>
                    <a href="tel:+19549874788" style={{ color: 'black' }}><CiPhone />+1(954)987-4788</a>

                </div>
            </div>
            <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary p-0" style={{ borderBottom: '2px solid #2E1ED0', }}>
                <div class="container " >
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="" style={{ height: '80px' }} />
                    </a>




                </div>
            </nav>
        </>
    );
}

export default Nav;