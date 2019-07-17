var tutorialPoint;
(function (tutorialPoint) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path = "Invoice.ts" />
var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
