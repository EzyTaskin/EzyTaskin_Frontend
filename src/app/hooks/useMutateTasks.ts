import * as taskApi from "src/app/helpers/api/tasks";
import {TaskRequestType} from "src/app/constants/type";

export default function useMutateTasks() {

    async function postTask(data: TaskRequestType) {
        const res = await taskApi.postTask(data);
        console.log("postTask: ", res)
    }

    return {
        postTask
    };
}


