document.querySelector("#form").addEventListener("submit", add);
var arr = JSON.parse(localStorage.getItem("karlo")) || [];
display(arr);

function filter() {
  console.log("here");
  var Select = document.querySelector("#filter").value;
  var Sort = arr.filter(function (elem) {
    return elem.category == Select;
  });
  console.log(Sort);
  display(Sort);
}

function add(event) {
  event.preventDefault();
  var ticketobj = {
    category: form.select.value,
    body: form.body.value,
    date: form.date.value,
    number: form.number.value,
  };
  arr.push(ticketobj);
  console.log("here");
  display(arr);
  localStorage.setItem("karlo", JSON.stringify(arr));
}

function display(arr) {
  document.querySelector("tbody").innerHTML = "";
  var count = 1;

  arr.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    td6.textContent = "Delete";
    td6.addEventListener("click", function () {
      deleteTask(index);
    });

    td1.textContent = count++;
    td2.textContent = elem.category;
    td3.textContent = elem.body;
    td4.textContent = elem.date;
    td5.textContent = elem.number;

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

function deleteTask(index) {
  console.log(index);
  arr.splice(index, 1);
  localStorage.setItem("karlo", JSON.stringify(arr));
  display(arr);
}
