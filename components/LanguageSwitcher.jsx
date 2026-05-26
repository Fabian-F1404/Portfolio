import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<div className="flex gap-2 items-center">
			{['en', 'es'].map((lang) => (
				<button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`px-3 py-1 rounded text-sm font-medium transition ${
						language === lang
							? 'bg-blue-500 text-white'
							: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
					}`}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	);
}
