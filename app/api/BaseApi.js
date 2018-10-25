import { ApiPath } from 'app/AppConstant';

export default class BaseApi {

    requestHeaders = (props) => ({
        'Authorization': ApiPath.AUTH,
        ...props
    })

}