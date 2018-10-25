import { ApiPath } from 'app/AppConstant';
import { ajax } from 'rxjs/observable/dom/ajax';

export default {
    fetch: () => {
        return ajax({
            url: ApiPath.PROJECT,
            method: 'GET',
            headers: {
                'Authorization': ApiPath.AUTH
            }
        })
    },
    add: (name) => {
        return ajax({
            url: ApiPath.PROJECT,
            method: 'POST',
            headers: {
                'Authorization': ApiPath.AUTH,
                //'X-Request-Id': 'C1A32AED82B2AED1'
            },
            body: {
                name: name
            }
        })
    },
    update: (id, newName) => {
        return ajax({
            url: `${ApiPath.PROJECT}/${id}`,
            method: 'POST',
            headers: {
                'Authorization': ApiPath.AUTH,
                'Content-Type': 'application/json'
            },
            body: {
                name: newName
            }
        })
    },
    delete: (id) => {
        return ajax({
            url: `${ApiPath.PROJECT}/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': ApiPath.AUTH
            }
        })
    }
}