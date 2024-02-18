import {icons} from "../icon-service/icon-loader";

export interface projects{
  projectName : string;
  projectDescription : string;
  projectScreenshot : string | undefined;
  projectRepo: string;
  projectTech: any;
}
