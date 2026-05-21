function AppFooterCopyright() {
	return (
		<div className="row font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<p
					className="text-indigo-500 dark:text-indigo-400 font-general-medium inline-block mx-1"
				>
					Fabián Andrés Fernández Soto Portfolio
				</p>
				.{' '}All rights reserved.
				<p className="text-sm text-gray-400 mt-1">
					Developed by Fabián Andrés Fernández Soto.
				</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
