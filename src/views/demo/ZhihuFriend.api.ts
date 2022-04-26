import axios from 'axios';
import qs from 'query-string';

export default function pageZhihuFriend(params: any) {
  return axios.get<any>('/api/ZhihuFriend/page', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}
