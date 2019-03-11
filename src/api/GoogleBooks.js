import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.googleapis.com',

	params: {
		key: 'AIzaSyAfgFDb1Z1De2ExIb28W__BHtUczFPSi8w',
		maxResults: '2'
	}
});
