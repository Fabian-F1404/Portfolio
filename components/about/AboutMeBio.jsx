import Image from 'next/image';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function AboutMeBio() {
	const { language, mounted } = useContext(LanguageContext);
	const [bios] = useState({
		en: [
			"I'm a Software Engineer with 5 years of experience building web applications, REST APIs, and SQL-driven systems. I've worked across the full stack — from crafting responsive React and Next.js frontends to designing and optimizing complex database schemas on Oracle and SQL Server. I thrive in agile environments and take pride in writing clean, maintainable code that performs well at scale.",
			"Over my career I've contributed to enterprise platforms at Procter & Gamble, fintech products at 5050 Capital, and ERP systems at Sistemas Galileo del Sur. I'm comfortable across the stack — whether that's implementing CI/CD pipelines with GitHub Actions, deploying services on GitLab, AWS and Docker, or translating Figma designs into pixel-perfect Tailwind layouts.",
			"Software Engineer with experience on different technologies, but strong focus on web development and JavaScript but also working with C#, ASP.NET, SQL and PLSQL language, working in the entire software life cycle. Throughout my job career, I've developed essential competencies such as teamwork, leadership, adaptability, learning quickly, problem solving and I always strive to bring a proactive and results-driven approach to everything I do. I've led projects working hand to hand with users and stakeholders. With my experience I can adapt quickly to any technology even if I don't have enough experience of that.",
		],
		es: [
			"Soy Ingeniero de Software con 5 años de experiencia construyendo aplicaciones web, APIs REST y sistemas impulsados por SQL. He trabajado en todo el stack — desde crear frontends responsivos con React y Next.js hasta diseñar y optimizar esquemas de bases de datos complejos en Oracle y SQL Server. Prospero en ambientes ágiles y me enorgullece escribir código limpio, mantenible y de alto rendimiento a escala.",
			"A lo largo de mi carrera he contribuido a plataformas empresariales en Procter & Gamble, productos fintech en 5050 Capital y sistemas ERP en Sistemas Galileo del Sur. Me siento cómodo en todo el stack — ya sea implementando pipelines CI/CD con GitHub Actions, desplegando servicios en GitLab, AWS y Docker, o traduciendo diseños de Figma en layouts pixel-perfect con Tailwind.",
			"Ingeniero de Software con experiencia en diferentes tecnologías, pero con fuerte enfoque en desarrollo web y JavaScript, además de trabajar con C#, ASP.NET, SQL y lenguaje PLSQL, trabajando en todo el ciclo de vida del software. A lo largo de mi carrera profesional, he desarrollado competencias esenciales como trabajo en equipo, liderazgo, adaptabilidad, aprendizaje rápido, resolución de problemas y siempre me esfuerzo por aportar un enfoque proactivo y orientado a resultados. He liderado proyectos trabajando mano a mano con usuarios y stakeholders. Con mi experiencia puedo adaptarme rápidamente a cualquier tecnología incluso si no tengo suficiente experiencia en esa.",
		],
	});

	if (!mounted) {
		return null;
	}

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.png"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{bios[language].map((bio, idx) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={idx}
					>
						{bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
