chrome.tabs.onActivated.addListener(function() {
	chrome.tabs.getSelected(undefined, (selectedTab) => {
		console.log(selectedTab);
		if(selectedTab.url.includes("cypien"))
		{
			chrome.browserAction.setIcon({path: '/logo_good.png'});
		}
		else
		{
			chrome.browserAction.setIcon({path: '/logo.png'});
		}
	});
});