var s = window.location.toString().toLowerCase();
console.log(s);
if (s.includes("/ru/"))
	document.location.href = s.replace("/ru/", "/en/");
else if (s.includes("/ru-ru/"))
	document.location.href = s.replace("/ru-ru/", "/en-us/");
else if (s.includes("://ru."))
	document.location.href = s.replace("://ru.", "://en.");