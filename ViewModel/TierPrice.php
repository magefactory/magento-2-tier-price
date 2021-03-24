<?php
declare(strict_types=1);

namespace Magefactory\TierPrice\ViewModel;

use Magento\Framework\Serialize\SerializerInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;


class TierPrice implements ArgumentInterface
{
    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * TierPrice constructor.
     * @param SerializerInterface $serializer
     */
    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @return string
     */
    public function getJsonConfig(): string
    {
        return $this->serializer->serialize([
            'qtyIdentifier' => '.product-add-form #qty',
            'priceIdentifier' => '.product-info-price span.price',
            'tierPrices' => 'ul.prices-tier.items',
            'jsonDataAttribute' => 'tierjs',
            'tierPricesValue' => 'input.radio-btn',
            'priceDataAttribute' => 'data-price'
        ]);
    }
}
