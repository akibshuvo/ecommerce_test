const axios = require('axios');
const OrderModel = require ('../model/orderModel')
const Cart = require('../model/cartModel')
const nodemailer = require("nodemailer");

async function paymentgetway(req, res) {
  let data = {
    "store_id": "aamarpaytest",
    "tran_id": `${Date.now()}`,
    "success_url": "http://localhost:3000/success",
    "fail_url": "http://www.merchantdomain.com/failedpage.html",
    "cancel_url": "http://www.merchantdomain.com/cancelpage.html",
    "amount": req.body.amount,
    "currency": "BDT",
    "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
    "desc": "Merchant Registration Payment",
    "cus_name": req.body.cus_name,
    "cus_email": req.body.cus_email,
    "cus_add1": req.body.cus_add1,
    "cus_add2": "Mohakhali DOHS",
    "cus_city": "Dhaka",
    "cus_state": "Dhaka",
    "cus_postcode": req.body.cus_postcode,
    "cus_country": "Bangladesh",
    "cus_phone": req.body.cus_phone,
    "type": "json"
  };

  try {
    let response = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    res.send({ payment_url: response.data.payment_url });
    console.log(response.data.payment_url);

   let order = new OrderModel({
    "tran_id": `${Date.now()}`,
    "amount": req.body.amount,
    "cus_name": req.body.cus_name,
    "cus_email": req.body.cus_email,
    "cus_add1": req.body.cus_add1,
    "cus_postcode": req.body.cus_postcode,
    "cus_phone": req.body.cus_phone,
    ownerid: '665c7bbe481a0ebe46597e76'
    
   })
   order.save()

   function currentDate(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; 
    var year = today.getFullYear();


    var formattedDate = day + "/" + month + "/" + year;  
    return formattedDate
   }

   let cartData = await Cart.find({ownerid:'665c7bbe481a0ebe46597e76'}).populate('productID')

   console.log(cartData)

   function detailsProducts(){
    return cartData.map(item=>(  
   ` <tr>
      <td style="border: 1px solid #000; padding: 10px;">${item.productID.productName}</td>
      <td style="border: 1px solid #000; padding: 10px;">${item.quantity}</td>
      <td style="border: 1px solid #000; padding: 10px;">${item.productID.sellPrice}</td>
      </tr> `
    ))
   }

   const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "resmiakther73@gmail.com",
      pass: "gaxw rlrr ltdh oasw",
    },
  });

  const info = await transporter.sendMail({
    from: "resmiakther73@gmail.com", // sender address
    to: req.body.cus_email , // list of receivers
    subject: "Email Verified Code ✔", // Subject line
    html: `<table style="width:100%;border-collapse:collapse;border:1px solid #000;margin-bottom:20px"><tr><td style=text-align:center;padding:10px;font-size:20px;font-weight:700 colspan=2>E-Commerce Purchase Invoice<tr><td style=padding:10px><b>Customer Details:</b><br>Name: ${req.body.cus_name}<br>Email: john.doe@email.com<br>Address:${req.body.cus_add1}<br>Phone: +1234567890<td style=padding:10px;text-align:right><b>Order Date:</b> ${currentDate()}<br><b>Invoice No:</b> ${Date.now()}</table><table style="width:100%;border-collapse:collapse;border:1px solid #000"><tr style=background-color:#f0f0f0><th style="border:1px solid #000;padding:10px">Product Name<th style="border:1px solid #000;padding:10px">Quantity<th style="border:1px solid #000;padding:10px">Unit Price<th style="border:1px solid #000;padding:10px">Total Price<tr>${detailsProducts()}<tr><td style="border:1px solid #000;padding:10px;text-align:right"colspan=3>Subtotal<td style="border:1px solid #000;padding:10px">$175<tr><td style="border:1px solid #000;padding:10px;text-align:right"colspan=3>Delivery Fee<td style="border:1px solid #000;padding:10px">$10<tr><td style="border:1px solid #000;padding:10px;text-align:right"colspan=3><b>Total</b><td style="border:1px solid #000;padding:10px"><b>${ req.body.amount}</b></table><table style=width:100%;margin-top:20px><tr><td style=padding:10px;text-align:center><b>Thank you for your purchase!</b><br>If you have any questions, contact us at support@ecommerce.com</table>`, // html body
  });

   


  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Payment processing failed');
  }
}

module.exports = paymentgetway;