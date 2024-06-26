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
                    <a class='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="" style={{ color: '#2E1ED0', fontSize: '30px' }}><CgMenuRight /></span>
                    </a>

                    <div class="collapse navbar-collapse" id="navbarToggler">
                        <div></div>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item text-center">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Nav;