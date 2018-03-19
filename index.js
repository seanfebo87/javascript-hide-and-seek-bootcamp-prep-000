function getFirstSelector(selector) {
  return (document.querySelector(selector))
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(n) {
 var x = (document.querySelectorAll("ul.ranked-list li"))
 for (var i = 0; i < x.length; i++) {
   x[i].innerhtml = (i + n).toString()
 }
}