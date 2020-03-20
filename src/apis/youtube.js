import axios from 'axios';

const KEY = 'AIzaSyC6xJ00vxTfwWmTv6GBNXW3hkevmI0m-Lw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
