// pages/index.js
import Meteors from './components/ui/Meteors';
import QRCodeGenerator from './components/QRCodeGenerator';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <Meteors number={50} className="absolute inset-0 z-[-1]" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <QRCodeGenerator />
      </div>
    </div>
  );
};

export default HomePage;