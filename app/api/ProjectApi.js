import { ApiPath } from 'app/AppConstant';
import { ajax } from 'rxjs/observable/dom/ajax';
import BaseApi from './BaseApi'

export default class ProjectApi extends BaseApi {

    fetch = () => {
        return ajax({
            url: `${ApiPath.PROJECT}?page=1`,
            method: 'GET',
            headers: this.requestHeaders()
        })
    }

    add = (name) => {
        return ajax({
            url: ApiPath.PROJECT,
            method: 'POST',
            headers: this.requestHeaders(),
            body: {
                name: name
            }
        })
    }

    update = (id, newName) => {
        return ajax({
            url: `${ApiPath.PROJECT}/${id}`,
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
            url: `${ApiPath.PROJECT}/${id}`,
            method: 'DELETE',
            headers: this.requestHeaders(),
        })
    }

    close = (id, isClosed) => {
        return ajax({
            url: `${ApiPath.PROJECT}/${id}`,
            method: 'POST',
            headers: this.requestHeaders({
                'Content-Type': 'application/json'
            }),
            body: {
                isClosed: isClosed
            }
        })
    }
}