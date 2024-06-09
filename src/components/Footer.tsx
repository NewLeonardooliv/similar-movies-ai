import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Este projeto utiliza inteligência artificial para encontrar filmes e séries similares aos que você pesquisar. Por favor, note que podem ocorrer erros durante o uso.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
