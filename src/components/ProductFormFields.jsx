// ProductFormFields.js
import React from 'react';

function ProductFormFields({
  name,
  description,
  price,
  category,
  producerName,
  producerAddress,
  producerPhone,
  producerEmail,
  setName,
  setDescription,
  setPrice,
  setCategory,
  setProducerName,
  setProducerAddress,
  setProducerPhone,
  setProducerEmail
}) {
  return (
    <div className="space-y-4 bg-green border">
      <div>
        <label className="block border text-sm font-medium text-gray">Nom du produit</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Description</label>
        <textarea
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Prix</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Catégorie</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Nom du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={producerName}
          onChange={(e) => setProducerName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Adresse du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={producerAddress}
          onChange={(e) => setProducerAddress(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Téléphone du producteur</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={producerPhone}
          onChange={(e) => setProducerPhone(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray">Email du producteur</label>
        <input
          type="email"
          className="mt-1 block w-full border border-gray rounded-md p-2 focus:outline-none focus:border-blue"
          value={producerEmail}
          onChange={(e) => setProducerEmail(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProductFormFields;
