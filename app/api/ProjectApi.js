import * as ApiConstants from './Constants';
import { ajax } from 'rxjs/observable/dom/ajax';

export default {
    fetch: () => {
        return ajax({
            url: ApiConstants.PROJECT_URL,
            method: 'GET',
            headers: {
                'Authorization': ApiConstants.AUTH
            }
        })
    },
    add: (name) => {
        return ajax({
            url: ApiConstants.PROJECT_URL,
            method: 'POST',
            headers: {
                'Authorization': ApiConstants.AUTH,
                //'X-Request-Id': 'C1A32AED82B2AED1'
            },
            body: {
                name: name
            }
        })
    },
    update: (id, newName) => {
        return ajax({
            url: `${ApiConstants.PROJECT_URL}/${id}`,
            method: 'POST',
            headers: {
                'Authorization': ApiConstants.AUTH,
                'Content-Type': 'application/json'
            },
            body: {
                name: newName
            }
        })
    },
    delete: (id) => {
        return ajax({
            url: `${ApiConstants.PROJECT_URL}/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': ApiConstants.AUTH
            }
        })
    }
}