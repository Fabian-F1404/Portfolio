import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { useTranslation } from '../../hooks/useTranslation';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';

// Map project IDs to translation keys
const projectTranslationKeyMap = {
	1: 'sasGalileo',
	2: 'hrVendorPG',
	3: 'bbop',
};

function ProjectSingle(props) {
	const [selectedImage, setSelectedImage] = useState(null);
	const { t } = useTranslation('projects');
	const translationKey = projectTranslationKeyMap[props.project.id];

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				setSelectedImage(null);
			}
		};

		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);

	 const contributions = t(`${translationKey}.keyContributions`, {
	returnObjects: true,
	defaultValue: [],});

	return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
                layout="responsive"
                width={200}
                height={150}
                onClick={() => setSelectedImage(project.img)}
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90%] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {translationKey
                ? t(`${translationKey}.aboutProject`)
                : "About the project"}
            </p>
            <ul className="leading-loose">
              <li
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                key={translationKey}
              >
                <span>{translationKey ? t(`${translationKey}.aboutCompany`) : "Empresa"}: </span>
                <a>
                  {translationKey ? t(`${translationKey}.company`) : "Empresa"}
                </a> <br />
				<span>{translationKey ? t(`${translationKey}.roleD`) : "Rol"}: </span>
                <span>
                  {translationKey ? t(`${translationKey}.role`) : "Rol"}
                </span><br />
				<span>{translationKey ? t(`${translationKey}.periodD`) : "Periodo"}: </span>
                <span>
                  {translationKey ? t(`${translationKey}.period`) : "Periodo"}
                </span><br />
				<span>{translationKey ? t(`${translationKey}.typeD`) : "Tipo"}: </span>
                <span>
                  {translationKey ? t(`${translationKey}.type`) : "Tipo"}
                </span><br />
              </li>
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {translationKey ? t(`${translationKey}.overview`) : "Overview"}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {translationKey ? t(`${translationKey}.overviewDetails`) : "Overview Details"}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {translationKey
                ? t(`${translationKey}.toolsAndTechnologies`)
                : "Tools & Technologies"}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          {/* Key contributions section */}
          {props.project.ProjectInfo.ProjectDetails.length > 1 && (
            <>
              <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mt-8 mb-4">
                {translationKey
                  ? t(`${translationKey}.keyContributionsTitle`)
                  : "Key contributions"}
              </p>
                  <p
                    key={translationKey}
                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                  >
                    {translationKey
                  ? contributions.map((item, index) => (
					<p key={index} className="mb-4">
						{item}
					</p>
				))
                  : "Key contributions"}
                  </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	return {
		props: {
			project: projectsData.filter(
				(project) => project.id === parseInt(id)
			)[0],
		},
	};
}

export default ProjectSingle;
