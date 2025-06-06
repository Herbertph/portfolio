const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "CRUD LINQ",
    imageSrc: `${base}assets/projects/CrudLinq.png`,
    description: "A secure RESTful API for user management built with .NET, featuring JWT database integration.",
    skills: ["C#", ".Net", "LINQ", "Postgre"],
    source: "https://github.com/Herbertph/Crud_LinQ"
  },
  {
    title: "Parking Manager",
    imageSrc: `${base}assets/projects/parkingManager.png`,
    description: "A Spring application designed to manage parking establishments and vehicle operations.",
    skills: ["Java", "Spring", "MongoDb"],
    source: "https://github.com/Herbertph/ParkingManagement"
  },
  {
    title: "Todo List",
    imageSrc: `${base}assets/projects/todo.png`,
    description: "Originally built as a technical test, this project show my skills with MEAN.",
    skills: ["JavaScript", "Angular", "Node", "MongoDb"],
    source: "https://github.com/Herbertph/Todo_Mean"
  },
  {
    title: "Brazil in Moncton",
    imageSrc: `${base}assets/projects/vitrine.png`,
    description: "Landing page showing brazilian business and events in the city of Moncton.",
    skills: ["JavaScript", "Vue", "Tailwind"],
    demo: "https://herbertph.github.io/monctonVitrine/",
    source: "https://github.com/Herbertph/monctonVitrine",
  },
  {
    title: "Grandma Kitchen",
    imageSrc: `${base}assets/projects/kitchen.png`,
    description: "With spoonacular API, this website help you choose your next recipe.",
    skills: ["JavaScript", "Vue", "Tailwind"],
    demo: "https://herbertph.github.io/recipeWebsite/#/",
    source: "https://github.com/Herbertph/recipeWebsite",
  },
]; 