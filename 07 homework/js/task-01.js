const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории`);

const categoriesNamesAndElements = categoriesEl.forEach(category => {
    console.log(category.firstElementChild.textContent);
    console.log(`Колличество елементов: ${category.querySelectorAll('li').length}`)
})