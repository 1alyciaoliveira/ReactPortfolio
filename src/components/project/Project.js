import Money from '../../assets/money.svg'
import Food from '../../assets/food.svg'
import Ecommerce from '../../assets/ecommerce.svg'
import Network from '../../assets/network.svg'
import JobJourney from '../../assets/jobjourney.svg'
import Readme from '../../assets/readme.svg'

export const projectData = [
    {
       _id: 1,
       title: "Track your goals",
       description: "Is a real world solution for everyone who wants to keep track and fulfill personal economic development.",
       image: Money,
       deploy: "https://track-your-goals-180d59665ffa.herokuapp.com/login",
       github: "https://github.com/1alyciaoliveira/TrackYourGoals",
    },
    {
        _id: 2,
        title: "NutriChef",
        description: "Stuck with random ingredients? Our web app offers recipes with nutritional info. Enjoy tasty meals while meeting health goals!",
        image: Food,
        deploy: "https://1alyciaoliveira.github.io/NutriChef/",
        github: "https://github.com/1alyciaoliveira/NutriChef"
    },
    {
        _id: 3,
        title: "JobJourney",
        description: "Welcome to a new era of efficient job hunting! Keep track of your job applications with this amazing app.",
        image: JobJourney,
        deploy: "https://ancient-everglades-97703-e6a603057067.herokuapp.com/",
        github: "https://github.com/1alyciaoliveira/JobJourney",
    },
    {
        _id: 4,
        title: "E-commerce backend",
        description: "A back end for an e-commerce site. This project was built using Express.js API, Sequelize to and MySQL database.",
        image: Ecommerce,
        github: "https://github.com/1alyciaoliveira/eCommerce_backend",
    },
    {
        _id: 5,
        title: "Network API",
        description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to moment.js was also used to configure the date of the posts.",
        image: Network,
        github: "https://github.com/1alyciaoliveira/NetworkAPI",
    },
    {
        _id: 6,
        title: "ReadMe Generator",
        description: "This project helps you to create quickly a professional README for your new project.",
        image: Readme,
        github: "https://github.com/1alyciaoliveira/readme_generator",
    },
 ]; 