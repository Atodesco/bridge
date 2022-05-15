"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const nodemailer = __webpack_require__(184);
function handler(req, res) {
    if (req.method == "POST") {
        //console.log(req);
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bridgeclubdesete@gmail.com",
                pass: "sissililas"
            }
        });
        let message = {
            from: "bridgeclubdesete@gmail.com",
            to: "bridgeclubdesete@gmail.com",
            subject: "Inscription au Tournoi",
            html: "<h1>Nom Prenom du premier joueur: " + req.body.nom1 + "</h1>" + "<h1>Nom Prenom du deuxieme joueur: " + req.body.nom2 + "</h1>" + "<h1>Date du tournoi: " + req.body.date + "</h1>" + "<h1>Email: " + req.body.email + "</h1>" + "<h1>Numero: " + req.body.numero + "</h1>" + "<h1>Message en plus: " + req.body.autres + "</h1>"
        };
        transporter.sendMail(message, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }
    res.status(200);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(492));
module.exports = __webpack_exports__;

})();