import { Component, OnInit } from '@angular/core';

export interface ProjectDef {
  title: string;
  technos: string[];
  description: string;
  image: string;
  githubLink?: string;
  videoLink?: string;
  websiteLink?: string;
  skills: string[];
}

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.scss']
})
export class HomeProjectComponent implements OnInit {

  public projects: ProjectDef[] = [
    {
      title: '"Blue Galactic X" | Service Oriented Architecture',
      technos: [
        'spring boot',
        'mongoDB',
        'Docker',
        'Kafka',
        'Jenkins'
      ],
      description: 'Multi micro-services architecture using Domain Driven Design and Hexagonal Architecture.',
      skills: [
        '16 Domain Driven Design oriented microservices with a Hexagonal Architecture',
        'Devops with Docker and Jenkins on my Ubuntu VPS',
        'Persistence management with mongoDB',
        'Team of 4 with a SCRUM and Pull Request methodology',
        'Strong decoupling with message bus communication with Kafka'
      ],
      image: 'soa.png',
      githubLink: 'https://github.com/JasonHaenlin/Blue-Galactic-X',
    },
    {
      title: '"Gred" | Mobile',
      technos: [
        'Flutter',
        'Android',
        'Change Notifier Provider Pattern',
        'Figma'
      ],
      description: 'Multi-platform application allowing to follow a recipe step by step with adaptive scenarios.',
      skills: [
        'List a recipe step by step',
        'Manage device adaptation (size and orientation)',
        'Voice mode to say commands to the application',
        'Channel to communicate from Dart to Kotlin to manage Android sound',
        'Team of 2 with a SCRUM and Pull Request methodology',
        'Manage static and dynamic adaptations'
      ],
      image: 'gred.png',
      githubLink: 'https://github.com/otakedev/gred-mobile',
    },
    {
      title: '"Paris 2024 Olympic Games" | Mobile, Backend & Dedicated Language',
      technos: [
        'Antlr',
        'NodeJS',
        'Flutter Mobile & Web',
        'Bloc Pattern',
        'Jenkins',
        'SonarQube'
      ],
      description: 'Creation of an application to help visitors plan their stays according to their criteria. The organizers can influence the result according to their written constraints via the dedicated language',
      skills: [
        'Dedicated language to define the behavior of the application',
        'Web UI integrating Flutter to test the logic of the dedicated language',
        'Devops on my VPS using Jenkins to deploy and build Flutter',
        'Team of 4 with a SCRUM methodology'
      ],
      image: 'flutter-ps7.png',
      githubLink: 'https://github.com/JasonHaenlin/PNS-PS7-19-20-al-ihm1',
      videoLink: 'https://www.youtube.com/watch?v=0uQLtrn3Mx0&list=PLbQAhnCaXQExOiHmJebG23umviozvgpKl&index=1'
    },
    {
      title: '"Students\' stay abroad" | Web & Backend',
      technos: [
        'Angular 7',
        'NodeJS',
        'ORM Knex',
        'SQLite',
        'PQSL',
        'OWASP ZAP',
        'Snyk',
        'Jenkins',
        'Balsamiq',
        'Datadog'
      ],
      description: 'A semester project consisting of a website to help students prepare for their stay abroad.',
      skills: [
        'Determine the needs and develop the mockups',
        'Permissions avec NPM passport & Guard Angular pour protéger les routes',
        'Knex to manage the migration and creation of databases',
        'ORM for model checking and caching',
        'Homemade Nodejs framework with best practices',
        'Creation of form with token transmitted by mail for single use'
      ],
      image: 'ps.png',
      githubLink: 'https://github.com/JasonHaenlin/2018-2019-ps6-otake',
    },
    {
      title: '"Micmac VR" | Unity project for Mobile and VR headset',
      technos: [
        'Unity Game Engine',
        'Mirror Networking',
        'Android Sensors',
        'Oculus Quest 2'
      ],
      description: '3D game involving a VR player and a mobile player. \n The VR player can fire bullet with guns to stop the other player from destroying the target during a specific duration.',
      skills: [
        'Manage Multiplayer connection',
        'Multiplayer strategies (server and clients actions)',
        '2 devices but a single game',
        'Several game phases with gameplay changes and transitions',
        'Game environnement (elements, sounds, movements, etc.)'
      ],
      image: 'micmac.png',
      videoLink: 'https://www.youtube.com/watch?v=vwybM76X5P0'
    },
    {
      title: '"Alergo" | Mobile & User Oriented Methodology',
      technos: [
        'Flutter',
        'Balsamiq',
        'Figma'
      ],
      description: 'Creation of an application to verify industrial products by scanning them against user-defined constraints',
      skills: [
        'Methodology to create a whole project. Analyse, Mockups',
        'User testing of the application',
        'Draw multiple options to choose the best one',
        'User Interviews to verify the personas',
        'Evaluation process : Heuristic, Forms, interview'
      ],
      image: 'alergo.png',
      githubLink: 'https://github.com/otakedev/ceihm-groupe-7',
    },
    {
      title: '"Web Client Project" | Web Application',
      technos: [
        'ReactJs',
        'MongoDB',
        'NestJs',
        'Docker',
        'Jenkins',
        'Material UI',
        'OpenAPI (Swagger 3.0)'
      ],
      description: 'Web interface to get information about Covid in France.',
      skills: [
        'CI and docker to deploy on my VPS',
        'Work on the responsivity',
        'Team of 4 with a SCRUM methodology and PR',
        'Heatmap of France by region using SVG',
        'Dynamic Theming'
      ],
      image: 'pw.png',
      githubLink: 'https://github.com/otakedev/web-server-client',
    },
    {
      title: '"Polyflow" | Web Application',
      technos: [
        'Angular 11',
        'NgRx',
        'Material Angular',
        'Jenkins',
        'Swagger 2.0',
        'Figma',
        'Cypress'
      ],
      description: 'Web application to help the school organize and plan everything by keeping track of all processes and to avoid having lost papers or documents. Facilitate the cooperation within the school for the students\' applications.',
      skills: [
        'NgRx with 9 features (Reducer, Selector, Action, Effect)',
        'Use effects to show a snackbar to help user keeping track of the state',
        'NPM Normalizr to normalize the data before storing in the store',
        'Container and presenter design pattern',
        'Guard to protect routes and check if the user is connected',
        'Router Outlet (sub router) to display dynamic dialogs',
        'Base service generated by swagger (the only service)',
        'Use a proxy to simulate the backend for development',
        'Team of 3 with a SCRUM methodology and PR',
        'Analyse the client needs periodicaly using demo, user stories, sizing, Moscow and mockups',
        'User Acceptance Test with Cypress'
      ],
      image: 'ter.png',
      githubLink: '',
      videoLink: ''
    },
    {
      title: '"Cloud Project" | Software architecture for cloud computing',
      technos: [
        'Google Cloud Platform',
        'Cloud AppEngine',
        'NodeJs',
        'Postman'
      ],
      description: 'Subject base on covid-19 statistics. Creating heatmaps, following user position to check contact at a large scale',
      skills: [
        'deployed on a cloud-based engine to provide horizontal scalability automatically as the load increases or decreases',
        'Asynchronous tasks using google-cloud Task and Pub-Sub',
        'Apply best practices to handle erros, logs and routes',
        'SendPulse to send email',
        'SQL to store data and datastore to store files',
        'NPM Joi to handle model validation',
        'Automated and scripted scenario testing using Postman'
      ],
      image: 'sacc.png',
      githubLink: 'https://github.com/JasonHaenlin/sacc-team-A',
      videoLink: ''
    },
    {
      title: '"Drone delivery" | Software Architecture',
      technos: [
        'Java EE',
        'Mono .Net',
        'Maven 3',
        'Java 8',
        'Docker',
        'Docker compose',
        'Jenkins',
        'OpenJPA persistence',
        'Apache TomEE',
        'JUnit 5',
        'Cucumber E2E tests',
        'SonarQube',
        'Artifactory'
      ],
      description: 'Drone delivery is a parcel delivery service from the sky.',
      skills: [
        '5 web services to exposes interfaces base on the client',
        '5 components to split by responsability',
        'An external service using .Net to mock the drones',
        'Persistence layer using OpenJPA and in memory database',
        'Docker and Jenkins building and deployement',
        'Class, use case and sequence diagrams',
        'Team of 4 with a SCRUM methodology',
        '1 repository with 15 submodule to manage all the part independently',
        'Managing module version and dispatch on Artifactory',
        'The CI build the module on push and build all the dependencies before pushing the new version'
      ],
      image: 'dronedelivery.png',
      githubLink: 'https://github.com/JasonHaenlin/cookiefactory-1920-otake',
    },
    {
      title: '"Cookie Factory" | Software conception',
      technos: [
        'Maven 3',
        'Java 8',
        'Junit 5',
        'Cucumber UAT',
        'SonarQube',
        'Jenkins'
      ],
      description: 'The Cookie Factory (TCF) is a major bakery brand in the USA. The Cookie on Demand (CoD) system is an innovative service offered by TCF to its customer. They can order cookies online thanks to an application, and select when they\'ll pick-up their order in a given shop.',
      skills: [
        'Class, use case and sequence diagrams',
        'Continuous integration to orchestrate Unit tests, Mutation tests and Quality check',
        '4 main packages, + 30 classes',
        'StepBuilder design pattern to build a command (cookies)',
        'Observer and Callback design pattern to manage the commands (kitchen)',
        'Strategy and template design pattern with a priority queue to manage the possible discounts. A discount as a unique strategy and with a specific pattern ordered by priority.',
        'Singleton design pattern for the API (unique entities)',
        'Strategy and Polymorphic Enumeration to build cookies base on specific ingredients',
        'Decorator design pattern to make more complexe cookies',
        'Flyweight design patter to avoid duplication of entity',
        'Facade design pattern to expose specific methods to the client'
      ],
      image: 'cookie.png',
      githubLink: 'https://github.com/JasonHaenlin/cookiefactory-1920-otake',
    },
    {
      title: '"Polyquest" | Retro gaming competition (3rd of 22)',
      technos: [
        'Lua',
        'pico-8 (8bits console)'
      ],
      description: 'Sophia Quest is an RPG whose heroine is Sofia. Your goal is to get hired in three companies. Use your skills and dexterity to win against them!',
      skills: [
        'Sprite animations',
        'Object Oriented Programmation',
        'Optimization of game objects instantiation'
      ],
      image: 'pico.png',
      githubLink: 'https://github.com/JasonHaenlin/pico-8-sophiaquest',
      websiteLink: 'https://pico.otakedev.com'
    },
    {
      title: '"Connected House" | Web application & IOT',
      technos: [
        'Angular 5',
        'Node-Red',
        'MQTT protocol'
      ],
      description: 'Creation of a website allowing incident management in a connected house.',
      skills: [
        'MQTT for communication with sensors and actuators.',
      ],
      image: 'ps6-1.jpg',
      githubLink: 'https://github.com/JasonHaenlin/SI3-S6-WebAngular',
    },
    {
      title: '"ARM CPU" | Architecture Project',
      technos: [],
      description: 'Creation of a CPU based on the ARM architecture with simplifications. The main purpose of the project is to undersand the concept behind a CPU using basic assembly instructions.',
      skills: [],
      image: 'archi.png',
      githubLink: 'https://github.com/JasonHaenlin/Arms-and-Legs',
    },
    {
      title: '"Manage incidents & events" | Mobile Application',
      technos: [
        'Android studio',
        'Firebase'
      ],
      description: 'Android project to manage incidents & events within the university.',
      skills: [
        'Firebase for the backend',
        'Realtime Database to store the data',
        'Storage to store the photos',
        'Cloud function to send notification to the clients'
      ],
      image: 'android.jpg',
      githubLink: 'https://github.com/JasonHaenlin/SI3-S6-AndroidProject',
    },
    // {
    //   title: '',
    //   technos: [],
    //   description: '',
    //   skills: [],
    //   image: '',
    //   githubLink: '',
    //   videoLink: ''
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
