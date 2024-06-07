"use client"
import { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '../components/ui/Button';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [showInput, setShowInput] = useState(true);

  const generateQRCode = () => {
    if (link.trim() !== '') {
      setQRCodeData(link);
      setShowInput(false);
    }
  };

  const resetQRCode = () => {
    setQRCodeData('');
    setShowInput(true);
    setLink('');
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      
      {showInput && (
        <input
          type="text"
          placeholder="Enter Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ color: 'black' }}
          className="border p-2 mb-4 dark:bg-gray-800 dark:text-black"
        />
      )}
      
      {showInput && (
        <Button
          onClick={generateQRCode}
          className="bg-sky-950/70 text-white font-bold py-5 px-100 rounded"
        >
          Generate QR Code
        </Button>
      )}
      
      {qrCodeData && (
        <div className="flex flex-col items-center">
          <QRCode id="qrcode" value={qrCodeData} size={256} />
          <div className="mt-4 flex">
            <button
              onClick={resetQRCode}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Generate New QR Code
            </button>
            <button
              onClick={downloadQRCode}
              className="bg-sky-900 text-white font-bold py-2 px-4 rounded"
            >
              Download QR Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
