// src/components/ModelCard.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

// 🛑 IMPORTAÇÕES: SUBSTITUA PELOS NOMES DOS SEUS ARQUIVOS LOCAIS
import Model1 from '../assets/img/model-1.png';
import Model2 from '../assets/img/model-2.png';
import Model3 from '../assets/img/model-3.png';
import Model4 from '../assets/img/model-4.png';
import Model5 from '../assets/img/model-5.png';
import Model6 from '../assets/img/model-6.png';
import Model7 from '../assets/img/model-7.png';
import Model8 from '../assets/img/model-8.png';
import Model9 from '../assets/img/model-9.png';
import Model10 from '../assets/img/model-10.png';
import Model11 from '../assets/img/fit-model-1.png';
import Model12 from '../assets/img/model-12.png';
// Fim das importações de assets

// Mapeamento para associar a tag de dados à imagem importada
const imageMap = {
    // Estas chaves devem bater com o que você colocou no array 'featuredModels' em Home.jsx
    'url_ava': Model1,
    'url_liam': Model2,
    'url_zara': Model3,
    'url_caius': Model4,
    'url_sofia': Model5,
    'url_lanny': Model6,
    'url_chloe': Model7,
    'url_sara': Model8,
    'url_mia': Model9,
    'url_lucas': Model10,
    'url_ella': Model11,
    'url_sora': Model12,
}

// 🛑 AQUI ESTÁ A CORREÇÃO: Usamos 'modelName' para evitar conflito com 'window.name'.
export default function ModelCard({ modelName, tag, image }) {
    const cardRef = useRef(null);

    // O ScrollTrigger vai animar o card quando ele entrar no viewport
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { opacity: 0, y: 100 }, // Começa invisível e baixo
                {
                    opacity: 1, 
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current, // O gatilho é o próprio card
                        start: "top 85%",      // Animação começa quando o topo do card atinge 85% do viewport
                        toggleActions: "play none none none", // Roda apenas uma vez
                        // markers: true, // Útil para depuração!
                    },
                    // Limpa as transformações ao final para evitar o 'jump' e o 'shift'
                    clearProps: "transform, opacity" 
                }
            );
        }, cardRef);

        // Limpa o contexto do GSAP quando o componente é desmontado
        return () => ctx.revert();
    }, [modelName]); // Dependência em modelName (prop) é usada para re-rodar se o modelo mudar

    // Verifica se a chave existe no mapeamento ou usa um placeholder seguro
    const srcImage = imageMap[image] || 'https://via.placeholder.com/600x800.png?text=Placeholder';


    return (
        <Link 
            // O link aponta para uma rota dinâmica (que usaremos depois)
            to={`/models/${modelName.toLowerCase()}`} 
            ref={cardRef} 
            className="group block overflow-hidden relative cursor-pointer"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img 
                    src={srcImage} 
                    alt={`Modelo ${modelName}`} 
                    // Animação de zoom sutil no hover (apenas CSS/Tailwind)
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
                />
            </div>
            
            {/* Overlay de Informação (Título e Tag) */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-display font-semibold uppercase">{modelName}</h3>
                <p className="text-velvet-gray/80 text-sm tracking-widest uppercase mt-1">{tag}</p>
            </div>
        </Link>
    );
}