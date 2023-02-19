let itemList = [
 "Karen Karapetyan",
 "Artur Araqelyan",
 "Gevorg Gevorgyan",
 "Karine Kirakosyan",
];


let itemContainer = document.getElementById("item-list");


let itemHTML = (item) => `<li>${item}</li>`;

let filterBySearch = (query = "") => {
  let renderHTML = ``;

  itemList.forEach((item) => {
    if (item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      renderHTML += itemHTML(item);
    }
  });
  itemContainer.innerHTML = renderHTML;
};

let searchInput = document.getElementById("search-box");

searchInput.onkeyup = (event) => {
  filterBySearch(event.target.value);
};
filterBySearch();