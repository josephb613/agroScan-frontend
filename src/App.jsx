// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState('');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3002/qrcode', { data });
//       if (response.status === 200) {
//         // alert('QR Code généré avec succès !');
//         setQrCodeUrl(response.data.qrCodeURL);
//       }
//     } catch (error) {
//       console.error('Erreur lors de la soumission des données :', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Soumettre des données</h1>
//       <textarea
//         className="w-full h-32 border border-gray rounded-md p-2 mb-4"
//         placeholder="Entrez vos données ici..."
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//       ></textarea>
//       <button
//         className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         onClick={handleSubmit}
//       >
//         Soumettre
//       </button>
//       {qrCodeUrl && (
//         <div className="mt-4">
//           <h2>QR Code généré :</h2>
//           <img src={qrCodeUrl} alt="QR Code" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import ProductForm from './components/productForm'

function App() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">information</h1>
      <ProductForm setQrCodeUrl={setQrCodeUrl} />
      {qrCodeUrl && (
        <div className="mt-4">
          <h2>QR Code généré :</h2>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
}

export default App;
