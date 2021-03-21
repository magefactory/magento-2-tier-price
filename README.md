# TIER PRICE FOR MAGENTO 2

Show a tier price on a product page when a customer changes quantity 
field.

## DEVELOPMENT

* Extension under development - work for simple products and not work for configurable 
products. 

* Testet with MAGENTO 2.3.6 - 2.4.1. 

* Must work with MAGENTO version 2.3.3 - 2.3.5.

* For MAGENTO Version < 2.3.3  try it: 

find next code on line 84 in view/base/templates/product/price/tier_prices.phtml

    $block->formatPercent($tierPriceModel->getSavePercent($price['price']))

Replace with 

    $tierPriceModel->getSavePercent($price['price'])

* If this extension is not working with your MAGENTO version, please isssue it. 

## TODO

* Provide correct list of tier prices from a ViewModel.

* Added quick tier price selecting with radio buttons.  

## INSTALLATION

#### - via ftp/sftp: 

unpack archive and upload files in app/code/magefactory/TierPrice

* bin/magento setup:upgrade

* bin/magento setup:static-content-deploy -f

* bin/magento cache:flush

* bin/magento cache:clean

## DEMO

* you can see demo **here** - 
[https://magefactory.alexander-naumov.com/affirm-water-bottle.html](https://magefactory.alexander-naumov.com/affirm-water-bottle.html 
"https://magefactory.alexander-naumov.com/affirm-water-bottle.html")

## LICENSE

* See LICENSE for the license details.

## COPYRIGHT

* Copyright **© magefactory****** 
(https://magefactory.alexander-naumov.com)

* Author **Alexander Naumov** (https://www.alexander-naumov.com)

## CREDITS AND THANKS

*  Thanks **Max Pronko****** - https://github.com/mcspronko - for the 
prototype -  https://github.com/mcspronko/tier-price

 
