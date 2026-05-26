import { createContext, useState, useEffect } from 'react';
import en from '../public/locales/en/common.json';
import es from '../public/locales/es/common.json';

export const LanguageContext = createContext();

const translations = { en, es };

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState('en');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Get language from localStorage or browser language
		const saved = localStorage.getItem('language');
		if (saved) {
			setLanguage(saved);
		} else {
			const browserLang = navigator.language.split('-')[0];
			setLanguage(['en', 'es'].includes(browserLang) ? browserLang : 'en');
		}
		setMounted(true);
	}, []);

	const changeLanguage = (lang) => {
		if (['en', 'es'].includes(lang)) {
			setLanguage(lang);
			localStorage.setItem('language', lang);
		}
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, mounted }}>
			{children}
		</LanguageContext.Provider>
	);
}
