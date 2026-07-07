function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".sidebar a").forEach(link => {
        link.classList.remove("active");
    });

    event.target.classList.add("active");
}

// ページを開いたらホームを表示
window.onload = function(){
    showPage("home");
}