import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { useTranslation } from '../../hooks/useTranslation';

function AboutCounter() {
	useCountUp({ ref: 'experienceCounter', end: 5, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 90, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 4, duration: 2 });
	const { t } = useTranslation('about');

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title={t('counter.experience')}
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title={t('counter.clients')}
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title={t('counter.projects')}
					counter={<span id="projectsCounter" />}
					measurement=""
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
