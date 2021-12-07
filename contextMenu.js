/* General-purpose utility searches
  {
    'title': '',
    'url': '',
  },
*/

var SITES = [
  {
    'title': 'Wikipedia',
    'url': 'http://en.wikipedia.org/wiki/Special:Search?search=',
  },

  {
    'title': 'Google Image search',
    'url': 'https://www.google.com/search?newwindow=1&safe=off&tbm=isch&q='
  },
  {
    'title': 'IMDB',
    'url': 'http://www.imdb.com/find?s=all&q=',
  },

  {
    'title': 'Amazon',
    'url': 'http://smile.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&x=0&y=0&tag=dlc-20&field-keywords=',
  },

];

/* D&D specific searches */
var DND = [
  {
    'title': "Magic items",
    'url': 'https://www.dndbeyond.com/magic-items?filter-search=',
  },

  {
    'title': "Monsters",
    'url': 'https://www.dndbeyond.com/monsters?filter-search=',
  },

  {
    'title': "Spells",
    'url': 'https://www.dndbeyond.com/spells?filter-search=',
  },

];

var parent_menu = chrome.contextMenus.create({
  'title': "dlc's utilities",
  'contexts': ['selection'],
});

chrome.contextMenus.create({
  'title': "Lookup '%s'",
  'parentId': parent_menu,
  'contexts': ['selection']
});

/* Separator */
chrome.contextMenus.create({
  'type': 'separator',
  'parentId': parent_menu,
  'contexts': ['selection']
});

SITES.forEach(function(site) {
  chrome.contextMenus.create({
      'title': ' - ' + site.title,
      'parentId': parent_menu,
      'contexts': ['selection'],
      'onclick': function(context, tab) {
        chrome.tabs.create({'url': site.url + context.selectionText});
      }
  });
});

/* Separator */
chrome.contextMenus.create({
  'type': 'separator',
  'parentId': parent_menu,
  'contexts': ['selection']
});

DND.forEach(function(site) {
  chrome.contextMenus.create({
      'title': ' - ' + site.title,
      'parentId': parent_menu,
      'contexts': ['selection'],
      'onclick': function(context, tab) {
        chrome.tabs.create({'url': site.url + context.selectionText});
      }
  });

});

