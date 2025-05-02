chrome.devtools.panels.create(
    'Vue Query',
    'assets/icon.png',
    'panel.html',
    (panel: chrome.devtools.panels.ExtensionPanel) => {
        console.log('Vue Query Devtools Panel Created', panel);
    }
);
