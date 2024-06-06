import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ setQrCodeUrl }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const [producerName, setProducerName] = useState('');
  const [producerAddress, setProducerAddress] = useState('');
  const [producerPhone, setProducerPhone] = useState('');
  const [producerEmail, setProducerEmail] = useState('');

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
        setQrCodeUrl(response.data.qrCodeURL);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission des données :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du produit</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Prix</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Catégorie</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={producerName}
          onChange={(e) => setProducerName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Adresse du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={producerAddress}
          onChange={(e) => setProducerAddress(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Téléphone du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={producerPhone}
          onChange={(e) => setProducerPhone(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email du producteur</label>
        <input
          type="email"
          className="mt-1 block w-full border border-gray rounded-md p-2"
          value={producerEmail}
          onChange={(e) => setProducerEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Soumettre
      </button>
    </form>
  );
}

export default ProductForm;

