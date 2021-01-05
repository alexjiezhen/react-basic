import axios from 'axios';

const API_BASE_URL = 'https://www.ourdaily.co/explore/api/magazines';

const magazines = (() => {
    function appendImageBaseUrl (imagePath) {
        return `${API_BASE_URL}${imagePath}`;
    }
    function mapResults ({ data: { results = [] } }) {
        return results.map((result) => ({
            ...result,
            backdrop_path: appendImageBaseUrl(result.backdrop_path),
            poster_path: appendImageBaseUrl(result.poster_path),
        }))
    }
    return {
        getMagazines: () => {
            return axios
                .get(`${API_BASE_URL}`).then(mapResults);
        }
    }
})

export default magazines;