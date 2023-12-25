
// export const baseURL = 'https://pixabay.com/api/';
// export const apiKEY = '40320265-ffc4b9bddd432c9e266463445';
// export const params = new URLSearchParams({
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
// });
import axios from 'axios';
import PropTypes from 'prop-types';

const baseURL = 'https://pixabay.com/api/';
const apiKEY = '40392012-08915947b5d4aadebea93b87b';

async function imagesAPI(name, page) {
    const params = new URLSearchParams({
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
    });
    return await axios.get(`${baseURL}?key=${apiKEY}&q=${name}&page=${page}&${params}`)
        .then(response => {
        return response.data.hits;
    });
};

imagesAPI.prorTypes = {
    name: PropTypes.string,
    page: PropTypes.number,
};

export default imagesAPI;