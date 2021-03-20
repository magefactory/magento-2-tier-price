define(['jquery'], function ($) {
  'use strict';

  /**
   * @param {Object.<string>} element
   */
  return function (element) {
    const qtyIdentifier = element.qtyIdentifier;
    const priceIdentifier = element.priceIdentifier;
    const tierPricesData = element.tierPrices;
    const jsonDataAttribute = element.jsonDataAttribute;
    const tierPrices = $(tierPricesData).data(jsonDataAttribute);
    const tierPricesValue = element.tierPricesValue;
    const priceDataAttribute = element.priceDataAttribute;
  

    const priceContainer = $(priceIdentifier);
    const originalPriceHtml = priceContainer.html();

    $(qtyIdentifier).on('change', function (event) {
        const qty = parseInt(event.target.value);
      //  const PRICE = $(PRICE_IDENTIFIER)
        let isUpdated = false;
        tierPrices.forEach(function (tierPrice) {
          if (tierPrice.qty <= qty) {
            priceContainer.html(tierPrice.price);
            isUpdated = true;
          }
        });

        if (!isUpdated) {
          priceContainer.html(originalPriceHtml);
        }
        isUpdated = true;
    });
    var updatePrice = function () {
      $(tierPricesValue).change(function () {
          $(qtyIdentifier).val($(tierPricesValue +':checked').val());
          priceContainer.html($(tierPricesValue +':checked').attr(priceDataAttribute));
      });
    };   
    updatePrice();
  }
 
}); 
