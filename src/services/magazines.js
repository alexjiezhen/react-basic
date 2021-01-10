import axios from 'axios';

const API_BASE_URL = 'https://www.ourdaily.co/explore/api/magazines';

const magazines = {
  getMagazines: async () => {
    const results = await axios.get(`${API_BASE_URL}`);
    return results.data.data;
  },
};

export default magazines;
