// src/pages/ModelDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Ícone de voltar

// 🛑 IMPORTANTE: Em um app real, isso viria de um arquivo separado ou API.
// Para hoje, vamos repetir o array aqui para simular o banco de dados.
import Model1 from "../assets/img/model-1.png";
import Model2 from "../assets/img/model-2.png";
import Model3 from "../assets/img/model-3.png";
import Model4 from "../assets/img/model-4.png";
import Model5 from "../assets/img/model-5.png";
import Model6 from "../assets/img/model-6.png";
import Model7 from "../assets/img/model-7.png";
import Model8 from "../assets/img/model-8.png";
import Model9 from "../assets/img/model-9.png";
import Model10 from "../assets/img/model-10.png";
import Model11 from "../assets/img/fit-model-1.png";
import Model12 from "../assets/img/model-12.png";
// ... Importe as outras se tiver

const allModels = [
  {
  id: 1,
  name: "Ava",
  tag: "Editorial",
  height: "1.78m",
  eyes: "Verdes",
  bio: "Ava destaca-se pelo olhar intenso e pela postura escultural, sendo presença constante em editoriais de moda artística.",
  image: Model1,
},
{
  id: 2,
  name: "Liam",
  tag: "Passarela",
  height: "1.85m",
  eyes: "Castanhos",
  bio: "Com passos firmes e elegância natural, Liam domina as passarelas com um estilo moderno e seguro.",
  image: Model2,
},
{
  id: 3,
  name: "Zara",
  tag: "Comercial",
  height: "1.70m",
  eyes: "Azuis",
  bio: "Versátil e expressiva, Zara adapta-se com facilidade a campanhas de TV, publicidade e lifestyle.",
  image: Model3,
},
{
  id: 4,
  name: "Caius",
  tag: "Fitness",
  height: "1.82m",
  eyes: "Pretos",
  bio: "Caius combina disciplina atlética com presença visual forte, perfeito para marcas esportivas de alto impacto.",
  image: Model4,
},
{
  id: 5,
  name: "Sofia",
  tag: "Editorial",
  height: "1.80m",
  eyes: "Castanhos",
  bio: "Com traços refinados e grande sensibilidade estética, Sofia é escolhida para projetos conceituais e editoriais de moda.",
  image: Model5,
},
{
  id: 6,
  name: "Lanny",
  tag: "Comercial",
  height: "1.74m",
  eyes: "Azuis",
  bio: "Lanny transmite naturalidade e simpatia diante das câmeras, ideal para campanhas que exigem proximidade com o público.",
  image: Model6,
},
{
  id: 7,
  name: "Chloe",
  tag: "Passarela",
  height: "1.78m",
  eyes: "Castanhos",
  bio: "Chloe possui postura impecável e movimento fluido, entregando performances elegantes em desfiles de alta moda.",
  image: Model7,
},
{
  id: 8,
  name: "Sara",
  tag: "Comercial",
  height: "1.74m",
  eyes: "Pretos",
  bio: "Com expressão acolhedora e comunicação visual forte, Sara é presença frequente em campanhas de beleza e lifestyle.",
  image: Model8,
},
{
  id: 9,
  name: "Mia",
  tag: "Editorial",
  height: "1.64m",
  eyes: "Castanhos",
  bio: "Mia traz uma estética minimalista e sofisticada, perfeita para editoriais contemporâneos e retratos artísticos.",
  image: Model9,
},
{
  id: 11,
  name: "Ella",
  tag: "Fitness",
  height: "1.76m",
  eyes: "Pretos",
  bio: "Ella representa força, equilíbrio e energia, destacando-se em produções focadas em performance e bem-estar.",
  image: Model11,
},
{
  id: 12,
  name: "Sora",
  tag: "Editorial",
  height: "1.72m",
  eyes: "Verdes",
  bio: "Sora combina elegância e sensibilidade criativa, aparecendo em editoriais que exploram arte, luz e atmosfera.",
  image: Model12,
},
    

  // Adicione os outros modelos aqui...
];

export default function ModelDetail() {
  // 1. Pegamos o parametro da URL (definido no App.jsx como :modelName)
  const { modelName } = useParams();

  // 2. Buscamos no nosso "Banco de Dados" (array) o modelo com esse nome
  // O toLowerCase() garante que 'Ava' encontre 'ava'
  const model = allModels.find(
    (m) => m.name.toLowerCase() === modelName?.toLowerCase()
  );

  // Se o usuário digitar um nome que não existe na URL
  if (!model) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-display mb-4">Modelo não encontrado</h1>
        <Link to="/models" className="text-velvet-gray underline">
          Voltar para o Casting
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
      {/* Botão Voltar */}
      <Link
        to="/models"
        className="inline-flex items-center text-velvet-gray hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Voltar
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Imagem Grande */}
        <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detalhes */}
        <div className="space-y-8 animate-fade-in-up delay-200">
          <div>
            <h1 className="text-6xl font-display font-bold uppercase">
              {model.name}
            </h1>
            <p className="text-xl text-velvet-gray uppercase tracking-widest mt-2">
              {model.tag}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-8">
            <div>
              <span className="block text-xs uppercase text-velvet-gray mb-1">
                Altura
              </span>
              <span className="text-2xl font-display">{model.height}</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-velvet-gray mb-1">
                Olhos
              </span>
              <span className="text-2xl font-display">{model.eyes}</span>
            </div>
            {/* Você pode adicionar mais medidas aqui (Busto, Cintura, Sapato...) */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Biografia</h3>
            <p className="text-velvet-gray leading-relaxed text-lg">
              {model.bio}
            </p>
          </div>

          <button className="w-full py-4 bg-white text-velvet-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Contratar {model.name}
          </button>
        </div>
      </div>
    </section>
  );
}
