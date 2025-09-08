const header = document.getElementById("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", ()=>{

    if(Math.abs(window.scrollY - lastScrollY) < 50){
        return;
    }
    else if(window.scrollY > lastScrollY){
        header.style.top = "-100px";
    }
    else{
        header.style.top = "0";
    }

    lastScrollY = window.scrollY;
});


//back to top / home page
const logobtn = document.getElementById("logo");

logobtn.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
    homepage.classList.remove("displayhidden");
    subsection.classList.add("noview");
});

//hamburger action
const hamburger = document.getElementById("hamburger");
const sideBarContainer = document.getElementById("sideBarContainer");
const sideBar = document.getElementById("sideBar");

hamburger.addEventListener("click", event =>{
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
    sideBarContainer.classList.toggle("hidden");
    if(sideBar.classList.contains("active")){
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "";
        document.querySelectorAll(".menuDrop").forEach(menu =>{
            menu.classList.remove("drop-down");
        });
        document.querySelectorAll(".material-symbols-outlined").forEach(arrow =>{
            arrow.classList.remove("rotate");
        });
    }
});


//drop down function
const listName = document.querySelectorAll(".listName");

listName.forEach(list=>{
    list.addEventListener("click", e =>{
        
        const menuList = list.parentElement;
        const dropdown = menuList.querySelector(".menuDrop");
        const arrow = menuList.querySelector(".material-symbols-outlined");

        document.querySelectorAll(".menuDrop").forEach(other =>{
            if (other !== dropdown){
                other.classList.remove("drop-down");
            }
        });

        document.querySelectorAll(".material-symbols-outlined").forEach(other =>{
            if(other !== arrow){
                other.classList.remove("rotate");
            }
        });
        dropdown.classList.toggle("drop-down");
        arrow.classList.toggle("rotate");
    });
});

//hover highlight 
const menuDrop = document.querySelectorAll(".menuDrop li");   

menuDrop.forEach(drop =>{
    drop.addEventListener("mouseover", e =>{
        const listName = e.target.closest(".menuList").querySelector(".listName")

        listName.classList.add("highlight");
    })
});

menuDrop.forEach(drop =>{
    drop.addEventListener("mouseout", e =>{
        const listName = e.target.closest(".menuList").querySelector(".listName");
    
        listName.classList.remove("highlight");
    })
    
});

//subsection
const homepage = document.getElementById("homepage");
const subsection = document.getElementById("subsection");

const breeds = {
    Chihuahua :{
        title: "Chihuahua",
        image: "./images/chihuahuaimg.jpg",
        image2:"./images/Chihuahuaimage2.avif",
        description: "Chihuahuas are one of the smallest dog breeds. The chihuahua is believed to originate from Mexico. The breed also has its bad rumors because it is know as agressive but that not the case. Chihuahuas are a friendly breed and are very loyal. Fun fact Aztecs nobles would have a lot of chihuahuas as they were believed to guide them in the after life.",
        //change the youtube link so have /embed/ then put the video id
        video: "https://www.youtube.com/embed/bgw55YuLVvM"
    }
}

menuDrop.forEach(li =>{
    li.addEventListener("click", e =>{
        hamburger.classList.toggle("active");
        sideBar.classList.toggle("active");
        sideBarContainer.classList.toggle("hidden");
        document.body.style.overflow = "";
        //remove the arrow rotate and the drop down 
        listName.forEach(liname =>{
            const menuList = liname.parentElement;
            const dropdown = menuList.querySelector(".menuDrop");
            const arrow = menuList.querySelector(".material-symbols-outlined");

        document.querySelectorAll(".menuDrop").forEach(other =>{
            if (other !== dropdown){
                other.classList.remove("drop-down");
            }
        });

        document.querySelectorAll(".material-symbols-outlined").forEach(other =>{
            if(other !== arrow){
                other.classList.remove("rotate");
            }
        });
        });

        //lets the target id name become the class select and gets all the 
        //information needed from the class to display on screen
        
        let clickedli = e.target.id;
        const setTitle = document.getElementById("subsection-header")
        const setimage1 = document.getElementById("subsection-image");
        const setimage2 = document.getElementById("subsection-image2");
        const settext = document.getElementById("subsection-text");
        const videocontainer = document.getElementById("videobox");

        homepage.classList.add("displayhidden");
        subsection.classList.remove("noview");
        
        let key = breeds[clickedli];
        setTitle.textContent = key.title;
        setimage1.src = key.image;
        setimage2.src = key.image2;
        settext.textContent = key.description;
        videocontainer.src = key.video;
        window.scrollTo({top:0, behavior:"smooth"});
    });
})