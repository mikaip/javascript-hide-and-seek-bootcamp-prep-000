function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0, l = lis.length; i < l; i++) {
    var num = parseInt(lis[i].innerHTML);
    num += n;
    lis[i].innerHTML = num.toString();
  }
}

function deepestChild() {
  var divs = document.getElementById('app').querySelectorAll('#grand-node div')
  for(let i = 0, l = divs.length; i < l; i++) {
      return document.querySelector('div')
    }
}
