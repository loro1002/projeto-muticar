import React from 'react';

const QuemSomos = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Seção de Introdução */}
      <header className="bg-primary-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-semibold mb-2 animate-fade-in">Quem Somos</h1>
        <p className="text-lg">Especialistas em Funilaria e Pintura de Veículos em Umuarama/PR</p>
      </header>

      {/* Seção sobre a empresa */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-500">Nossa História</h2>
          <p className="text-lg leading-relaxed mb-6">
            A <span className="font-semibold">Funilaria e Pintura Multi-Car</span> é uma empresa com mais de 10 anos de
            experiência no mercado, especializada em serviços de funilaria e pintura automotiva de alta qualidade.
            Localizada em <span className="font-semibold">Umuarama/PR</span>, nossa missão é garantir a satisfação do
            cliente com serviços rápidos, eficientes e com resultados impecáveis.
          </p>
          <p className="text-lg leading-relaxed">
            Contamos com uma equipe altamente qualificada, utilizando as mais modernas tecnologias e produtos de
            ponta para garantir que seu veículo esteja sempre como novo.
          </p>
        </div>
      </section>

      {/* Seção de valores e missão */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-secondary-500">Nossa Missão e Valores</h2>
          <p className="text-lg mb-6">
            Na Multi-Car, acreditamos em um atendimento humanizado e no compromisso com a qualidade. Nosso objetivo
            é proporcionar ao cliente o melhor serviço de funilaria e pintura automotiva, sempre com transparência e
            respeito. Valorizamos a honestidade, o trabalho bem feito e a confiança que nossos clientes depositam
            em nós.
          </p>
          <p className="text-lg">
            Nossa missão é oferecer um serviço excepcional para que cada cliente se sinta seguro e satisfeito com
            os resultados. Se você procura um trabalho de confiança, conte com a Multi-Car.
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-500">Entre em Contato</h2>
          <p className="text-lg mb-6">
            Estamos localizados em <span className="font-semibold">Umuarama/PR</span>, e prontos para atender você.
            Se tiver alguma dúvida ou quiser solicitar um orçamento, entre em contato conosco através dos canais
            abaixo.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="tel:+5543999999999"
              className="text-lg text-secondary-500 hover:text-primary-500 transition"
            >
              <span className="font-semibold">Ligue para nós:</span> (44)  98447-0051
            </a>
            <a
              href="mailto:contato@multicar.com.br"
              className="text-lg text-secondary-500 hover:text-primary-500 transition"
            >
              <span className="font-semibold">Email:</span> contato@multicarfunilariacom.br
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-primary-500 text-white py-6 text-center">
        <p>&copy; 2025 Funilaria e Pintura Multi-Car - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default QuemSomos;
