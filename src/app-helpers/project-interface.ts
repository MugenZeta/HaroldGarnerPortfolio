import {icons} from "./icon-loader";

export interface projects{
  projectName : string;
  projectDescription : string;
  projectScreenshot : string | undefined;
  projectTechnologies : icons;
}
