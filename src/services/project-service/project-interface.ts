import {icons} from "../icon-service/icon-loader";

export interface projects{
  projectName : string;
  projectDescription : string;
  projectScreenshot : string;
  projectRepo: string;
  projectTech: icons[];
}
