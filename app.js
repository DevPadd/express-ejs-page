const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
    res.render("index", {
        layout: "layout/default",
        title: "Halaman Utama",
    });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "Halaman About", layout: "layout/default" });
});
app.get("/contact", (req, res) => {
    const mhs = [
        {
            nama: "dio nopal",
            email: "dionopal@emial.com",
        },
        {
            nama: "galih sat",
            email: "galihsat@emial.com",
        },
        {
            nama: "azzams",
            email: "azzamsiaash@emial.com",
        },
    ];
    res.render("contact", {
        nama: "dionaufal",
        age: 15,
        title: "Halaman Contact",
        mhs,
        layout: "layout/default",
    });
});

app.get("/projects/:id/:category", (req, res) => {
    res.send(
        `project ID : ${req.params.id} \n Category : ${req.query.category}`
    );
});

app.use("/", (req, res) => {
    res.status(404);
    res.send(
        `<h1 align="center">404 not found, <a href="http://localhost:3000">go back</a></h1>`
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
