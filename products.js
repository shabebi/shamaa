// Sample product data
const products = [
    { 
        id: 1, 
        name: 'A Mini Flower bouquet', 
        name_ar: 'باقة زهور صغيرة', 
        price: 4500, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 2, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 8800, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 3, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 9000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 4, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 18000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 5, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 18000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 6, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 20000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 7, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 22000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 8, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 25000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 9, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 25000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة أنيقة تناسب جميع المناسبات، وتُعد هدية لا تُنسى'
    },
    { 
        id: 10, 
        name: 'Scented Tag (Hexagon)', 
        name_ar: 'تاق شمعي (سداسية)', 
        price: 1250, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'تمنحك رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك، وتنعش المكان بسهولة'
    },
    { 
        id: 11, 
        name: 'Scented Tag (Sunflower)', 
        name_ar: 'تاق شمعي (دوار الشمس)', 
        price: 1250, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'تمنحك رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك، وتنعش المكان بسهولة'
    },
    { 
        id: 12, 
        name: 'Scented Tag (Oval)', 
        name_ar: 'تاق شمعي (بيضاوية)', 
        price: 1250, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'تمنحك رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك، وتنعش المكان بسهولة'
    },
    { 
        id: 13, 
        name: 'Scented Tag (Circular)', 
        name_ar: 'تاق شمعي (دائرية)', 
        price: 1250, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'تمنحك رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك، وتنعش المكان بسهولة'
    },
    { 
        id: 14, 
        name: 'Scented Tag (Rectangular)', 
        name_ar: 'تاق شمعي (مستطيلة)', 
        price: 1250, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'تمنحك رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك، وتنعش المكان بسهولة'
    },
    { 
        id: 15, 
        name: 'Diffuser Box', 
        name_ar: 'صندوق فواحات', 
        price: 4500, 
        description: 'Ceramic diffuser with scented candles [ceramic diffuser, scented candle (30g Small Hearts), mini candle] it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: 'فواحة سيراميك مع شموع معطرة [فواحة سيراميك، شمعة معطرة (30 جرام قلوب صغيرة)، شمعة صغيرة]  تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },
    { 
        id: 16, 
        name: 'Leaves', 
        name_ar: 'اوراق الشجر', 
        price: 2000, 
        description: '(30g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(30 جرام) من الشموع المعطرة للفواحة ، تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },
    { 
        id: 17, 
        name: 'Macaron', 
        name_ar: 'ماكرون', 
        price: 2250, 
        description: '(3 pieces) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(3 قطع) من الشموع المعطرة للفواحة ، تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },
    { 
        id: 18, 
        name: 'Big Hearts', 
        name_ar: 'قلوب كبيرة', 
        price: 2500, 
        description: '(6 pieces) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(6 قطع) من الشموع المعطرة للفواحة ، تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },
    { 
        id: 19, 
        name: 'Coffee Beans', 
        name_ar: 'حبوب القهوة', 
        price: 2500, 
        description: '(50g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(50 جرام) من الشموع المعطرة للفواحة ، تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },
    { 
        id: 20, 
        name: 'Small Hearts', 
        name_ar: 'قلوب صغيرة', 
        price: 2000, 
        description: '(30g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(30 جرام) من الشموع المعطرة للفواحة ، تضيف رائحة منعشة ومنظر جميل وإضاءة مريحة'
    },    
    { 
        id: 21, 
        name: 'Ceramic diffuser', 
        name_ar: 'فواحة', 
        price: 2000, 
        description: 'A ceramic diffuser', 
        description_ar:' فواحة سيراميك بدون شمع'
    },
    { 
        id: 22, 
        name: 'Black Jar Candle', 
        name_ar: 'شمعة العلبة السوداء', 
        price: 3500, 
        description: 'A fragrant candle made of 100% natural wax, available in several scents and decorated with dried natural oranges.', 
        description_ar:' شمعة فواحة مصنوعة من شمع طبيعي 100% متوفرة بعدة روائح و مزينة بالبرتقال الطبيعي المجفف'
    },
    { 
        id: 23, 
        name: 'Black Jar Candle', 
        name_ar: 'شمعة العلبة السوداء', 
        price: 3500, 
        description: 'A fragrant candle made of 100% natural wax, available in several scents and decorated with dried natural roses.', 
        description_ar:' شمعة فواحة مصنوعة من شمع طبيعي 100% متوفرة بعدة روائح و مزينة بالورد الطبيعي المجفف'
    }, 
    { 
        id: 24, 
        name: 'Black Jar Candle', 
        name_ar: 'شمعة العلبة السوداء', 
        price: 3500, 
        description: 'A fragrant candle made of 100% natural wax, available in several scents and decorated with dried natural roses.', 
        description_ar:' شمعة فواحة مصنوعة من شمع طبيعي 100% متوفرة بعدة روائح و مزينة بالورد الطبيعي المجفف'
    }, 
    { 
        id: 25, 
        name: 'Coffee candle', 
        name_ar: 'شمعة القهوة', 
        price: 2000, 
        description: 'A beautiful, scented candle shaped like a coffee cup.', 
        description_ar: 'شمعة جميلة معطرة على شكل كوب قهوة'
    }, 
    { 
        id: 26, 
        name: 'Van Gogh Candle', 
        name_ar: 'شمعة فان جوخ', 
        price: 6500, 
        description: 'A fragrant candle made of 100% natural wax.', 
        description_ar: 'شمعة فواحة مصنوعة من شمع طبيعي %100'
    }, 
    { 
        id: 27, 
        name: 'Starfish Candle', 
        name_ar: 'شمعة نجمة البحر',
        price: 4000, 
        description: 'A fragrant candle made of 100% natural wax, available in several scents and decorated with seashells and starfish', 
        description_ar: 'شمعة فواحة مصنوعة من شمع طبيعي 100% متوفرة بعدة روائح و مزينة بالصدف و نجم البحر'
    }, 
    { 
        id: 28, 
        name: 'Three Roses', 
        name_ar: 'شمعة حديقة الورد', 
        price: 15000, 
        description: 'A fragrant candle made of 100% natural wax, available in several scents and decorated with roses (500g)', 
        description_ar: '(500g) شمعة فواحة مصنوعة من شمع طبيعي 100% متوفرة بعدة روائح و مزينة بالورد'
    }, 
    { 
        id: 29, 
        name: 'Pumpkin Candle', 
        name_ar: 'شمعة اليقطين', 
        price: 5000, 
        description: 'A beautiful, scented pumpkin shaped candle.', 
        description_ar: 'شمعة جميلة معطرة على شكل اليقطين'
    },
    { 
        id: 30, 
        name: 'Classic Candle', 
        name_ar: 'شمعة كلاسيكية ', 
        price: 4500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 31, 
        name: 'Classic Candle (Short)', 
        name_ar: 'شمعة كلاسيكية', 
        price: 4500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 32, 
        name: 'Arch Candle', 
        name_ar: 'شمعة القوس', 
        price: 5500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 33, 
        name: 'Rose Candle', 
        name_ar: 'شمعة وردة الفاوانيا', 
        price: 3000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 34, 
        name: 'Mini Arch Candle', 
        name_ar: 'شمعة القوس صغيرة', 
        price: 3500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 35, 
        name: 'Big Classic Candle', 
        name_ar: 'شمعة كلاسيكية كبيرة', 
        price: 10000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 36, 
        name: 'Crystal Candle', 
        name_ar: 'شمعة البلورة ', 
        price: 2500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 37, 
        name: 'Sheep Candle', 
        name_ar: 'شمعة الخروف ', 
        price: 2500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 38, 
        name: 'Moon Caandle', 
        name_ar: 'شمعة القمر', 
        price: 2500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 39, 
        name: 'Winter House', 
        name_ar: 'بيت الشتاء', 
        price: 2750, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 40, 
        name: 'Home', 
        name_ar: 'شمعة البيت', 
        price: 7000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 41, 
        name: 'Pumpkin Candles', 
        name_ar: 'مجموعة اليقطين', 
        price: 3500, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 42, 
        name: 'Dried Roses Candle', 
        name_ar: 'شمعة الورد المجفف', 
        price: 7000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 43, 
        name: 'Sunflower Candle (1)', 
        name_ar: 'شمعة دوار الشمس (1)', 
        price: 1000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    },
    { 
        id: 44, 
        name: 'Dried Roses Candle', 
        name_ar: 'شمعة الورد المجفف', 
        price: 7000, 
        description: 'Decorative candle made of solid soy wax, available in different colors and scents', 
        description_ar: 'شمعة ديكور مصنوعة من شمع الصويا متوفرة بالوان و روائح مختلفة'
    }
];

// Translation mapping for colors
const colorTranslations = {
    'Red': { en: 'Red', ar: 'أحمر' },
    'Pink': { en: 'Pink', ar: 'وردي' },
    'Yellow': { en: 'Yellow', ar: 'أصفر' },
    'Blue': { en: 'Blue', ar: 'أزرق' },
    'Light Blue': { en: 'Light Blue', ar: 'ازرق فاتح' },
    'Green': { en: 'Green', ar: 'أخضر' },
    'Purple': { en: 'Purple', ar: 'أرجواني' },
    'Orange': { en: 'Orange', ar: 'برتقالي' },
    'Brown': { en: 'Brown', ar: 'بني' },
    'Grey': { en: 'Grey', ar: 'رمادي' },
    'Black': { en: 'Black', ar: 'اسود' }
};

// Translation mapping for scents
const scentTranslations = {
    'Lavender': { en: 'Lavender', ar: 'لافندر' },
    'Lavender & Lemon': { en: 'Lavender & Lemon', ar: 'لافندر وليمون' },
    'Vanilla': { en: 'Vanilla', ar: 'فانيليا' },
    'Musk': { en: 'Musk', ar: 'مسك' },
    'Gardenia': { en: 'Gardenia', ar: 'جاردينيا' }
};

// Packaging translations
const packagingTranslations = {
    'Simple packaging': {
        en: 'Simple packaging',
        ar: 'تغليف بسيط'
    },
    'Box packaging (+150 YR)': {
        en: 'Box packaging (+150 YR)',
        ar: 'تغليف بكرتون (+150 ريال)'
    },
    'Box packaging (+1000 YR)': {
        en: 'Box packaging (+1000 YR)',
        ar: 'تغليف بكرتون (+1000 ريال)'
    }
};
