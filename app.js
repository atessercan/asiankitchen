const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const categoryArray = [];
fetchCategories();
createCategoryList();
fetchMeals("all");
function fetchCategories() {
  let j = 0;
  for (let i = 0; i < menu.length; i++) {
    if (categoryArray.includes(menu[i].category) == 0) {
      categoryArray[j] = menu[i].category;
      j++;
    } else {
      j--;
    }
  }
}
function createCategoryButtons(param) {
  var categoryList = document.querySelector("#category");
  let categoryButton = document.createElement("button");
  categoryButton.innerText = param;
  categoryButton.classList.add(
    "btn",
    "btn-outline-dark",
    "m-2",
    "categoryButton"
  );
  categoryButton.setAttribute("id", param);
  categoryList.appendChild(categoryButton);
  categoryButton.addEventListener("click", fetchMeals);
}

function createCategoryList() {
  createCategoryButtons("All");
  for (let i = 0; i < categoryArray.length; i++) {
    createCategoryButtons(categoryArray[i]);
  }
}

function fetchMeals(param) {
  let menuPage = document.querySelector(".section-center");
  menuPage.innerHTML = " ";
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category == this.id) {
      mealContainer = document.createElement("div");
      mealContainer.classList.add(
        "card",
        "col-sm-12",
        "col-lg-6",
        "p-2",
        "bg-transparent",
        "border-0",
        "mb-4"
      );
      mealContainer.innerHTML = `
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${menu[i].img}" alt="" width="100%" height="100%" border-4" style="border:3px solid #3b3b3b; border-radius:10px;">
    </div>
    <div class="col-md-8">
      <div class="card-header bg-transparent" style="color:#E10B50; padding-top:0;">
        <p class="meal-name d-inline  fs-4">${menu[i].title}</p>
        <p class="price d-inline float-end fs-4">${menu[i].price}</p>
      </div>
      <div class="card-body">
        <p class="card-text meal-description">${menu[i].desc}</p>
      </div>
    </div>
  </div>`;
      menuPage.appendChild(mealContainer);
    }
    if (this.id == "All" || param == "all") {
      mealContainer = document.createElement("div");
      mealContainer.classList.add(
        "card",
        "col-sm-12",
        "col-lg-6",
        "p-2",
        "bg-transparent",
        "border-0",
        "mb-4"
      );
      mealContainer.innerHTML = `
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${menu[i].img}" alt="" width="100%" height="100%" border-4" style="border:3px solid #3b3b3b; border-radius:10px;">
    </div>
    <div class="col-md-8">
      <div class="card-header bg-transparent" style="color:#E10B50; padding-top:0;">
        <p class="meal-name d-inline  fs-4">${menu[i].title}</p>
        <p class="price d-inline float-end fs-4">${menu[i].price}</p>
      </div>
      <div class="card-body">
        <p class="card-text meal-description">${menu[i].desc}</p>
      </div>
    </div>
  </div>`;
      menuPage.appendChild(mealContainer);
    }
  }
  console.log(this.id);
}
