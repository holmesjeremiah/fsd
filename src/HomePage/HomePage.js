import Footer from '../Footer';
import Header from './Header';

//import LoanDetails from './HomePage/LoanDetails';
//import LoanTypes from './HomePage/LoanTypes';
import Nav from '../Nav';
import WhyChooseUs from '../WhyChooseUs';
import Services from '../Services';
import AboutUs from '../AboutUs';


const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#E4EAF1' }}>

            <Nav />
            <div style={{ height: '50px' }}></div>
            <Header />
            <div style={{ height: '50px' }}></div>
            <Services />
            <div style={{ height: '50px' }}></div>
            <WhyChooseUs />
            <div style={{ height: '50px' }}></div>
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;