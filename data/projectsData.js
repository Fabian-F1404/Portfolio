import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'SAS — Sistemas Galileo',
		url: 'erp-web-platform-galileo',
		category: 'Web Application',
		img: '/images/tstudio.png',
		ProjectHeader: {
			title: 'ERP Web Platform — Sistemas Galileo',
			publishDate: 'Jan 2024 – Present',
			tags: 'AngularJS / NodeJS / Oracle',
		},
		ProjectImages: [
			{ id: uuidv4(), title: 'ERP Web Platform', img: '/images/sas.png' },
			{ id: uuidv4(), title: 'ERP Web Platform', img: '/images/sas2.png' },
			{ id: uuidv4(), title: 'ERP Web Platform', img: '/images/sas3.png' },
		],
		ProjectInfo: {
			ClientHeading: 'About the project',
			CompanyInfo: [
				{ id: uuidv4(), title: 'Company', details: 'Sistemas Galileo del Sur' },
				{ id: uuidv4(), title: 'Role', details: 'Software Engineer' },
				{ id: uuidv4(), title: 'Period', details: 'Jan 2024 – Present' },
				{ id: uuidv4(), title: 'Type', details: 'Enterprise Web Application' },
			],
			ObjectivesHeading: 'Overview',
			ObjectivesDetails:
				'Develop, enhance, and maintain a suite of enterprise web applications used across the organization. Responsibilities span frontend development in AngularJS, backend APIs in NodeJS, database optimization on Oracle, and infrastructure deployment using AWS and Docker.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'AngularJS',
						'NodeJS',
						'Oracle',
						'SQL',
						'Docker',
						'AWS',
						'GitLab CI/CD',
						'LDAP',
						'Neo4j Aura',
						'Postman',
					],
				},
			],
			ProjectDetailsHeading: 'Key contributions',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built and maintained AngularJS frontend modules and RESTful NodeJS APIs, improving feature delivery velocity across multiple product teams.',
				},
				{
					id: uuidv4(),
					details:
						'Analyzed and optimized heavy Oracle SQL queries, stored procedures, packages, and scheduled jobs — reducing critical report generation times significantly.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented ETL pipelines using Neo4j Aura for graph-based data transformation and integrated LDAP for centralized user management and access control.',
				},
				{
					id: uuidv4(),
					details:
						'Managed application deployments through GitLab CI/CD pipelines, Docker containers, and AWS infrastructure. Introduced AI-assisted test case generation to improve QA coverage.',
				},
			],
		},
	},
	{
		id: 2,
		title: 'HR Vendor — Procter & Gamble',
		url: 'enterprise-web-pg',
		category: 'Web Application',
		img: '/images/claude.png',
		ProjectHeader: {
			title: 'Enterprise Web Apps — Procter & Gamble',
			publishDate: 'Nov 2022 – Dec 2023',
			tags: 'ASP.NET / C# /Javascript / JQuery / SQL Server',
		},
		ProjectImages: [
			{ id: uuidv4(), title: 'P&G Enterprise App', img: '/images/claude.png' },
			{ id: uuidv4(), title: 'P&G Enterprise App', img: '/images/claude2.png' },
			{ id: uuidv4(), title: 'P&G Enterprise App', img: '/images/claude3.png' },
		],
		ProjectInfo: {
			ClientHeading: 'About the project',
			CompanyInfo: [
				{ id: uuidv4(), title: 'Company', details: 'Procter & Gamble (Remote)' },
				{ id: uuidv4(), title: 'Role', details: 'Software Engineer' },
				{ id: uuidv4(), title: 'Period', details: 'Nov 2022 – Dec 2023' },
				{ id: uuidv4(), title: 'Type', details: 'Enterprise Web Application' },
			],
			ObjectivesHeading: 'Overview',
			ObjectivesDetails:
				'Worked remotely on a global engineering team at P&G, developing and maintaining enterprise-grade internal web tools used across business units. Focus areas included .NET backend development, SQL Server database management, and frontend enhancements with JavaScript and AJAX.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ASP.NET',
						'C#',
						'.NET Core 5',
						'JavaScript',
						'AJAX',
						'SQL Server',
						'Entity Framework',
						'MVVM',
					],
				},
			],
			ProjectDetailsHeading: 'Key contributions',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Developed and enhanced enterprise web applications in ASP.NET and C#, implementing new features based on evolving business requirements across multiple departments.',
				},
				{
					id: uuidv4(),
					details:
						'Analyzed and rewrote complex SQL Server stored procedures, reducing query execution time and improving overall application performance and system reliability.',
				},
				{
					id: uuidv4(),
					details:
						'Created and maintained SQL Server jobs, tables, and procedures to support automated reporting and data processing pipelines used by global operations teams.',
				},
			],
		},
	},
	{
		id: 3,
		title: 'Bbop — 5050 Capital',
		url: 'fintech-frontend-5050-capital',
		category: 'Web Application',
		img: '/images/bbop.png',
		ProjectHeader: {
			title: 'Fintech Frontend Platform — 5050 Capital',
			publishDate: 'Mar 2021 – Oct 2022',
			tags: 'ReactJS / NodeJS / Tailwind',
		},
		ProjectImages: [
			{ id: uuidv4(), title: '5050 Capital Platform', img: '/images/bbop2.png' },
			{ id: uuidv4(), title: '5050 Capital Platform', img: '/images/bbop3.png' },
			{ id: uuidv4(), title: '5050 Capital Platform', img: '/images/bbop4.png' },
		],
		ProjectInfo: {
			ClientHeading: 'About the project',
			CompanyInfo: [
				{ id: uuidv4(), title: 'Company', details: '5050 Capital Company' },
				{ id: uuidv4(), title: 'Role', details: 'Front-End Developer' },
				{ id: uuidv4(), title: 'Period', details: 'Mar 2021 – Oct 2022' },
				{ id: uuidv4(), title: 'Type', details: 'Web Application' },
			],
			ObjectivesHeading: 'Overview',
			ObjectivesDetails:
				'Led frontend development for a fintech web platform, building reusable React component libraries, integrating REST APIs, and implementing authentication flows. Worked closely with designers to translate Figma mockups into responsive, production-ready layouts using Tailwind CSS.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ReactJS',
						'Redux',
						'NodeJS',
						'ExpressJS',
						'Sequelize',
						'Tailwind CSS',
						'JWT / OAuth',
						'GitHub Actions',
						'Figma',
						'Jira / Scrum',
					],
				},
			],
			ProjectDetailsHeading: 'Key contributions',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a scalable component library in ReactJS using hooks and Redux for state management, enabling consistent UI patterns across the platform and accelerating feature development.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented REST API integrations using NodeJS, ExpressJS, and Sequelize, and added OAuth / JWT authentication and authorization to secure user sessions.',
				},
				{
					id: uuidv4(),
					details:
						'Translated Figma designs into pixel-perfect, fully responsive layouts with Tailwind CSS, and set up GitHub Actions CI/CD pipelines to automate testing and deployment.',
				},
				{
					id: uuidv4(),
					details:
						'Collaborated in a Scrum team using Jira for sprint planning, contributing to story grooming, estimations, and retrospectives across a 18-month project lifecycle.',
				},
			],
		},
	},
];
