import ProjectApi from "./ProjectApi";
import TaskApi from "./TaskApi";

export default {
    projects: new ProjectApi(),
    tasks: new TaskApi()
}