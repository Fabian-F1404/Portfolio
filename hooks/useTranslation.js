import { useContext, useMemo } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import en_common from '../public/locales/en/common.json';
import es_common from '../public/locales/es/common.json';
import en_about from '../public/locales/en/about.json';
import es_about from '../public/locales/es/about.json';
import en_projects from '../public/locales/en/projects.json';
import es_projects from '../public/locales/es/projects.json';
import en_contact from '../public/locales/en/contact.json';
import es_contact from '../public/locales/es/contact.json';

const translations = {
	en: {
		common: en_common,
		about: en_about,
		projects: en_projects,
		contact: en_contact,
	},
	es: {
		common: es_common,
		about: es_about,
		projects: es_projects,
		contact: es_contact,
	},
};

export function useTranslation(namespace = 'common') {
	const { language } = useContext(LanguageContext);

	const t = useMemo(() => {
		return (key) => {
			const keys = key.split('.');
			let value = translations[language]?.[namespace];

			for (let k of keys) {
				value = value?.[k];
			}

			return value || key;
		};
	}, [language, namespace]);

	return { t, language };
}
