const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "CRUD LINQ",
    imageSrc: `${base}assets/projects/CrudLinq.png`,
    description: "Projeto desenvolvido em C# utilizando LINQ para manipulação de dados.",
    skills: ["C#", "LINQ", "SQL Server"],
    demo: "https://github.com/HerbertPH/CRUD-LINQ",
    source: "https://github.com/HerbertPH/CRUD-LINQ"
  },
  {
    title: "Parking Manager",
    imageSrc: `${base}assets/projects/parkingManager.png`,
    description: "Sistema de gerenciamento de estacionamento desenvolvido em C#.",
    skills: ["C#", "SQL Server"],
    source: "https://github.com/HerbertPH/Parking-Manager"
  },
  {
    title: "Todo List",
    imageSrc: `${base}assets/projects/todo.png`,
    description: "Lista de tarefas desenvolvida em React.",
    skills: ["React", "JavaScript", "CSS"],
    demo: "https://herbertph.github.io/todo-list/",
    source: "https://github.com/HerbertPH/todo-list"
  }
]; 