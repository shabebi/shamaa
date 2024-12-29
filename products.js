// Sample product data
const products = [
    { 
        id: 1, 
        name: 'A Mini Flower bouquet', 
        name_ar: 'باقة زهور صغيرة', 
        price: 4500, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 2, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 8800, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 3, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 9000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 4, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 18000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 5, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 18000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 6, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 20000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 7, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 22000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 8, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 25000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 9, 
        name: 'A Flower bouquet', 
        name_ar: 'باقة زهور', 
        price: 25000, 
        description: 'A beautiful scented candle perfect for any event and can be a memorable gift.', 
        description_ar: 'شمعة معطرة جميلة مثالية لأي مناسبة ويمكن أن تكون هدية لا تُنسى.' 
    },
    { 
        id: 10, 
        name: 'Scented Tag (Hexagon)', 
        name_ar: 'علامة معطرة (سداسية)', 
        price: 1350, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'يوفر رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك. ينعش مساحتك بسهولة.' 
    },
    { 
        id: 11, 
        name: 'Scented Tag (Sunflower)', 
        name_ar: 'علامة معطرة (دوار الشمس)', 
        price: 1350, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'يوفر رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك. ينعش مساحتك بسهولة.' 
    },
    { 
        id: 12, 
        name: 'Scented Tag (Oval)', 
        name_ar: 'علامة معطرة (بيضاوية)', 
        price: 1350, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'يوفر رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك. ينعش مساحتك بسهولة.' 
    },
    { 
        id: 13, 
        name: 'Scented Tag (Circular)', 
        name_ar: 'علامة معطرة (دائرية)', 
        price: 1350, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'يوفر رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك. ينعش مساحتك بسهولة.' 
    },
    { 
        id: 14, 
        name: 'Scented Tag (Rectangular)', 
        name_ar: 'علامة معطرة (مستطيلة)', 
        price: 1350, 
        description: 'Offers a long-lasting fragrance for your car or wardrobe. It freshens your space effortlessly.', 
        description_ar: 'يوفر رائحة تدوم طويلاً لسيارتك أو خزانة ملابسك. ينعش مساحتك بسهولة.' 
    },
    { 
        id: 15, 
        name: 'Diffuser Box', 
        name_ar: 'صندوق موزع', 
        price: 4500, 
        description: 'Ceramic diffuser with scented candles [ceramic diffuser, scented candle (30g Small Hearts), mini candle] it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: 'موزع سيراميكي مع شموع معطرة [موزع سيراميكي، شمعة معطرة (30 جرام قلوب صغيرة)، شمعة صغيرة] يستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 16, 
        name: 'Leaves', 
        name_ar: 'أوراق', 
        price: 2000, 
        description: '(30g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(30 جرام) من الشموع المعطرة لموزع السيراميك، تستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 17, 
        name: 'Macaron', 
        name_ar: 'ماكرون', 
        price: 2250, 
        description: '(3 pieces) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(3 قطع) من الشموع المعطرة لموزع السيراميك، تستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 18, 
        name: 'Big Hearts', 
        name_ar: 'قلوب كبيرة', 
        price: 2500, 
        description: '(6 pieces) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(6 قطع) من الشموع المعطرة لموزع السيراميك، تستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 19, 
        name: 'Coffee Beans', 
        name_ar: 'حبوب القهوة', 
        price: 2500, 
        description: '(50g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(50 جرام) من الشموع المعطرة لموزع السيراميك، تستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 20, 
        name: 'Small Hearts', 
        name_ar: 'قلوب صغيرة', 
        price: 2000, 
        description: '(30g) of scented candles for the ceramic diffuser, it is used to odorize the place and add a beautiful view and soft lighting.', 
        description_ar: '(30 جرام) من الشموع المعطرة لموزع السيراميك، تستخدم لتأيين المكان وإضافة منظر جميل وإضاءة ناعمة.' 
    },
    { 
        id: 21, 
        name: 'Ceramic diffuser', 
        name_ar: 'موزع سيراميكي', 
        price: 2000, 
        description: 'A ceramic diffuser', 
        description_ar: 'موزع سيراميكي' 
    }
];

// Translation mapping for colors
const colorTranslations = {
    'Red': { en: 'Red', ar: 'أحمر' },
    'Pink': { en: 'Pink', ar: 'وردي' },
    'Yellow': { en: 'Yellow', ar: 'أصفر' },
    'Blue': { en: 'Blue', ar: 'أزرق' },
    'Green': { en: 'Green', ar: 'أخضر' },
    'Purple': { en: 'Purple', ar: 'أرجواني' },
    'Orange': { en: 'Orange', ar: 'برتقالي' },
    'Brown': { en: 'Brown', ar: 'بني' },
    'Grey': { en: 'Grey', ar: 'رمادي' }
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
        ar: 'التغليف البسيط'
    },
    'Box packaging (+150 YR)': {
        en: 'Box packaging (+150 YR)',
        ar: 'تغليف الصناديق (+150 ريال)'
    },
    'Box packaging (+1000 YR)': {
        en: 'Box packaging (+1000 YR)',
        ar: 'تغليف الصناديق (+1000 ريال)'
    }
};