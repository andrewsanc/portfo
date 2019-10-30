const resumeInfo = {
  projects : [
    {
      title: 'Firebase Project Manager',
      description: 'Simple project management application that is built with React, Redux, and Firebase. The Application has authentication to allow users to login and create accounts. Users can create projects with title and add information about their project. ',
      deployment: 'https://fir-projectmanager.firebaseapp.com/',
      repository: 'https://github.com/TB831/FirebaseProjectManger',
      projectImage: 'https://firebase.google.com/images/brand-guidelines/logo-vertical.png',
      imageAlt: 'firebase logo'
    },
    {
      title: 'React Image Search', 
      description: 'Image searching application. With the search bar, user can checkout pictures or find high quality res images from Unsplash. Once search is complete user is returned 10 tiles with images and their respected description. This application was built using React and uses the Unsplash API to retrieve free high res photos', 
      deployment: 'https://reactunsplash.herokuapp.com/', 
      repository: 'https://github.com/TB831/reactCar/', 
      projectImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png', 
      imageAlt: 'camera'
    },
    {
      title: 'Vue ToDo App', 
      description: 'Front-End web application built using Vue. The application is centered around a simple "ToDo" list that allows the user to create and delete tasks. Application already comes with 3 sample tasks that is retrieved from JSONPlaceholder.typicode.com/ to simulate communication to a backend service.', 
      deployment: null, 
      repository: 'https://github.com/TB831/vueToDoApp', 
      projectImage: 'https://tb831.github.io/images/todo.png', 
      imageAlt: 'Checklist'
    },
    {
      title: 'Concentration Cards', 
      description: 'Front-End web game/application built using React. Game starts with all cards faced down with the objective of matching each card to a similar value. The DeckOfCards API is used to retrieve shuffled card deck data. Game ends when all 52 cards are wiped off the game board. The data retrieved is rendered using React components to display all cards on a gameboard', 
      deployment: 'http://concentrationcards.herokuapp.com/', 
      repository: 'https://github.com/TB831/concentration/', 
      projectImage: 'https://tb831.github.io/images/reactLogo.png', 
      imageAlt: 'React Logo'
    },
    {
      title: 'SmartBrain', 
      description: 'An application that allows users to submit an image; Facial recognition performed to detect any faces within the submmited image.Backend built to provide the application with authentication and send/retrieve data from the client; Server/endpoints constructed with Node.js/Express. Submitted data gets sent from the backend to the Clarifai API and responds with analysis of the image. PostgreSQL database used to store all user’s data', 
      deployment: 'https://smarterbrain.herokuapp.com/', 
      repository: 'https://github.com/TB831/smart-brain/', 
      projectImage: 'https://tb831.github.io/images/brain.png', 
      imageAlt: 'Brain logo'
    },
    {
      title: 'Insurance Chatbot', 
      description: 'With a team designed, built, test, and refine a Amazon Web Services chatbot. Intents are designed around frequently asked questions such as “how can I pay my bill”, “when is my bill due”, and “what is my premium”. Amazon Lamda functions are then used to validate intent and respond appropriately.', 
      deployment: null, 
      repository: 'https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez', 
      projectImage: 'https://tb831.github.io/images/chatbot.jpg', 
      imageAlt: 'Chatbot'
    },
    {
      title: 'Video Game Sales Prediction', 
      description: 'Project centered around learning Machine Learning algorithms and applying them to data. Our goal was to predict video games sales off data collected in the past 15 years. Machine Learning algorithms used Linear Regression, Regression Trees, and Logistic Regression.', 
      deployment: null, 
      repository: 'https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez', 
      projectImage: 'https://tb831.github.io/images/ml.jpg', 
      imageAlt: 'Machine Learning'
    },
  ],
  technology: {
    languages: [
      {title: 'Es6', imageUrl: 'http://joelcox.io/scripts/logos/es6-logo.png', imageAlt: 'es6 logo'},
      {title: 'JavaScript', imageUrl: 'http://joelcox.io/scripts/logos/javascript-logo.png', imageAlt: 'JavaScript logo'},
      {title: 'TypeScript', imageUrl: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png', imageAlt: 'TypeScript logo'},
      {title: 'Python', imageUrl: 'http://a1449.phobos.apple.com/us/r30/Purple4/v4/e8/20/fd/e820fded-8a78-06ac-79d0-f1d140346976/mzl.huoealqj.png', imageAlt: 'Python logo'},
      {title: 'HTML5', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/html5-10-569380.png', imageAlt: 'HTML5 logo'},
      {title: 'CSS3', imageUrl: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png', imageAlt: 'CSS3 logo'},
      {title: 'Bash', imageUrl: 'https://smallimg.pngkey.com/png/small/140-1409984_python-logo-bash-shell-logo-shell-script-logo.png', imageAlt: 'Bash logo'},
    ],
    frameworks: [
      {title: 'React', imageUrl: 'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png', imageAlt: 'React logo'},
      {title: 'Redux', imageUrl: 'https://avatars0.githubusercontent.com/u/13142323?s=400&v=4', imageAlt: 'Redux logo'},
      {title: 'Angular', imageUrl: 'http://joelcox.io/scripts/logos/angular-logo.png', imageAlt: 'Angular logo'},
      {title: 'VueJS', imageUrl: 'https://vuejs.org/images/logo.png', imageAlt: 'Vuejs logo'},
      {title: 'Express', imageUrl: 'https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61', imageAlt: 'Express logo'},
      {title: 'Django', imageUrl: 'https://sentry.io/_assets/logos/django-f6f336cde20615169bbf4441c748188dd9903908bc6af952df3bd8f899c55a41.svg', imageAlt: 'Django logo'},
      {title: 'Flask', imageUrl: 'https://www.pngfind.com/pngs/m/62-626422_python-logo-clipart-drawing-flask-hd-png-download.png', imageAlt: 'Flask logo'},
      {title: 'JestJS', imageUrl: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png', imageAlt: 'Jest Logo'},
    ],
    datas: [
      {title: 'MySQL', imageUrl: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png', imageAlt: 'MySQL logo'},
      {title: 'PostgreSQL', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', imageAlt: 'PostgreSQL logo'},
      {title: 'SQLite', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2000px-Sqlite-square-icon.svg.png', imageAlt: 'SQLite logo'},
      {title: 'MongoDB', imageUrl: 'https://jaystack.com/wp-content/uploads/2015/12/mongodb-leaf-e1497443272821.png', imageAlt: 'MongoDB'},
    ],
    tools: [
      {title: 'Git', imageUrl: 'https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png', imageAlt: 'Git logo'},
      {title: 'AWS', imageUrl: 'https://m03s6dh33i0jtc3uzfml36au-wpengine.netdna-ssl.com/wp-content/uploads/AWS-logo.jpg', imageAlt: 'AWS logo'},
      {title: 'Google Cloud', imageUrl: 'https://seeklogo.com/images/G/google-cloud-logo-6B950E8ADB-seeklogo.com.png', imageAlt: 'GCP'},
      {title: 'Heroku', imageUrl: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg', imageAlt: 'Heroku'},
    ]
  },
  education: [
    {schoolName: 'Arizone State University', schoolLocation: 'Tempe, AZ', dateStart: 'January 2020', dateEnd: 'May 2021', degree: 'Master of Computer Science', major: 'Computer Science', emphasis: ''},
    {schoolName: 'California State University, Monterey Bay', schoolLocation: 'Seaside, CA', dateStart: 'August 2014', dateEnd: 'May 2018', degree: 'Bachelor of Science', major: 'Computer Science', emphasis: 'Software Engineering'},
  ]
}

export default resumeInfo;