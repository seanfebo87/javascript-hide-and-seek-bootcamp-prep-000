function getFirstSelector(selector) {
  return (document.querySelector(selector))
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
 var x = (document.querySelectorAll("ul.ranked-list li"))
 for (var i = 0; i < x.length; i++) {
   x[i].innerHTML = parseInt(x[i].innerHTML) + n 
 }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}