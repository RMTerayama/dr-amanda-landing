import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div
      id="scroll-container"
      className="min-h-screen w-full overflow-x-hidden font-sans text-neutral bg-white scroll-smooth relative"
    >
      <a href="#conteudo-principal" className="skip-link">Pular para o conteúdo</a>
      <main id="conteudo-principal" tabIndex="-1" className="w-full pb-24 md:pb-0">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

