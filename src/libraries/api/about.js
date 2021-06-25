import route from '../../config/routes';

import { proxy as baseURL } from '../../../package.json';

export function getAboutData() {
  return fetch(`${baseURL}${route.about}`, {
    method: "GET",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(res => res.json())
}
