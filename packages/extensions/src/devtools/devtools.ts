chrome.devtools.panels.create(
  "Console Vue Query Devtools",
  "assets/icon.png", 
  "panel.html",
  (panel: chrome.devtools.panels.ExtensionPanel) => {
    console.log('Vue Query Devtools Panel Created');
  }
);