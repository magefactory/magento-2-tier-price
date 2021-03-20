# Tier Price for Magento 2

Show a tier price on a product page when a customer changes quantity 
field.

## Development

Extension work for simple products and not work for configurable 
products.

## TODO

* Provide correct list of tier prices from a ViewModel.

## Installation

#### - via ftp/sftp: 

unpack archive and upload files in app/code/magefactory

* bin/magento setup:upgrade

* bin/magento setup:static-content-deploy -f

* bin/magento cache:flush

* bin/magento cache:clean

#### - via composer:

* Edit your repositories block, add new reposytory with type "git" 

           
        "repositories": [
                    {
                        "type": "composer",
                        "url": "https://repo.magento.com/"
                    },
                    {
                        "type": "git",
                        "url": 
"git@github.com:magefactory/magento-2-tier-price.git"
                    }
                ],

    
* run composer require magefactory/module-tier-price

* bin/magento setup:upgrade

* bin/magento setup:static-content-deploy -f

* bin/magento cache:flush

* bin/magento cache:clean

## Demo

* you can see demo **here** - 
[https://magefactory.alexander-naumov.com/affirm-water-bottle.html](https://magefactory.alexander-naumov.com/affirm-water-bottle.html 
"https://magefactory.alexander-naumov.com/affirm-water-bottle.html")

## LICENSE

* See LICENSE for the license details.

## Copyright

* Copyright **© magefactory****** 
(https://magefactory.alexander-naumov.com)

* Author **Alexander Naumov** (https://www.alexander-naumov.com)

## Credits and thanks

*  Thanks **Max Pronko****** - https://github.com/mcspronko - for the 
prototype -  https://github.com/mcspronko/tier-price

 
