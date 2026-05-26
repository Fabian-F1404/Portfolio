import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';
import { useTranslation } from '../../hooks/useTranslation';

function AboutClients() {
	const [clients, setClients] = useState(clientsData);
	const { t } = useTranslation('about');
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{t('clients.heading')}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;
