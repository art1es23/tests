// import gsap from 'gsap';

const sliderWorks = () => {
    // console.clear();
    console.log('asdasdas');
    const contentImg = document.getElementById("contentImg");
    const dot = document.getElementById("dot");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const list = document.querySelectorAll(".slide");
    let pageindex = 0;
    let timeContent = null;
    let speed = 7000;
    let random = false;

    if (random) {
        pageindex = Math.floor(Math.random() * (list.length - 1) + 1)
    }

    const removeActive = () => {
        list.forEach(function (item) {
            item.className = "slide";
        });
        for (var d = 0; d < dotlist.length; d++) {
            dotlist[d].classList.remove('active');
        }
    }

    const showPhoto = (e) => {
        e.preventDefault();
        removeActive();

        pageindex = Number(this.dataset.index);
        switchPhoto(this);
        dotlist[pageindex].classList.add('active');
        clearInterval(timeContent);
        timeStart();
    }

    const switchPhoto = (target) => {
        contentImg.style.backgroundImage = 'url(' + target.children[0].src + ')';
        target.className = "slide active";
    }

    const leftFunc = (e) => {
        e.preventDefault();
        removeActive();
        pageindex = pageindex - 1;
        if (pageindex < 0) {
            pageindex = list.length - 1;
        }
        switchPhoto(list[pageindex]);
        dotlist[pageindex].classList.add('active');
        clearInterval(timeContent);
        timeStart();
    }

    const rightFunc = (e) => {
        e.preventDefault();
        removeActive();
        pageindex = pageindex + 1;
        if (pageindex > list.length - 1) {
            pageindex = 0;
        }
        switchPhoto(list[pageindex]);
        dotlist[pageindex].classList.add('active');
        clearInterval(timeContent);
        timeStart();
    }

    list.forEach(function (item, index) {
        item.addEventListener("click", showPhoto);
    });

    leftArrow.addEventListener("click", leftFunc);
    rightArrow.addEventListener("click", rightFunc);

    const dotCreate = () => {
        var dotHtml = '';
        for (var i = 0; i < list.length; i++) {
            dotHtml += '<span>' + i + '</span>'
        }
        dot.innerHTML = dotHtml;
    }
    dotCreate();

    var dotlist = dot.querySelectorAll('span');

    const currentDot = () => {
        pageindex = Number(this.textContent);
        removeActive();
        switchPhoto(list[pageindex]);
        this.classList.add('active');
        clearInterval(timeContent);
        timeStart();
    }

    dotlist.forEach(function (item, index) {
        item.addEventListener("click", currentDot);
    });

    const timeStart = () => {
        timeContent = setInterval(function () {
            if (random) {
                pageindex = Math.floor(Math.random() * (list.length - 1) + 1) //random
            }
            pageindex++;

            if (pageindex > list.length - 1) {
                pageindex = 0;
            }
            removeActive();
            switchPhoto(list[pageindex]);
            dotlist[pageindex].classList.add('active');
            // pageCount()
        }, speed)
    }
    timeStart();

    function init() {
        switchPhoto(list[pageindex]);
        dotlist[pageindex].classList.add('active');
    }

    init();
}