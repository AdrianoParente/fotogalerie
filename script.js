let pictures = ['img/cat-2083492_640.jpg', 'img/fox-1284512_640.jpg', 'img/garden-19830_640.jpg', 'img/kingfisher-2046453_640.jpg', 'img/raccoon-3538081_640.jpg', 'img/roe-deer-2634729_640.jpg', 'img/swans-1436266_640.jpg', 'img/tiger-2535888_640.jpg'];
let currentImg =0;

/**
 * draw all pictures of the array 
 */
function fillContainer() {
    document.getElementById('full-view').style.display="none";
    let pictureContainer = document.getElementById('pictureContainer');
    pictureContainer.innerHTML = '';
    for (let i = 0; i < pictures.length; i++) {
        pictureContainer.innerHTML += `
        <div class = singlePicture onclick = "openImage(${i})">
        <img src = "${pictures[i]}"></img>
        </div>
         `;
    }
}

/**
 * change the selected picture to fullscreen mode
 * @param {integer} position is the index of the picture in the array
 */
function openImage(position) {
    currentImg = position;
    document.getElementById('pictureContainer').style.display="none";
    document.getElementById('headline').style.display="none";
    let fullView = document.getElementById('full-view');
    fullView.style.display = "flex";
    document.getElementById('view-pic').src = pictures[currentImg];
}

/**
 * draw all pictures of the array 
 */
function closeBtn() {
    fillContainer();
}

/**
 * show the picture before
 */
function backBtn() {
    currentImg--;
    if(currentImg < 0)
        currentImg = pictures.length - 1;
    document.getElementById("view-pic").src = pictures[currentImg];
}

/**
 * show the picture behind
 */
function nextBtn() {
    currentImg++;
    if(currentImg > pictures.length - 1)
        currentImg = 0;
    document.getElementById("view-pic").src = pictures[currentImg];
}