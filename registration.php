<?php
/**
 * Copyright © magefactory (https://magefactory.alexander-naumov.com)
 * Author Alexander Naumov (https://www.alexander-naumov.com)
 * Credits and thanks:  Max Pronko (https://github.com/mcspronko/tier-price)
 * See LICENSE for the license details.
 */
declare(strict_types=1);

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'magefactory_TierPrice',
    __DIR__
);
