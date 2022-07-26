const nodemailer = require("nodemailer");

export default function handler(req, res) {
  if (req.method == "POST") {
    //console.log(req);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bridgeclubdesete@gmail.com",
        pass: "dcvshoxyrwycisqd",
      },
    });

    let message = {
      from: "bridgeclubdesete@gmail.com",
      to: "bridgeclubdesete@gmail.com",
      subject: "Inscription au Tournoi",
      html:
        "<h1>Nom Prenom du premier joueur: " +
        req.body.nom1 +
        "</h1>" +
        "<h1>Nom Prenom du deuxieme joueur: " +
        req.body.nom2 +
        "</h1>" +
        "<h1>Date du tournoi: " +
        req.body.date +
        "</h1>" +
        "<h1>Email: " +
        req.body.email +
        "</h1>" +
        "<h1>Numero: " +
        req.body.numero +
        "</h1>" +
        "<h1>Message en plus: " +
        req.body.autres +
        "</h1>",
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
  res.status(200);
}
