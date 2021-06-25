import route from '../../config/routes';

import { proxy as baseURL } from '../../../package.json';

export function getContactData() {
  return fetch(`${baseURL}${route.contact}`, {
    method: "GET",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(res => res.json())
}
