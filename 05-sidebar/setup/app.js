// add the close button
// .show-sidebar [toggle this class] on sidebar
let sidebarBtn = document.querySelector('.sidebar-toggle');
let closeBtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');

sidebarBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
function toggleSidebar() {
    sidebar.classList.toggle('show-sidebar');
}