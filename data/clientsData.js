import { v4 as uuidv4 } from 'uuid';

// Import images
import FiftyImage from '../public/images/brands/Fifty.png';
import ProcterImage from '../public/images/brands/Procter.png';
import InfotreeImage from '../public/images/brands/Infotree.png';
import GalileoImage from '../public/images/brands/Galileo.png';

export const clientsHeading = 'Companies I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: '5050 Capital',
		img: FiftyImage,
	},
	{
		id: uuidv4(),
		title: 'Procter & Gamble',
		img: ProcterImage,
	},
	{
		id: uuidv4(),
		title: 'Infotree Global Solutions',
		img: InfotreeImage,
	},
	{
		id: uuidv4(),
		title: 'Sistemas Galileo del Sur',
		img: GalileoImage,
	},
];
