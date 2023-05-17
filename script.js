//Sidebar
let sections = document.querySelector(".sections")
let sidebar = document.querySelector(".sidebar")
let closeSidebar = document.querySelector(".close-sidebar")

// open or close sidebar
sections.onclick = () => {
    sidebar.classList.add("active")
};
closeSidebar.onclick = () => {
    sidebar.classList.remove("active")
};

// sidebar working js
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

