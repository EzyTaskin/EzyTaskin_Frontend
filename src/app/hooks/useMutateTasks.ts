import * as taskApi from "src/app/helpers/api/tasks";
import {TasksRequestType} from "src/app/constants/type";

export default function useMutateTasks() {

    async function postTask(data: TasksRequestType) {
        const res = await taskApi.postTask(data);
        return res;
    }

    return {
        postTask
    };
}


