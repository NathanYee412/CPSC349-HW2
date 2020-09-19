var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

var id1 = "img/otter1.jpg";
var id2 = "img/otter2.jpg";
var id3 = "img/otter3.jpg";
var id4 = "img/otter4.jpg";
var id5 = "img/otter5.jpg";
var id6 = "img/flexboxFroggy.jpg";
var id7 = "img/gridGarden.jpg";

var t1 = "Stayin' Alive";
var t2 = "How Deep Is Your Love";
var t3 = "You Should Be Dancing";
var t4 = "Night Fever";
var t5 = "To Love Somebody";
var t6 = "Flexbox Froggy";
var t7 = "Grid Garden";
 
var counter = 0;


function prev() {
    var THUMBARR = [id1, id2, id3, id4, id5, id6, id7];
    var TITLEARR = [t1, t2, t3, t4, t5, t6, t7];
    var i = counter;
    console.log(i);
    if (counter === 0) {
        counter = 7;
    }
    counter -= 1;
    setDetails(THUMBARR[i], TITLEARR[i]);
}

function next() {
    'use strict';
    var THUMBARR = [id1, id2, id3, id4, id5, id6, id7];
    var TITLEARR = [t1, t2, t3, t4, t5, t6, t7];
    var i = counter;
    console.log(i);
    if (counter === 6) {
        counter = -1
    }
    counter += 1;
    setDetails(THUMBARR[i], TITLEARR[i]);
};



function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
      frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
  }

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
      event.preventDefault();
      console.log(event.keyCode);
      if (event.keyCode === ESC_KEY) {
          hideDetails();
      }
    });
  }

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();