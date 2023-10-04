const express = require('express');
const stripe = require('stripe')('sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ');

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
   console.log(req.body);
   const items = req.body.items;
   let lineItems = [];
   items.map((product)=> {
       lineItems.push(
           {
               price: product.id,
               quantity: product.quantity
           }
       )
   });

   const session = await stripe.checkout.sessions.create({
       line_items: lineItems,
       mode: 'payment',
       success_url: "http://localhost:3000/success",
       cancel_url: "http://localhost:3000/cancel"
   });

   res.send(JSON.stringify({
       url: session.url
   }));
});

app.listen(4242, () => console.log("Listening on port 4242!"));