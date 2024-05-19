let picturegrid = document.querySelectorAll('.grid');

let imagesSources = ['./images/desktop/image-deep-earth.jpg', './images/desktop/image-night-arcade.jpg', './images/desktop/image-soccer-team.jpg', './images/desktop/image-grid.jpg', './images/desktop/image-from-above.jpg', './images/desktop/image-pocket-borealis.jpg', './images/desktop/image-curiosity.jpg', './images/desktop/image-fisheye.jpg']

picturegrid.forEach((grid, index) => {
    grid.style.backgroundImage = `url(${imagesSources[index]})`
})