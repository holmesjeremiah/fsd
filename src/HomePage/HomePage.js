import Footer from '../Footer';
import Header from './Header';

//import LoanDetails from './HomePage/LoanDetails';
//import LoanTypes from './HomePage/LoanTypes';
import Nav from '../Nav';


const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#E4EAF1' }}>

            <Nav />
            <div style={{ height: '50px' }}></div>
            <Header />
            <div style={{ height: '50px' }}></div>
            <div style={{ height: '50px' }}></div>
            <Footer />
        </div>
    );
}

export default HomePage;