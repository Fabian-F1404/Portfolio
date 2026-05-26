import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useTranslation } from '../../hooks/useTranslation';

const contacts = [
	{
		id: 1,
		name: 'Costa Rica',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'fabfernandez.14@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '(+506) 8687-8118',
		icon: <FiPhone />,
	},
];

function ContactDetails() {
	const { t } = useTranslation('contact');
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{t('contact.detailCaption')}
				</h2>
				<ul>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
