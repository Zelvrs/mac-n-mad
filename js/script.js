// -Toggle class active
const nav = document.querySelector(".nav");
const hamburger = document.querySelector("#hamburger-menu");

// -ketika hamburger menu di klik
hamburger.onclick = (e) => {
	e.preventDefault();
	nav.classList.toggle("active");
};

// -klik diluar sidebar untuk menghilangkan nav active
document.addEventListener("click", (e) => {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});

// -animasi history
const elHidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

elHidden.forEach((el) => observer.observe(el));


// -menghentikan animasi saat load pertama kali
setTimeout(() => {
	document.body.className = "";
}, 500);
