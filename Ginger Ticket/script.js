function calculateTotal() {
  const regularPrice = 5000;
  const vipPrice = 25000;
  const vvipPrice = 50000;
  const familyTablePrice = 200000;
  const goldPrice = 2000000;
  const platinumPrice = 3000000;

  const regularTickets =
    parseInt(document.getElementById("regular").value) || 0;
  const vipTickets = parseInt(document.getElementById("vip").value) || 0;
  const vvipTickets = parseInt(document.getElementById("vvip").value) || 0;
  const familyTableTickets =
    parseInt(document.getElementById("family-table").value) || 0;
  const goldTickets = parseInt(document.getElementById("gold").value) || 0;
  const platinumTickets =
    parseInt(document.getElementById("platinum").value) || 0;

  const total =
    regularTickets * regularPrice +
    vipTickets * vipPrice +
    vvipTickets * vvipPrice +
    familyTableTickets * familyTablePrice +
    goldTickets * goldPrice +
    platinumTickets * platinumPrice;

  document.getElementById("total-amount").innerText = total.toLocaleString();
}
