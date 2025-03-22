'use client';
// components
import {Button} from "@/components/ui/button";

// hooks
import useSectionScroll from "@/app/hooks/useSectionScroll";

export default function Home() {
	useSectionScroll()
	
	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">
			{/* Header Section */}
			<section id="header" className="bg-blue-600 text-white py-16 text-center min-h-screen flex flex-col justify-center items-center bg-[url('/background_header.webp')] bg-center bg-cover">
				<h4 className="text-md text-mono font-bold">NATÁLIA PAIN</h4>
				<h3 className="text-md text-mono font-bold">PSICÓLOGA ESPECIALISTA</h3>
				<figure className="w-100 h-100 overflow-hidden border-4 border-white rounded my-6">
					<img src="/perfil.png" alt="Foto da Psicóloga" />
				</figure>
				<h1 className="text-4xl font-special-elite">Vem viver uma vida leve e genuína</h1>
				<p className="mt-4 text-lg text-secondary font-mono">Psicologia especializada e baseada em evidências</p>
				<Button className="mt-6 bg-transparent border-2 border-solid border-secondary text-secondary hover:bg-neutral-50/50 max-w-48 ">SAIBA MAIS</Button>
			</section>
			
			{/* Sobre */}
			<section id="about" className="bg-section-background-bege min-h-screen flex flex-col justify-center items-center text-center">
				<div className="max-w-2xl">
					<h1 className="text-5xl font-special-elite text-primary">Olá, me chamo Natália Pain</h1>
					<h3 className="text-4xl font-special-elite text-secondary">Mas pode me chamar de Nat</h3>
					<p className="mt-4 text-lg text-justify">Sinto-me profundamente apaixonada pela ideia de poder ajudar pessoas a se conhecerem mais e compreenderem melhor aquilo que a levaria a viver uma vida mais plena, equilibrada e feliz. Através de uma psicoterapia atualizada e baseada em evidências você poderá encontrar novas maneiras de interpretar e vivenciar suas emoções e seus relacionamentos, resignificando padrões de comportamento que muitas vezes limitam seu crescimento e impedem de viver uma vida leve e que faça real sentido para você.</p>
				</div>
			</section>
			
			{/* Horários */}
			<section id="schedule" className="bg-section-background-green min-h-screen flex flex-col justify-center items-center text-center">
				<div className="max-w-2xl items-center justify-center">
					<h1 className="text-5xl font-special-elite text-white">Atendimento on-line ou presencial</h1>
					<h1 className="text-4xl font-special-elite text-secondary">De segunda à sábado, das 13h às 20h.</h1>
					<Button className="mt-6 bg-transparent border-2 border-solid border-secondary text-secondary hover:bg-neutral-50/50 max-w-48 ">AGENDE UM HORÁRIO</Button>
				</div>
			</section>
			
			{/* Preços */}
			<section id="prices" className="bg-section-background-bege min-h-screen flex flex-col justify-center items-center text-center">
				<div className="max-w-5xl grid md:grid-cols-2 gap-6">
					<div className="col-span-1">
						<h1 className="text-3xl font-special-elite text-primary-green text-left">
							Sua saúde mental não é um gasto, mas um investimento necessário e inegocável, pois se continuamos presos nos traumas do passado, jamais alcançaremos os sucessos do futuro.
						</h1>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-2 items-center">
							<div className="col-span-1">
								<h1 className="text-2xl font-special-elite text-primary-green text-right">Psicoterapia à partir de R$70,00</h1>
							</div>
							<div className="col-span-1">
								<Button className="bg-transparent border-2 border-solid border-secondary text-primary-green place-self-center hover:bg-primary-green/10 max-w-48 ">SAIBA MAIS</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{/* Serviços */}
			<section className="bg-section-background-green min-h-screen flex flex-col justify-center items-center text-center">
				<div className="max-w-2xl">
					<h2 className="text-3xl text-secondary font-semibold">A abordagem utilizada na nossa psicoterapia será baseada nos estudos mais atuais da ciência psicológica comportamental e aplicados às demandas trazidas por você</h2>
				</div>
				<div className="mt-6 grid md:grid-cols-3 gap-6">
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Terapia Cognitivo-Comportamental</h3>
						<p className="mt-2 text-gray-700">Método eficaz para tratar transtornos de ansiedade e depressão.</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Terapia de Aceitação e Compromisso</h3>
						<p className="mt-2 text-gray-700">Aprenda a lidar com suas emoções e viver de acordo com seus valores.</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Terapia de Aceitação e Compromisso</h3>
						<p className="mt-2 text-gray-700">Aprenda a lidar com suas emoções e viver de acordo com seus valores.</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Terapia Individual</h3>
						<p className="mt-2 text-gray-700">Atendimento personalizado para suas necessidades emocionais.</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Terapia de Casal</h3>
						<p className="mt-2 text-gray-700">Fortaleça seu relacionamento com suporte profissional.</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow">
						<h3 className="text-xl font-bold">Apoio Psicológico</h3>
						<p className="mt-2 text-gray-700">Orientação para lidar com desafios emocionais do dia a dia.</p>
					</div>
				</div>
			</section>
			
			{/* Contato */}
			<section className="py-16 text-center">
				<h2 className="text-3xl font-semibold">Entre em Contato</h2>
				<p className="mt-4 text-lg">Agende uma sessão ou tire suas dúvidas pelo WhatsApp ou E-mail.</p>
				<Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">Fale Conosco</Button>
			</section>
		</div>
	);
}