document.getElementById("spin-btn").addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 10000000000);
    let formattedNum = String(randomNum).padStart(10, '0');
    document.getElementById("number-display").innerText = formattedNum;

    // Append the new winner to the winner list
    let winnerListBody = document.getElementById("winner-list-body");
    let newRow = winnerListBody.insertRow();
    newRow.insertCell(0).innerText = winnerListBody.rows.length + 1;
    newRow.insertCell(1).innerText = "U-Money ມູນຄ່າ 700,000 ກີບ";
    newRow.insertCell(2).innerText = formattedNum;
});
