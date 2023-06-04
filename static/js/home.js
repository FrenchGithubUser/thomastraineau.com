const titles = document.querySelectorAll('.title');
const mainImage = document.querySelector('#main-img-container img');
const descriptions = document.querySelectorAll('.description');
const defaultImage = "thomas"
let currentImage = defaultImage

titles.forEach(title => {
    ['click', 'mouseover'].forEach(evt =>
        title.addEventListener(evt, function () {
            const newTitle = this.dataset.name;
            switchImageAndDescription(newTitle)
            titles.forEach(t => t.classList.remove('active'));
            title.classList.add('active');
        }));
    // title.addEventListener('mouseout', () => {
    //     switchImage(defaultImage)
    // })
});


function switchImageAndDescription(title) {
    if (currentImage != title) {
        mainImage.style.opacity = '0';
        descriptions.forEach((description) => {
            if (description.classList.contains(title)) {
                description.classList.remove("no-opacity")
            } else {
                description.classList.add("no-opacity")
            }
        })
        setTimeout(() => {
            mainImage.src = 'images/' + title + '.jpg';
            mainImage.style.opacity = '1';
            currentImage = title
        }, 200);
    }
}