window.onload = function () {

  var btn = document.getElementById("payBtn");

  if (!btn) {
    alert("Button not found!");
    return;
  }

  btn.onclick = function () {

    var options = {
      "key": "rzp_test_SaXfZZgeKflC3W", // apni key
      "amount": 8000, // ₹80 = 8000
      "currency": "INR",
      "name": "Tiffin Service",
      "description": "Meal Payment",

      "handler": function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
      }
    };

    var rzp = new Razorpay(options);
    rzp.open();
  };

};