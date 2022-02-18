const hambergerNav = document.getElementById("hamberger-nav");

console.log(hambergerNav);
hambergerNav.addEventListener("click", () => {
  hambergerNav.classList.toggle("active");
});
