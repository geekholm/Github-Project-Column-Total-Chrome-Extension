(function() {
  var desiredIndex = null;

  var columnheaders = document.querySelectorAll('[role=columnheader]');
  for (let i = 0; i < columnheaders.length; i++) {
    if (columnheaders[i].firstElementChild.firstChild.innerText == 'h') {
      desiredIndex = i;
    }
  }

  var hTotal = 0;
  var rows = document.querySelectorAll('[role=row]');
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].children[desiredIndex] && rows[i].children[desiredIndex].firstElementChild && rows[i].children[desiredIndex].firstElementChild.firstChild) {
      var thing = parseFloat(rows[i].children[desiredIndex].firstElementChild.firstChild.innerText);
      if (!isNaN(thing)) {
        hTotal = hTotal + thing;
      }
    }
  }
  alert(hTotal);
  // var aChild = document.createElement("p");
  // aChild.classList.add("fiDMsB");
  // aChild.style.marginLeft = '3px';
  // var total = document.createTextNode(hTotal);
  // aChild.appendChild(total);
  // columnheaders[desiredIndex].firstElementChild.firstChild.appendChild(aChild);
})();

