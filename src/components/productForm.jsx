
import React, { useState } from 'react';
import axios from 'axios';
import ProductFormFields from './ProductFormFields';

function ProductForm({ setQrCodeUrl }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const [producerName, setProducerName] = useState('');
  const [producerAddress, setProducerAddress] = useState('');
  const [producerPhone, setProducerPhone] = useState('');
  const [producerEmail, setProducerEmail] = useState('');
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        description,
        price,
        category,
        producer: {
          name: producerName,
          address: producerAddress,
          phone: producerPhone,
          email: producerEmail
        }
      };
      console.log('Données soumises:', data);
      const response = await axios.post('https://agroscan-pckx.onrender.com/qrcode', { data });
      if (response.status === 200) {
        console.log('QR Code URL reçu:', response.data.qrCodeURL);
        setQrCodeUrl(response.data.qrCodeURL);
        setQrCodeImageUrl(response.data.qrCodeURL);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission des données :', error);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeImageUrl) {
      const link = document.createElement('a');
      link.href = qrCodeImageUrl;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <ProductFormFields
        name={name}
        description={description}
        price={price}
        category={category}
        producerName={producerName}
        producerAddress={producerAddress}
        producerPhone={producerPhone}
        producerEmail={producerEmail}
        setName={setName}
        setDescription={setDescription}
        setPrice={setPrice}
        setCategory={setCategory}
        setProducerName={setProducerName}
        setProducerAddress={setProducerAddress}
        setProducerPhone={setProducerPhone}
        setProducerEmail={setProducerEmail}
      />

      <button
        type="submit"
        className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue"
      >
        Soumettre
      </button>

      {qrCodeImageUrl && (
        <>
          <button
            onClick={downloadQRCode}
            className="bg-green b text-white px-4 py-2 rounded-md hover:bg-green"
          >
            Télécharger QR Code
          </button>
        </>
      )}
    </form>
  );
}

export default ProductForm;

