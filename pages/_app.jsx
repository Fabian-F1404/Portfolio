import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';

function MyApp({ Component, pageProps }) {
	return (
		<LanguageProvider>
			<AnimatePresence>
				<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
					<UseScrollToTop />
				</div>
			</AnimatePresence>
		</LanguageProvider>
	);
}

export default MyApp;
