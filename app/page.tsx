import Image from 'next/image'
import { MessageCircleCode } from "lucide-react";
import { expect } from '@/consts/expect';
import { steps } from '@/consts/steps';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { questions } from '@/consts/questions';
import { NavBar } from './navBar';

export default function Home() {
    return (
        <main className="font-sans max-w-[1440px] mx-auto">
          {/* Header */}
          <NavBar />

          {/* Hero */}
          <section id="inicio" className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-24 bg-gray-100 gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                Terapia online ao seu alcance
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Estamos aqui para ouvir suas angústias com o valor de apenas{" "}
                <span className="font-semibold text-blue-700">R$ 70 Reais</span> por sessão,
                com Profissionais Qualificados!
              </p>
              <a
                href="https://wa.me/5581996597835"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition inline-block text-center"
              >
                AGENDE AGORA
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/woman.png" // Substitua pela imagem real depois
                alt="Terapia online"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </section>
    
          {/* Benefícios */}
          <section className="bg-blue-700 text-white py-16 px-6 lg:px-24 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">
              O que você pode esperar da VitarisX
            </h2>
            <div className="h-1 w-48 bg-gray-300 mx-auto mb-12 rounded-full"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
              {expect.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  {item.icon()}
                  <p className="font-extrabold text-white text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Quem Somos */}
          <section id="quem-somos" className="py-20 bg-gray-100 gap-10">
            <div className='flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row items-center justify-between  bg-white px-6 py-20 w-full lg:px-24 rounded-lg lg:rounded-tl-[400px] shadow-2xl'>
              <div className="lg:w-1/2 ">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Quem somos?</h2>
                <p className="text-gray-700">
                  Quem Somos Na VitarisX, acreditamos que cuidar da mente é essencial para viver bem. Sabemos que a vida pode ser desafiadora e que, muitas vezes, só precisamos de alguém para nos ouvir sem julgamentos. É por isso que estamos aqui.
                  <br /><br />
                  Oferecemos atendimento psicológico 100% online, acessível e sem burocracia, para que você possa falar com um profissional qualificado no conforto da sua casa, quando precisar.
                  <br /><br />
                  Seja ansiedade, estresse, autoestima ou qualquer outra questão, você não precisa enfrentar isso sozinho. Estamos prontos para te ajudar.
                </p>
              </div>
              <div className="w-full lg:w-1/3">
                <Image
                  src="/peaple.png" // Substitua pela imagem real depois
                  alt="Equipe VitarisX"
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
    
          {/* Como Funciona */}
          <section id="como-funciona" className="px-6 py-20 lg:px-24 text-center bg-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Como Funciona?</h2>
            <div className="h-1 w-24 bg-blue-700 mx-auto mb-12 rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between gap-10 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center relative">
                  {/* Linha conectora (não mostra no primeiro item) */}
                  {idx > 0 && (
                    <div className={`absolute top-[9px] h-[4px] rounded-lg ${step.color} w-full -left-[55%] hidden md:block`}></div>
                  )}
                  {/* Linha vertical para layout mobile */}
                  {idx > 0 && (
                    <div className={`absolute h-10 w-[2px] ${step.color} -top-10 md:hidden`}></div>
                  )}
                  {step.icon()}
                  <p className="text-sm text-gray-600">Passo {idx + 1}</p>
                  <p className="text-base font-medium mt-1">{step.name}</p>
                  <p className="text-xs text-blue-700 mt-1">{step.status}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* FAQ */}
          <section className="px-6 py-20 lg:px-24 bg-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
              Dúvidas Frequentes
            </h2>
            <div className="h-1 w-32 bg-blue-700 mx-auto mb-12 rounded-full"></div>
            <div className="mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((question, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-blue-200">
                    <AccordionTrigger className="text-blue-800 hover:text-blue-600 text-lg">
                      {question.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {question.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/5581996597835" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-all hover:scale-110"
            aria-label="Chat no WhatsApp"
          >
            <div className="relative group">
              <MessageCircleCode size={32} />
              <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Fale conosco
              </span>
            </div>
          </a>
        </main>
      );
}
