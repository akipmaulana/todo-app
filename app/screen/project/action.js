import { Constants } from "config";

export const toogleProjectForm = (toogle) => ({ 
    type: Constants.TOOGLE_PROJECT_FORM,
    payload: toogle
})