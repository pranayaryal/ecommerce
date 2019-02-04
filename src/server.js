const app = require('express')()
const stripe = require('stripe')('sk_test_kgqSnqchn19Vya946n5TZDkp')

app.use(require('body-parser').text());


app.post('/charge', async (req, res) => {
    console.log(req)
    try {
        let { status } = await stripe.charges.create({
            amount: 20000,
            currency: "usd",
            description: "An Example Charge",
            source: req.body

        });
        res.json({status})
    } catch (err) {
        res.status(500).end();
    } 

});

app.listen(9000, () => console.log("Listening on port 9000"));
