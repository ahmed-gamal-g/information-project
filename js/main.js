// // start header
// let header = document.querySelector(".header")

// window.onscroll = function () {
//   if (this.scrollY > 100 ) {
//     console.log("test");
    
//     // header.style.position = "fixed"
//   }
// }
// // end header




let containerCard = document.querySelector(".card-article-all .container");
// let card = document.querySelector(".card");

console.log(containerCard);

let cardOne = {
  image: "images/cat-01.jpg",
};
let cardTwo = {
  image: "images/cat-02.jpg",
};
let cardThree = {
  image: "images/cat-03.jpg",
};
let cardFour = {
  image: "images/cat-04.jpg",
};
let cardFive = {
  image: "images/cat-05.jpg",
};
let cardSix = {
  image: "images/cat-06.jpg",
};
let cardSeven = {
  image: "images/cat-07.jpg",
};
let cardEight = {
  image: "images/cat-08.jpg",
};

containerCard.innerHTML = `

    <div class="card">
        <div class="image-card">
          <img src="${cardOne.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardTwo.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardThree.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardFour.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardFive.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardSix.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardSeven.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
    <div class="card">
        <div class="image-card">
          <img src="${cardEight.image}" alt="">
        </div>
        <div class="text-card">
          <h3>Text Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi!</p>
          <hr>
          <div class="read-more">
            <a href="">Read More</a>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
    </div>
`;

// start gallery
const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");
galleryBorder = document.querySelectorAll(".gallery .gallery-item-inner img");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    console.log(event.target);

    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
        // for (let i = 0; i < galleryBorder.length; i++) {
        //   galleryBorder[i].style.border = "1px solid red";
        // }
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
// end gallery


// start header
let header = document.querySelector(".header")
let headerLogo = document.querySelector(".header .logo")
let headerLink = document.querySelectorAll(".nav-link-height")


// start our-skills
let ourSkills = document.getElementById("our-skills");
let progressSkills = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (this.scrollY > 300 ) {
    // console.log("test");
    for (let i = 0; i < headerLink.length; i++){
      headerLink[i].style.height = "100%"
      headerLogo.style.height = "100%"
    }
    
  } else {
    for (let i = 0; i < headerLink.length; i++){
      headerLink[i].style.height = "72px"
      headerLogo.style.height = "72px"
    }
  }

  // ****************************************************

  if (window.scrollY > ourSkills.offsetTop -150) {
    progressSkills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }

      // Stats Increase Number
      if (window.scrollY >= statsSection.offsetTop - 150) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
};


// end our-skills

// start stats
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// end stats

//start time event

let countDownDate = new Date("Dec 31 , 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let resultDate = countDownDate - dateNow;
  let dayDown = Math.floor(resultDate / (1000 * 60 * 60 * 24));
  let hourDown = Math.floor(
    (resultDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((resultDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((resultDate % (1000 * 60)) / 1000);

  // console.log(minutes);

  document.querySelector(".days").innerHTML = dayDown;
  document.querySelector(".hour").innerHTML = hourDown;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (resultDate < 0) {
    clearInterval(counter);
  }
}, 1000);

// end time event

// start video
const main_video = document.querySelector(".preview video");
const main_video_title = document.querySelector(".preview .info");
const video_playlist = document.querySelector(".video-playlist .videosss");

let data = [
  {
    id: "a1",
    title: "Playing With The DNS",
    name: "manipulate text background.mp4",
    duration: "2:47",
  },
  {
    id: "a2",
    title: "Everything About The Virtual Hosts",
    name: "build gauge with css.mp4",
    duration: "2:45",
  },
  {
    id: "a3",
    title: "How To Monitor Your Website",
    name: "3D popup card.mp4",
    duration: "24:49",
  },

  {
    id: "a4",
    title: "Ys Oath In Felghana Overview",
    name: "customize HTML5 form elements.mp4",
    duration: "3:59",
  },
  {
    id: "a5",
    title: "Ys Series All Games Ending",
    name: "custom select box.mp4",
    duration: "4:25",
  },
  {
    id: "a6",
    title: "whats the code",
    name: "techno.mp4",
    duration: "4:25",
  },
  {
    id: "a7",
    title: "vid-7",
    name: "vid-7.mp4",
    duration: "1:25",
  },
];

data.forEach((video, i) => {
  let video_element = `
                <div class="video" data-id="${video.id}">
                    <p class="title">${video.title}</p>
                    <span class="time">${video.duration}</span>
                </div>
    `;
  video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll(".video");
videos[0].classList.add("active");
// videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach((selected_video) => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove("active");
      // all_videos.querySelector('img').src = 'images/play.svg';
    }

    selected_video.classList.add("active");
    // selected_video.querySelector('img').src = 'images/pause.svg';

    let match_video = data.find(
      (video) => video.id == selected_video.dataset.id
    );
    main_video.src = "videos/" + match_video.name;
    main_video_title.innerHTML = match_video.title;
  };
});
// end video

