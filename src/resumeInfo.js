export const resumeInfo = {
  me: {
    name: "Andrew Sanchez",
    title: "Software Engineer",
    links: [
      {
        name: "Github",
        icon: "github",
        link: "https://github.com/andrewsanc",
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/andrewsanc/",
      },
      {
        name: "Resume",
        icon: "google drive",
        link: "https://drive.google.com/uc?export=download&id=1OsmIzjAxz2RPgQuvI-GLbQIlpW5VtEFm",
      },
    ],
  },
  about: [
    "Hello 👋, my name is Andrew, and I am a software engineer whose passionate about using technology to solve problems and improve people's lives.",
    "I’m a problem solver at heart, and I enjoy the challenge of tackling complex issues. I always strive to write clean and maintainable code, and I take pride in my ability to develop high-quality software solutions.",
    "I’m dedicated to continuously learning and growing as a software engineer, and I am excited to see where my career will take me in the future.",
  ],
  projects: [
    {
      title: "GitHub User Search",
      description:
        "A frontend React application that provide users with an easy and efficient way to search for GitHub users and view their profile statistics, helping them to better understand and connect with other developers in the community.",
      deployment: "https://andrewsanc.github.io/github-user-search/",
      repository: "https://github.com/andrewsanc/github-user-search",
      projectImage: "https://avatars.githubusercontent.com/u/583231?v=4",
      imageAlt: "Octocat avatar",
      tags: ["JavaScript", "React", "API", "Flexbox", "Deployed"],
    },
    {
      title: "Firebase Project Manager",
      description:
        "Simple project management application that is built with React, Redux, and Firebase. The Application has authentication to allow users to login and create accounts. Users can create projects with title and add information about their project. ",
      deployment: "https://fir-projectmanager.firebaseapp.com/",
      repository: "https://github.com/TB831/FirebaseProjectManger",
      projectImage:
        "https://firebase.google.com/images/brand-guidelines/logo-vertical.png",
      imageAlt: "firebase logo",
      tags: [
        "JavaScript",
        "React",
        "Redux",
        "Flexbox",
        "Authentication",
        "Google Firebase",
        "Cloud Functions",
        "Deployed",
      ],
    },
    {
      title: "React Image Search",
      description:
        "Image searching application. With the search bar, user can checkout pictures or find high quality res images from Unsplash. Once search is complete user is returned 10 tiles with images and their respected description. This application was built using React and uses the Unsplash API to retrieve free high res photos",
      deployment: "https://reactunsplash.herokuapp.com/",
      repository: "https://github.com/TB831/reactCar/",
      projectImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png",
      imageAlt: "camera",
      tags: [
        "JavaScript",
        "React",
        "3rd Party API",
        "Flexbox",
        "CSS",
        "Heroku",
        "Deployed",
      ],
    },
    {
      title: "Concentration Cards",
      description:
        "Front-End web game/application built using React. Game starts with all cards faced down with the objective of matching each card to a similar value. The DeckOfCards API is used to retrieve shuffled card deck data. Game ends when all 52 cards are wiped off the game board. The data retrieved is rendered using React components to display all cards on a gameboard",
      deployment: "http://concentrationcards.herokuapp.com/",
      repository: "https://github.com/TB831/concentration/",
      projectImage: "https://andrewsanc.github.io/images/reactLogo.png",
      imageAlt: "React Logo",
      tags: [
        "JavaScript",
        "React",
        "Flexbox",
        "CSS Animations",
        "3rd Party API",
        "Deployed",
      ],
    },
    {
      title: "SmartBrain",
      description:
        "An application that allows users to submit an image; Facial recognition performed to detect any faces within the submmited image.Backend built to provide the application with authentication and send/retrieve data from the client; Server/endpoints constructed with Node.js/Express. Submitted data gets sent from the backend to the Clarifai API and responds with analysis of the image. PostgreSQL database used to store all user’s data",
      deployment: "https://smarterbrain.herokuapp.com/",
      repository: "https://github.com/TB831/smart-brain/",
      projectImage: "https://andrewsanc.github.io/images/brain.png",
      imageAlt: "Brain logo",
      tags: [
        "JavaScript",
        "Node.JS",
        "CSS",
        "ExpressJS",
        "PostgreSQL",
        "KnexJS",
        "3rd Party API",
        "Deployed",
        "Authentication",
      ],
    },
  ],
  skills: [
    {
      title: "JavaScript",
      imageUrl: "images/javascript.png",
      imageAlt: "JavaScript logo",
    },
    {
      title: "TypeScript",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      imageAlt: "TypeScript logo",
    },
    {
      title: "React",
      imageUrl: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      imageAlt: "React logo",
    },
    {
      title: "GraphQL",
      imageUrl: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      imageAlt: "Graphql logo",
    },
    {
      title: "Apollo",
      imageUrl:
        "https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg",
      imageAlt: "Apollo Logo",
    },
    {
      title: "Python",
      imageUrl: "images/python.png",
      imageAlt: "Python logo",
    },
    {
      title: "HTML5",
      imageUrl: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      imageAlt: "HTML5 logo",
    },
    {
      title: "CSS3",
      imageUrl: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
      imageAlt: "CSS3 logo",
    },
    {
      title: "SASS",
      imageUrl:
        "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
      imageAlt: "SASS logo",
    },
    {
      title: "Tailwind CSS",
      imageUrl:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      imageAlt: "Tailwind CSS Logo",
    },
    {
      title: "Redux",
      imageUrl: "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4",
      imageAlt: "Redux logo",
    },
    {
      title: "jQuery",
      imageUrl: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
      imageAlt: "jQuery logo",
    },
    {
      title: "VueJS",
      imageUrl: "https://vuejs.org/images/logo.png",
      imageAlt: "Vuejs logo",
    },
    {
      title: "NodeJS",
      imageUrl: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      imageAlt: "NodeJS Logo",
    },
    {
      title: "Express",
      imageUrl:
        "https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61",
      imageAlt: "Express logo",
    },
    {
      title: "Flask",
      imageUrl:
        "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      imageAlt: "Flask logo",
    },
    {
      title: "JestJS",
      imageUrl: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      imageAlt: "Jest Logo",
    },
    {
      title: "PostgreSQL",
      imageUrl:
        "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      imageAlt: "PostgreSQL Logo",
    },
    {
      title: "MongoDB",
      imageUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      imageAlt: "MongoDB",
    },
    {
      title: "Git",
      imageUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      imageAlt: "Git logo",
    },
    {
      title: "Amazon Web Services",
      imageUrl: "images/aws.png",
      imageAlt: "AWS logo",
    },
    {
      title: "Google Cloud",
      imageUrl:
        "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      imageAlt: "Google Cloud Logo",
    },
    {
      title: "Heroku",
      imageUrl: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      imageAlt: "Heroku",
    },
  ],
  educations: [
    {
      schoolName: "California State University, Monterey Bay",
      schoolLocation: "Seaside, CA",
      dateStart: "August 2014",
      dateEnd: "May 2018",
      degree: "Bachelor of Science",
      major: "Computer Science",
      emphasis: "Software Engineering",
      logo: "images/csumb.png",
    },
  ],
};
