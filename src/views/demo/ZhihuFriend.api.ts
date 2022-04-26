import axios from 'axios';
import qs from 'query-string';

export default function queryPolicyList(params: any) {
  return axios.get<any>('/api/ZhihuFriend/policy', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}