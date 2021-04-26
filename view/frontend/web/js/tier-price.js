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
        $(qtyIdentifier).val($(tierPricesValue + ':checked').val());
        priceContainer.html($(tierPricesValue + ':checked').attr(priceDataAttribute));
      });
    };
    updatePrice();

    // Add tooltip

    let formatedPrices = tierPrices;

    formatedPrices = formatedPrices.map(item => {
      return {
        "qty": item.qty,
        "price": parseFloat(item.price.replace(/,/, '.').replace(/[^0-9.-]+/g, ""))
      };
    });
    if (formatedPrices.length) {
      let minQty = 1;
      let price = $('.price').html();
      if (formatedPrices[0].qty !== minQty) {
        formatedPrices.unshift({
          'qty': parseInt(minQty),
          'price': parseFloat(price.replace(/,/, '.').replace(/[^0-9.-]+/g, ""))
        })
      }

      const tooltipConfig = { "enable": true, "percentage": 0.3 };

      const $tooltipDiv = $('#tier-price-qty-tooltip');
      const templateTooltip = $('#tier-price-qty-tooltip-template');
      const $input = $('input#qty');
      let tooltipTriggered = true;
      $input.on('change', function () {
        var value = formatedPrices.find(function (element) {
          return element.qty > parseInt(this.val());
        }, $input);
        var index = formatedPrices.indexOf(value);
        if (index > 0) {
          if (!tooltipTriggered && ($input.val() >= Math.floor(value.qty * (1 - tooltipConfig.percentage)))) {
            let newPrice = value.price;
            let oldPrice = formatedPrices[index - 1].price;
            if (!isNaN(oldPrice) && !isNaN(newPrice)) {
              let message = templateTooltip.html();
              message = message.replace('%1$s', value.qty - $input.val());
              message = message.replace('%2$s', Math.round((1 - newPrice / oldPrice) * 100));
              $tooltipDiv.html(message);
              let $yesSpan = $tooltipDiv.find('span[data-choice="yes"]');
              $yesSpan.on('click', function () {
                tooltipTriggered = true;
                $input.val(value.qty);
                $input.trigger('change');
              });
              let $noSpan = $tooltipDiv.find('span[data-choice="no"]');
              $noSpan.on('click', function () {
                $tooltipDiv.removeClass('visible');
              });
              $tooltipDiv.addClass('visible');
            } else {
              console.error('Unable to retrieve price');
            }
          } else {
            $tooltipDiv.removeClass('visible');
            tooltipTriggered = false;
          }
        } else {
          $tooltipDiv.removeClass('visible');
        }
      });
      $input.trigger('change');
    }
  }
});
