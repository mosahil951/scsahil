<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Casual Creation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fdf2e9;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    header {
      background: #fff3e0;
      padding: 20px;
    }
    header img {
      height: 100px;
    }
    .kurti {
      border: 1px solid #ccc;
      background: white;
      margin: 20px auto;
      padding: 20px;
      width: 300px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #ccc;
    }
    .kurti img {
      width: 100%;
      border-radius: 8px;
    }
    .price {
      font-size: 18px;
      margin: 10px 0;
      color: #e91e63;
    }
    .buy-btn {
      background: #ff9800;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
    .options, .cod-form, .upi-info {
      display: none;
      margin-top: 10px;
    }
    input {
      margin: 5px 0;
      padding: 5px;
      width: 90%;
    }
    .whatsapp-btn {
      margin-top: 20px;
      display: inline-block;
      background-color: #25d366;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>

<header>
  <img src="logo.png" alt="SC Logo">
  <h1>Casual Creation</h1>
</header>

<div class="kurti">
  <img src="kurti1.jpg" alt="Kurti Image">
  <div class="price">Price: ₹209</div>
  <button class="buy-btn" onclick="showOptions(this)">Buy Now</button>

  <div class="options">
    <button onclick="showCOD(this)">Cash on Delivery</button>
    <button onclick="showUPI(this)">UPI</button>
  </div>

  <div class="cod-form">
    <input placeholder="Full Name" /><br>
    <input placeholder="State" /><br>
    <input placeholder="Village" /><br>
    <input placeholder="House No." /><br>
    <input placeholder="Watermark" /><br>
    <button>Submit</button>
  </div>

  <div class="upi-info">
    <p>Pay via UPI: <strong>9305627049@fam</strong></p>
  </div>
</div>

<a class="whatsapp-btn" href="https://wa.me/917039097018" target="_blank">
  Message on WhatsApp
</a>

<script>
  function showOptions(btn) {
    const box = btn.parentElement;
    box.querySelector('.options').style.display = 'block';
  }

  function showCOD(btn) {
    const box = btn.parentElement.parentElement;
    box.querySelector('.cod-form').style.display = 'block';
    box.querySelector('.upi-info').style.display = 'none';
  }

  function showUPI(btn) {
    const box = btn.parentElement.parentElement;
    box.querySelector('.upi-info').style.display = 'block';
    box.querySelector('.cod-form').style.display = 'none';
  }
</script>

</body>
</html>
