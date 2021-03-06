/**
 * @file X-notifier script for unread posts on python-forum.org
 * @author: stranac <stranac@hotmail.com>
 */

var name = 'Python Forum';
var ver = '2015-12-09';

function init() {
  this.loginData = [
    'http://python-forum.org/ucp.php?mode=login',
    'username',
    'password',
    'login=Login&autologin=on'
  ];
  this.dataURL = 'http://python-forum.org/search.php?search_id=unreadposts';
  this.viewURL = 'http://python-forum.org/search.php?search_id=unreadposts';
  this.viewDomain = 'python-forum.org';
}

function getIconURL() {
  return 'https://www.python.org/static/favicon.ico';
}

function getCount(aData) {
  var fnd = aData.match(/Search found (\d+) match/);
  return fnd ? fnd[1] : -1;
}
