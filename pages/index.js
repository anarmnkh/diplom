import Header from '../components/Header';
import Footer from '../components/Footer';
import SalaryInfo from '@/components/SalaryInfo';
import YearsCheckboxes from '@/components/YearsCheckboxes';

const RetirementPage = () => {
  return (
    <div>
      <Header />
      <SalaryInfo />
      <YearsCheckboxes/>
      <Footer />
    </div>
  );
};

export default RetirementPage; 