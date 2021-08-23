const resumeInfo = {
  projects: [
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
      title: "Vue ToDo App",
      description:
        'Front-End web application built using Vue. The application is centered around a simple "ToDo" list that allows the user to create and delete tasks. Application already comes with 3 sample tasks that is retrieved from JSONPlaceholder.typicode.com/ to simulate communication to a backend service.',
      deployment: null,
      repository: "https://github.com/TB831/vueToDoApp",
      projectImage: "https://andrewsanc.github.io/images/todo.png",
      imageAlt: "Checklist",
      tags: ["JavaScript", "VueJS", "3rd Party API", "CSS", "Flexbox"],
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
    {
      title: "Insurance Chatbot",
      description:
        "With a team designed, built, test, and refine a Amazon Web Services chatbot. Intents are designed around frequently asked questions such as “how can I pay my bill”, “when is my bill due”, and “what is my premium”. Amazon Lamda functions are then used to validate intent and respond appropriately.",
      deployment: null,
      repository:
        "https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez",
      projectImage: "https://andrewsanc.github.io/images/chatbot.jpg",
      imageAlt: "Chatbot",
      tags: [
        "JavaScript",
        "Node.JS",
        "Amazon Web Services",
        "Lambda Functions",
        "3rd Party Integration",
        "Authentication",
      ],
    },
    {
      title: "Video Game Sales Prediction",
      description:
        "Project centered around learning Machine Learning algorithms and applying them to data. Our goal was to predict video games sales off data collected in the past 15 years. Machine Learning algorithms used Linear Regression, Regression Trees, and Logistic Regression.",
      deployment: null,
      repository:
        "https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez",
      projectImage: "https://andrewsanc.github.io/images/ml.jpg",
      imageAlt: "Machine Learning",
      tags: [
        "R",
        "Machine Learning",
        "Data Analysis",
        "Linear Regression",
        "Regression Trees",
        "Logistic Regression",
        "3rd Party Data Set",
      ],
    },
  ],
  technology: {
    languages: [
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
        title: "Python",
        imageUrl: "images/python.png",
        imageAlt: "Python logo",
      },
      {
        title: "HTML5",
        imageUrl: "images/html5.png",
        imageAlt: "HTML5 logo",
      },
      {
        title: "CSS3",
        imageUrl: "images/css.png",
        imageAlt: "CSS3 logo",
      },
      {
        title: "SASS",
        imageUrl: "images/sass.png",
        imageAlt: "SASS logo",
      },
      {
        title: "R",
        imageUrl:
          "https://www.rstudio.com/wp-content/uploads/2014/06/RStudio-Ball.png",
        imageAlt: "R logo",
      },
    ],
    frameworks: [
      {
        title: "React",
        imageUrl:
          "https://e7.pngegg.com/pngimages/18/497/png-clipart-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue.png",
        imageAlt: "React logo",
      },
      {
        title: "Redux",
        imageUrl: "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4",
        imageAlt: "Redux logo",
      },
      {
        title: "jQuery",
        imageUrl: "images/jquery.png",
        imageAlt: "jQuery logo",
      },
      {
        title: "VueJS",
        imageUrl: "https://vuejs.org/images/logo.png",
        imageAlt: "Vuejs logo",
      },
      {
        title: "Node.JS",
        imageUrl: "images/nodejs.png",
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
          "https://res.cloudinary.com/practicaldev/image/fetch/s--fU-RKnuZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/http://1selfsolutions.com/wp-content/uploads/2018/07/flask-preview-400.jpg",
        imageAlt: "Flask logo",
      },
      {
        title: "JestJS",
        imageUrl:
          "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
        imageAlt: "Jest Logo",
      },
    ],
    datas: [
      {
        title: "SQL",
        imageUrl: "images/sql.png",
        imageAlt: "MySQL logo",
      },
      {
        title: "MongoDB",
        imageUrl: "images/mongodb.png",
        imageAlt: "MongoDB",
      },
    ],
    tools: [
      {
        title: "Git",
        imageUrl:
          "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
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
          "https://seeklogo.com/images/G/google-cloud-logo-6B950E8ADB-seeklogo.com.png",
        imageAlt: "GCP",
      },
      {
        title: "Heroku",
        imageUrl:
          "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg",
        imageAlt: "Heroku",
      },
    ],
  },
  education: [
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

export default resumeInfo;
