var data = [];
function storeInput() {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const telephone = document.getElementById("telephone").value;
  const mail = document.getElementById("mail").value;

  const inputArray = {
    first_name: first_name,
    last_name: last_name,
    telephone: telephone,
    mail: mail,
  };

  data.push(inputArray);
  localStorage.setItem("data", JSON.stringify(data));

  getData();
}

function getData() {
  var inputData = localStorage.getItem("data");
  document.getElementById("one").innerHTML = "";

  JSON.parse(inputData).forEach((element, index) => {
    const newRow = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = element.first_name;
    newRow.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.textContent = element.last_name;
    newRow.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.textContent = element.telephone;
    newRow.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.textContent = element.mail;
    newRow.appendChild(cell4);

    document.getElementById("one").appendChild(newRow);
    // document.removeChild("one").appendChild(newRow);
  });
  console.log(data);
}
// getData();
// function delete(){
//   document.removeChild("one").appendChild(newRow);
// }
