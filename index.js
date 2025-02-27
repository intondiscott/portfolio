toggleMenu = () => {
  document.querySelector(".burger-menu").classList.toggle("open");
};

nightMode = () => {
  document.querySelector("body").classList.toggle("dark");
};

const getData = async () => {
  const data = await fetch("./projects.json");
  const response = await data.json();
  return response.projects;
};

const returnedData = async () => {
  const data = await getData();
  project = document.querySelector("#projects");

  data.map((item) => {
    projectContainer = document.createElement("div");
    projectName = document.createElement("h3");
    projectImage = document.createElement("img");
    projectIconGithub = document.createElement("img");
    projectDescription = document.createElement("p");
    projectButton = document.createElement("button");
    projectLink = document.createElement("a");
    projectContainer.classList.add("project");
    projectName.innerHTML = item.name;
    projectImage.src = item.image;
    projectDescription.innerHTML = item.description;
    projectLink.href = item.codeLink;
    projectIconGithub.src = "./assets/github-mark.png";
    projectIconGithub.classList.add("icon-github");

    projectLink.appendChild(projectIconGithub);

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectImage);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectLink);
    project.appendChild(projectContainer);
  });
};

returnedData();
