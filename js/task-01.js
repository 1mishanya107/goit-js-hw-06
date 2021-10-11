const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

// console.log(categories)

const newCategories = [...categories]

// console.log(newCategories)

const titleAllCategories = newCategories.map(category => {
    const title = category.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`)

    return title
})