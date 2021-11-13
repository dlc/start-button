function imdbLookup(contextInfo, tab) {
  chrome.tabs.create({
    'url' : 'http://www.imdb.com/find?s=all&q=' + contextInfo.selectionText
  });
}

chrome.contextMenus.create({
    'title': 'Search IMDB',
    'contexts': [
      'selection'
    ],
    'onclick': imdbLookup
});
