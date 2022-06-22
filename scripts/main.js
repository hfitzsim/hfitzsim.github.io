window.onload = () => {
    let portfolio = document.getElementById("portfolio");
    portfolio.addEventListener("mouseenter", () => {
        document.getElementById("dropdown-content").style.display = "block";
    });
    portfolio.addEventListener("mouseleave", () => {
        document.getElementById("dropdown-content").style.display = "none";
    });
}
