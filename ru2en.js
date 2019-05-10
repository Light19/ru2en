function onValueGot (result)
{
	if (typeof result.enabled === "undefined")
		enabled = {status: true};
	else
		enabled = result.enabled;
		
	if (enabled.status)
	{
		var s = window.location.toString().toLowerCase();
		if (s.includes("/ru/"))
			document.location.href = s.replace("/ru/", "/en/");
		else if (s.includes("/ru-ru/"))
			document.location.href = s.replace("/ru-ru/", "/en-us/");
		else if (s.includes("://ru."))
			document.location.href = s.replace("://ru.", "://en.");
	}
}

function onError(error) {
  console.log("Error: ${error}");
}

browser.storage.local.get("enabled").then(onValueGot, onError);