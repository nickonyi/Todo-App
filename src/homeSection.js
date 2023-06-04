import { addDays, format, isEqual, isWithinInterval } from "date-fns";
import parseISO from "date-fns/parseISO";
import { projectList, hideAddTaskBtn } from "./creatingProject";
import { addTask } from "./creatingTask";