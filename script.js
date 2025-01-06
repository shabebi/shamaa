$(document).ready(function() {
    // Retrieve the basket from localStorage
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Function to save the basket to localStorage 
    function saveBasket() {
        localStorage.setItem('basket', JSON.stringify(basket));
    }

    // DOM element references
    const $detailsPanel = $("#product-details");
    const $viewDetailsBtns = $(".basket-btn");
    const $closeDetailsBtn = $("#close-details");
    const $addToBasketBtn = $(".add-to-basket-btn");
    const $basketIcon = $("#basket-icon");
    const $basketSummaryPanel = $("#basket-summary");
    const $closeBasketSummaryBtn = $("#close-basket-summary");
    const $basketItemsList = $("#basket-items");
    const $basketCount = $("#basket-count");

    const $productNameField = $("#product-name");
    const $productPriceField = $("#product-price");
    const $productDescriptionField = $("#product-description");

    // Quantity controls
    const $quantityField = $("#quantity");
    const $plusBtn = $("#plus-btn");
    const $minusBtn = $("#minus-btn");

    // Packaging control
    const $packagingRadios = $("input[name='packaging']");
    const $additionalInfo = $("#additional-info");

    // Event listeners
    let currentLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(); // Apply the saved language on page load

    
    // Language toggle functionality
    $('#language-toggle').click(function() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', currentLanguage); // Save the current language to localStorage
        updateLanguage();
    });
    
    // Update translatable elements based on current language
    function updateLanguage() {
        // Update all elements with data-en and data-ar attributes
        $('[data-en]').each(function() {
            const newText = $(this).data(currentLanguage);
            $(this).text(newText);
        });
        
        switchLanguage(currentLanguage);
        updateTotalPrice();
    }


    
    function switchLanguage(lang) {
        const checkboxes = document.querySelectorAll('.scent-checkbox');
        checkboxes.forEach(checkbox => {
            // Update the label text for the checkbox's corresponding scent
            $(checkbox).parent().contents().filter(function() {
                return this.nodeType === 3; // NodeType 3 is for text nodes
            }).first().replaceWith(lang === 'en' ? checkbox.getAttribute('data-en') : checkbox.getAttribute('data-ar'));
        });
    }    
    

    // Calculate and update total price in the basket summary
    function updateTotalPrice() {
        const totalAmount = calculateTotal();
        const totalText = currentLanguage === 'en' ? `Total: ${totalAmount} YR` : `الإجمالي: ${totalAmount} ريال`;
        $('#final-total').text(totalText);
    }

    function calculateTotal() {
        return basket.reduce((total, item) => total + item.total, 0);
    }

    // Initial call to set the correct total on load
    updateTotalPrice();

    // Display product details in the panel
    $viewDetailsBtns.on("click", function() {
        const productId = $(this).closest(".product").data("product-id");
        const product = products.find(p => p.id == productId);
    
        if (product) {
            
            // Display the product details based on the current language
            $productNameField.text(currentLanguage === "ar" ? product.name_ar : product.name);
            $productPriceField.text(`${product.price} YR`);
            $productDescriptionField.text(currentLanguage === "ar" ? product.description_ar : product.description);
            
            $detailsPanel.addClass("active");
        } else {
            alert("Product not found.");
        }
    });
    

    // Close product details panel
    $closeDetailsBtn.on("click", function() {
        $detailsPanel.removeClass("active");
        resetFields();
    });

    // Reset input fields
    function resetFields() {
        $quantityField.val(1);
        $packagingRadios.filter('[value="simple"]').prop('checked', true);
        $additionalInfo.val('');
        $(".color-checkbox").prop('checked', false);
        $(".scent-checkbox").prop('checked', false);
    }

    // Increase or decrease quantity
    $plusBtn.on("click", function() {
        let quantity = parseInt($quantityField.val());
        $quantityField.val(quantity + 1);
    });

    $minusBtn.on("click", function() {
        let quantity = parseInt($quantityField.val());
        if (quantity > 1) {
            $quantityField.val(quantity - 1);
        }
    });

    $addToBasketBtn.on("click", function() {
    const productName = $productNameField.text();
    const productPrice = parseFloat($productPriceField.text().replace(' YR', '')); 
    const quantity = parseInt($quantityField.val());

    // Initialize packaging variables
    let packaging = '';
    let packagingCost = 0;

    // Check if packaging options exist
    if ($packagingRadios.length > 0) {
        const packagingRadios = $packagingRadios.filter(':checked');
        
        // If packaging options are selected, get the value and cost
        if (packagingRadios.length > 0) {
            packaging = packagingRadios.val();

            // Set packaging cost based on the selected option
            if (packaging === 'Box packaging (+1000 YR)') {
                packagingCost = 1000;
            } else if (packaging === 'Box packaging (+150 YR)') {
                packagingCost = 150;
            }
        }
    }


    // Translate packaging if current language is Arabic
    if (packaging) {
        packaging = packagingTranslations[packaging] ? packagingTranslations[packaging][currentLanguage] : packaging;
    } else {
        packaging = ''; // Default if no packaging is selected
    }

    // Get selected colors and translate them based on the current language
    const selectedColors = $(".color-checkbox:checked").map(function() { 
        return colorTranslations[$(this).val()][currentLanguage]; // Directly save translated color
    }).get();

    // Get selected scents and translate them based on the current language
    const selectedScents = $(".scent-checkbox:checked").map(function() { 
        return scentTranslations[$(this).val()][currentLanguage]; // Directly save translated scent
    }).get();

    // Push the item to the basket
    basket.push({
        name: productName,
        price: productPrice,
        total: (productPrice + packagingCost) * quantity, // Include packaging cost if applicable
        quantity: quantity,
        packaging: packaging, // Save translated packaging as string
        additionalInfo: $additionalInfo.val(),
        colors: selectedColors, // Save translated colors as strings
        scents: selectedScents // Save translated scents as strings
    });

    saveBasket();
    $basketCount.text(basket.length);
    resetFields();
    $detailsPanel.removeClass("active");
    });

    // Display basket summary panel
    $basketIcon.on("click", function() {
        updateBasketSummary();
        $basketSummaryPanel.addClass("active");
        $(".delete-all-btn, .whatsapp-btn").addClass("fixed-position");
    });

    $closeBasketSummaryBtn.on("click", function() {
        $basketSummaryPanel.removeClass("active");
        $(".delete-all-btn, .whatsapp-btn").removeClass("fixed-position");
    });

    // Update basket summary
    function updateBasketSummary() {
        if (currentLanguage === 'en') {
            $basketItemsList.empty();
            basket.forEach((item, index) => {
                const listItem = `
                    <li>
                        ${item.name}<button class="delete-item-btn" data-index="${index}">X</button><br>
                        Quantity: ${item.quantity}<br>
                        Packaging: ${item.packaging}<br>
                        Colors: ${item.colors.join(', ') || 'Default'}<br>
                        Scents: ${item.scents.join(', ') || 'Default'}<br>
                        Info: ${item.additionalInfo || 'None'}<br>
                        Total price: ${item.total} YR
                        <hr>
                    </li>
                `;
                $basketItemsList.append(listItem);
            });
        } else if (currentLanguage === 'ar') {
            $basketItemsList.empty();
            basket.forEach((item, index) => {
                const listItem = `
                    <li>
                        ${item.name}<button class="delete-item-btn" data-index="${index}">X</button><br>
                        الكمية: ${item.quantity}<br>
                        التغليف: ${item.packaging}<br>
                        الألوان: ${item.colors.join(', ') || 'افتراضي'}<br>
                        الروائح: ${item.scents.join(', ') || 'افتراضي'}<br>
                        معلومات إضافية: ${item.additionalInfo || 'لا يوجد'}<br>
                        السعر الكلي: ${item.total} ريال يمني
                        <hr>
                    </li>
                `;
                $basketItemsList.append(listItem);
            });
        }        

        $(".delete-item-btn").on("click", function() {
            const itemIndex = $(this).data('index');
            basket.splice(itemIndex, 1);
            saveBasket();
            updateBasketSummary();
        });

        $basketCount.text(basket.length);
        updateTotalPrice();
    }

    // Delete all items from basket
    $("#delete-all-btn").on("click", function() {
        basket = [];
        saveBasket();
        updateBasketSummary();
    });

    $basketIcon.on("click", function() {
        updateBasketSummary();
        $basketSummaryPanel.addClass("active");
        $(".delete-all-btn").addClass("fixed-position");
        $(".whatsapp-btn").addClass("fixed-position-whatsapp");
    });
    
    $closeBasketSummaryBtn.on("click", function() {
        $basketSummaryPanel.removeClass("active");
        $(".delete-all-btn").removeClass("fixed-position");
        $(".whatsapp-btn").removeClass("fixed-position-whatsapp");
    });

    // Send basket via WhatsApp
    $("#send-whatsapp-btn").on('click', function() {
        if (basket.length === 0) {
            alert('Your basket is empty!');
            return;
        }

        const customerName = $("#customer-name").val();
        const customerNumber = $("#customer-number").val();
        const customerAddress = $("#customer-address").val();

        if (!customerName || !customerNumber) {
            alert('Please provide your name and phone number.');
            return;
        }

        const basketMessage = generateWhatsAppMessage();
        const contactMessage = `
            \n\nCustomer Details:
            \nName: ${customerName}
            \nPhone: ${customerNumber}
            \nAddress: ${customerAddress || ''}
        `;
        const fullMessage = encodeURIComponent(basketMessage + contactMessage);
        const phoneNumber = '967733706488'; 
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

        window.open(whatsappLink, '_blank');
    });

    function generateWhatsAppMessage() {
        if (basket.length === 0) return '';
    
        let message = '';
        if (currentLanguage === 'en') {
            message = 'Here are the items in my basket:\n\n';
            basket.forEach(item => {
                message += `- ${item.name}\n  Quantity: ${item.quantity}
                \nPackaging: ${item.packaging || 'Default'}
                \nColors: ${item.colors.join(', ') || 'Default'}
                \nScents: ${item.scents.join(', ') || 'Default'}
                \nInfo: ${item.additionalInfo || 'None'}
                \nTotal price: ${item.total} YR\n-----------------------------------\n`;
            });
        } else if (currentLanguage === 'ar') {
            message = ' العناصر في سلتي:\n\n';
            basket.forEach(item => {
                message += `- ${item.name}\n  الكمية: ${item.quantity}
                \nالتغليف: ${item.packaging || 'افتراضي'}
                \nالألوان: ${item.colors.join(', ') || 'افتراضي'}
                \nالروائح: ${item.scents.join(', ') || 'افتراضي'}
                \nمعلومات إضافية: ${item.additionalInfo || 'لا يوجد'}
                \nالسعر الكلي: ${item.total} ريال يمني\n-----------------------------------\n`;
            });
        }
    
        message += `\n${calculateFinalTotal()} YR`;
        return message; // Ensure the message is returned
    }
    
    function calculateFinalTotal() {
        return basket.reduce((total, item) => total + item.total, 0);
    }
});
