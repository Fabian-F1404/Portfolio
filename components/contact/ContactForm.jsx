import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useState } from 'react';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [loading, setLoading] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSubmitStatus('');

		try {
			const response = await fetch('/api/send-contact-message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: ''
				});
			} else {
				setSubmitStatus('error');
				console.error('Error:', data.error);
			}
		} catch (error) {
			setSubmitStatus('error');
			console.error('Error sending message:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.name}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={handleChange}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>

					{submitStatus === 'success' && (
						<div className="mt-6 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
							Message sent successfully! We'll get back to you soon.
						</div>
					)}

					{submitStatus === 'error' && (
						<div className="mt-6 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-md">
							Failed to send message. Please try again.
						</div>
					)}

					<div className="mt-6">
						<button 
							type="submit"
							disabled={loading}
							className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
							aria-label="Send Message"
						>
							<Button
								title={loading ? "Sending..." : "Send Message"}
								type="submit"
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
