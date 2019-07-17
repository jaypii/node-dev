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
