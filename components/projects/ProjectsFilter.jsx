import { useTranslation } from '../../hooks/useTranslation';



function ProjectsFilter({ setSelectProject }) {
	const { t } = useTranslation('projects');
	const selectOptions = [
		t('filters.webApplication'),
		t('filters.mobile'),
		t('filters.design')
	];
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
		<option value="all" className="text-sm sm:text-md">
				{t('filters.all')}
			</option>
			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
