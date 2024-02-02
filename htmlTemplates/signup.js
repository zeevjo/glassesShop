const head = `<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(204, 202, 202);
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px;
    font-family: serif;
  }
  .header {
    background-color: rgb(0, 0, 0);
    font-family: serif;
    padding: 10px;
    text-align: center;
    color: rgb(250, 204, 0);
    text-align: center;
  }
  .content {
    padding: 20px;
    text-align: center;
    font-family: serif;
    background-color: rgb(204, 202, 202);
    color: black;
  }
  .footer {
    background-color: rgb(0, 0, 0);
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: rgb(250, 204, 0);
    font-family: serif;
  }
</style>
</head>`;
const sginupWelcomeMail = `<!DOCTYPE html>
<html>
${head}
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to JOSEPH Glasses Shop</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>
          Thank you for registering with JOSEPH Glasses Shop, the home of
          high-quality, stylish eyewear. We are thrilled to have you with us.
        </p>
        <p>
          As a member, you'll be the first to know about our exclusive
          collections, special offers, and latest trends in the world of
          eyewear.
        </p>
        <p>We look forward to helping you find the perfect pair of glasses.</p>
        <p>Best regards,</p>
        <p>The JOSEPH Glasses Shop Team</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 JOSEPH Glasses. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`;

const orderEmailTemplate = `<!DOCTYPE html>
<html>
${head}
  <body>
    <div class="container">
      <div class="header">
        <h1>Thank You for Your Order!</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>
          We're excited to let you know that we've received your order at JOSEPH Glasses Shop. Thank you for choosing us for your eyewear needs!
        </p>
        <p>
          Your selection is being prepared with care, and we will notify you as soon as it's ready to ship. We're committed to providing you with the best service and highest-quality products.
        </p>
        <p>Best regards,</p>
        <p>The JOSEPH Glasses Shop Team</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 JOSEPH Glasses. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`;

module.exports = {
  sginupWelcomeMail,
  orderEmailTemplate,
};
