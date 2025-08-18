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