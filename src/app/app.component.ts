import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HaroldGarnerPortfolio';
  // About me is last due to how long the content string is

  Projects:string = "Projects";
  ProjectsContent: string = "This section contains my best personal projects.\n" +
    "Please click the folder icon to get a description of the project and technologies used.";

  Experience: string = "Experience";
  ExperienceContent: string = "This is a list of all my experience for various technologies over my time of self study projects, bootcamps, and professional spaces.";

  ContactMe: string = "Contact Me";
  ContactMeContent: string = "";

  AboutMe: string = "About Me";
  AboutMeContent: string = "Hello and welcome to my Portfolio. My name is Harold Garner, a software developer currently specializing in Full Stack web development. My journey started relatively early in life. I loved video games, computers, calculators, and various electrical gadgets. I began developing a curiosity at an early age as to “How” these objects functioned and “Why” were said objects made the way they were.\n" +
    " This lead me to discover the art of software development the biggest set of Lego blocks imaginable. The self study of this art over time lead to my brain reshaping how I saw life and the objects around me. I grew a hunger for more in-depth knowledge the likes of which has created a never ending journey of joyful discovery.\n" +
    "\n" +
    "This passion for learning has allowed me special opportunities over time in various programs. I gained in-depth knowledge of computer hardware through the Generations IT program where I came out with certificate of completion. I experimented and worked with various google cloud products such as Google App Engine, Kubernetes, and cloud virtual machines. I developed small projects with a team using python during my time in the Google Black Developer program. This allowed me to look behind the curtain of the DecOps space and learn more about your developers favorite developer. Lastly I completed a tough 6 month bootcamp through the Cook Systems Fast Track program for full stack web development that challenged my brain to absorb so much information in such little time.\n" +
    "\n" +
    "I am a passionate developer with the dedication to keep learning, problem solving, and loving the craft. \n" +
    "Thank you reading this and please check out my projects section to see some of my work.";
}
