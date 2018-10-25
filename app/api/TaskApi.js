import { ApiPath } from 'app/AppConstant';
import { ajax } from 'rxjs/observable/dom/ajax';
import BaseApi from './BaseApi'

export default class TaskApi extends BaseApi {

    fetch = () => {
        return ajax({
            url: ApiPath.TASK,
            method: 'GET',
            headers: this.requestHeaders()
        })
    }

    add = (name) => {
        return ajax({
            url: ApiPath.TASK,
            method: 'POST',
            headers: this.requestHeaders(),
            body: {
                name: name
            }
        })
    }

    update = (id, newName) => {
        return ajax({
            url: `${ApiPath.TASK}/${id}`,
            method: 'POST',
            headers: this.requestHeaders({
                'Content-Type': 'application/json'
            }),
            body: {
                name: newName
            }
        })
    }

    delete = (id) => {
        return ajax({
            url: `${ApiPath.TASK}/${id}`,
            method: 'DELETE',
            headers: this.requestHeaders(),
        })
    }
}