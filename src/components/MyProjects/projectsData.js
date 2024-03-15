import eCommerce from "../../projects-images/E-commerce.png";
import calc from "../../projects-images/Calculator.png";
import weather from "../../projects-images/Weather.png";
import library from "../../projects-images/Library.png";
import cocktails from "../../projects-images/Cocktails.png";
import twenty from "../../projects-images/Twenty.png";
import number from "../../projects-images/Number.png";
import converter from "../../projects-images/Converter.png";

export const projectData = [
  {
    title: "TummyToxx E-Commerce",
    imgUrl: eCommerce,
    description: `E-commerce site, developed with all CRUD operations, using MongoDB. From Register and Log In, through all e-commerce functionalities, to WishList, Cart for each user and much more.
    Check it now!  `,
    gitHubUrl: "https://github.com/damjanjaneski/own-project",
    liveUrl: "https://tummytoxx.netlify.app/",
  },
  {
    title: "Currency Converter",
    imgUrl: converter,
    description:
      "Converter that helps you convert and see the the ratio between any 2 different world's currencies.",
    gitHubUrl: "https://github.com/damjanjaneski/currency-converter",
    liveUrl: "https://my-currency.netlify.app/",
  },
  {
    title: "Personal Library",
    imgUrl: library,
    description:
      "Simple desktop-version list of books where you can add, delete od preview all the books you have read or want to read in the future (with some already written examples)",
    gitHubUrl: "https://github.com/damjanjaneski/personal-library",
    liveUrl: "https://own-library.netlify.app/",
  },
  {
    title: "Guess the Number",
    imgUrl: number,
    description:
      "Secret number is hidden behind the scene. Player's goal is to find that number starting with guess. After the guess, a message will be shown depending if the number is too low or too high, comparing to the secret number, until the player finds the number!",
    gitHubUrl: "https://github.com/damjanjaneski/guess-the-number",
    liveUrl: "https://my-hidden-number.netlify.app/",
  },
  {
    title: "First to Twenty",
    imgUrl: twenty,
    description:
      "Desktop version game where 2 players roll a dice. One can throw until he decides it is enough and add all thrown numbers in that set are collected and added to his score. If number 1 is rolled, all previous thrown numbers in that set are lost and the turn is switched to the other player with same rules. Winner is the first player who collects sum of 20!",
    gitHubUrl: "https://github.com/damjanjaneski/first-to-twenty",
    liveUrl: "https://first-to-twenty.netlify.app/",
  },
  {
    title: "Calculator",
    imgUrl: calc,
    description:
      " Simple calculator which uses all basic operations. Reference look: Apple - Iphone calculator.",
    gitHubUrl: "https://github.com/damjanjaneski/calculator",
    liveUrl: "https://my-apple-calc.netlify.app/",
  },
  {
    title: "Cocktail Finder",
    imgUrl: cocktails,
    description:
      " Just type in some cocktail name and all options and variants, will be displayed with all ingredients you need. Perfect assistant for home made cocktails. Desktop-version only! ",
    gitHubUrl: "https://github.com/damjanjaneski/cocktail-finder",
    liveUrl: "https://all-cocktails.netlify.app/",
  },
  {
    title: "Weather Application",
    imgUrl: weather,
    description:
      "  Application built for showing the current weather in the searched city.",
    gitHubUrl: "https://github.com/damjanjaneski/weather-app",
    liveUrl: "https://weather-info-check.netlify.app/",
  },
];
