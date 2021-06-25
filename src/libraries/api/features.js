import route from '../../config/routes';

import { proxy as baseURL } from '../../../package.json';

export function getFeatures() {
  return fetch(`${baseURL}${route.features}`, {
    method: "GET",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(res => res.json())
}
