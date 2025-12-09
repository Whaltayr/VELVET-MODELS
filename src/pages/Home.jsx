// src/pages/Home.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelCard from "../components/ModelCard";
import {Link} from 'react-router-dom'
// Ajuste o nome do arquivo se for diferente do 'hero-model.jpg'
import heroImage from "../assets/img/hero-model.webp";

gsap.registerPlugin(ScrollTrigger);
// Este array deve ficar DENTRO de Home.jsx, logo ANTES da função export default
const featuredModels = [
  { id: 1, name: "Ava", tag: "Editorial", image: "url_ava" },
  { id: 2, name: "Liam", tag: "Passarela", image: "url_liam" },
  { id: 3, name: "Zara", tag: "Comercial", image: "url_zara" },
  { id: 4, name: "Caius", tag: "Fitness", image: "url_caius" },
];
// NOTA: Vamos substituir 'url_para_img_x' por importações reais depois!

export default function Home() {
  //usamos ref para dar nomes oas elementos HTML que o GSAP vai manipular
  const heroRef = useRef(null);

  //O useLayoutEffect garante que o códgo  GSAP rode antes do navegador pintar a tela
  useLayoutEffect(() => {
    //o contexto context ajuda a limmpar a animaçoes do gsap quando componente sai da tela
    let ctx = gsap.context(() => {
      // 1. Animação da Imagem: Começa 100% transparente (opacity: 0) e desliza para cima (y: 100), depois aparece.
      gsap.from(".hero-image", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        clearProps: "transform, opacity", // <--- ADICIONE AQUI
      });
      // 2. Animação do Título: Atraso (delay) para começar depois da imagem, e um efeito de fade-in.
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5, //começa meio segundo deposi da imagem
        clearProps: "transform, opacity", // <--- ADICIONE AQUI
      });
    }, heroRef); //aplica o contexto no container principal
    return () => ctx.revert(); //reverte as animaçoes ao  desmontar os componentes
  }, []);

  return (
    <>
      <section
        ref={heroRef} // Conectamos o useRef ao elemento principal
        className="min-h-[90vh] flex flex-col overflow-hidden  items-center justify-center px-4 pt-16"
      >
        {/* Imagem Placeholder (Unsplash) */}
        <div className="w-full max-w-5xl overflow-hidden rounded-lg shadow-2xl mb-12 hero-image">
          <img
            src={heroImage}
            alt="Modelo em destaque"
            className="w-full h-[60vh] object-cover"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-center uppercase hero-title">
          VELVET
        </h1>
        <p className="text-xl md:text-2xl mt-4 tracking-widest uppercase text-velvet-gray hero-title">
          Elegância em Movimento.
        </p>
      </section>

      {/* SEÇÃO 2: MODELOS EM DESTAQUE */}
      <section className="py-20 md:py-32 px-4 container mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 md:mb-20 text-center uppercase tracking-wider">
          Modelos em Destaque
        </h2>

        {/* Grid dos Modelos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featuredModels.map((model) => (
            <ModelCard
              key={model.id}
              modelName={model.name}
              tag={model.tag}
              image={model.image}
            />
          ))}
        </div>

        {/* Botão para ver todos */}
        <div className="text-center mt-16">
          <Link
            to="/models"
            className="inline-block py-3 px-8 border border-velvet-gray/50 text-velvet-white uppercase tracking-widest hover:bg-velvet-gray/20 transition-colors duration-300"
          >
            Ver todo o Casting
          </Link>
        </div>
      </section>
    </>
  );
}
