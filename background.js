function onValueGot(result)
{
		if (typeof result.enabled === "undefined")
			enabled = {status: true};
		else
			enabled = result.enabled;
		
		enabled.status = enabled.status ? false : true;
		browser.storage.local.set({enabled}).then(setItem, onError);
		if (enabled.status)
			browser.browserAction.setIcon({path: "icons/48.png"});
		else
			browser.browserAction.setIcon({path: "icons/48-gray.png"});
	}

function setItem() {
}

function onError(error) {
  console.log("Error: ${error}");
}

function switchEnabled() {
	browser.storage.local.get("enabled").then(onValueGot, onError);
}

browser.browserAction.onClicked.addListener(switchEnabled);