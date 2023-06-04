import { addDays, format, isEqual, isWithinInterval } from "date-fns";
import parseISO from "date-fns/parseISO";
import { projectList, hideAddTaskBtn } from "./creatingProject";
import { addTask, displayTask } from "./creatingTask";


function checkWhichHomeTile(homeTile) {
    if (homeTile.matches('#all-tasks')) {
        displayAllTasks();
    } // else if (homeTile.matches('#today')) {
    //   displayToday();
    // }//
}