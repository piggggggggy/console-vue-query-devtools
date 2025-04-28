chrome.devtools.panels.create(
  "Vue Query",
  "", 
  "src/devtools/panel.html",
  function(panel) {
    console.log('Vue Query Devtools Panel Created');
  }
);