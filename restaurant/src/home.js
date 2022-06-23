function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const chefImage = document.createElement("img");
    chefImage.src = "images/chefs.png";
    chefImage.alt = "Chefs";
  
    home.appendChild(createParagraph("Best Amala Joint in town"));
    home.appendChild(createParagraph("Iya Basira style since 2002"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;