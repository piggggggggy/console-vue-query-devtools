chrome.devtools.panels.create(
  "Console Vue Query Devtools",
  "assets/icon.png", 
  "devtools/panel.html",
  (panel: chrome.devtools.panels.ExtensionPanel) => {
    console.log('Vue Query Devtools Panel Created');
  }
);