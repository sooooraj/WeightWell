$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.recipe-details-slider img');
    var totalSlides = slides.length;
    
    // Sample data for body text
    var bodyTexts = [
        {
            title: "Build Your Own Greek Yogurt Parfait",
            link: "https://www.freepik.com/free-photo/strawberries-layer-dessert_3355113.htm#fromView=image_search&page=1&position=0&uuid=2c6ae514-aa93-4005-aa17-2834936c29c9",
            content: `
                <p>Transform your breakfast routine with a vibrant and customizable parfait!</p>
                <p><b>Ingredients:</b> Greek yogurt (150 calories), mixed berries (50 calories), granola (120 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Prep Your Layers (2 minutes):</b></h>
                            <li>Grab a beautiful glass and spoon 150g of plain Greek yogurt (choose low-fat or full-fat based on your preference).</li>
                            <li>Wash and chop your favorite mix of berries (strawberries, blueberries, raspberries) - aim for ½ cup.</li>
                            <li>Measure out ⅓ cup of your preferred granola (choose a variety with whole grains and nuts for added texture and nutrients).</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Layer and Enjoy (3 minutes):</b></h>
                            <li>Start with a base of creamy Greek yogurt.</li>
                            <li>Sprinkle half of your chopped berries on top, creating a colorful explosion.</li>
                            <li>Add a generous layer of crunchy granola for a satisfying textural contrast.</li>
                            <li>Repeat the layers of yogurt, berries, and granola, finishing with a delightful berry crown.</li>
                            <li>Devour immediately or store in the refrigerator for a grab-and-go breakfast later!</li>
                    </ol>
                <p><b>Benefits:</b> Packed with protein and healthy fats from yogurt, this parfait keeps you feeling full for longer. Berries add a burst of antioxidants, while granola provides fiber and complex carbohydrates for sustained energy. Plus, it's a quick and customizable way to kickstart your day!</p>
            `
        },        
        {
            title: "Wrap It Up with a Chicken Salad Delight",
            link: "https://www.freepik.com/free-photo/caesar-salad-chicken-tomato-lettuce-parmesan-anchovies-side-view_7652156.htm#fromView=image_search&page=1&position=0&uuid=ced8c931-0c0f-4cf0-a41a-60e9eb39ed4e",
            content: `
                <p>This protein-packed wrap is perfect for a satisfying lunch or light dinner.</p>
                <p><b>Ingredients:</b> Whole grain tortilla (200 calories), grilled chicken breast (165 calories), lettuce (15 calories), tomato (22 calories), and avocado (160 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Grill Your Chicken (5 minutes):</b></h>
                            <li>Marinate a boneless, skinless chicken breast with your favorite herbs and spices (Italian seasoning, paprika, etc.) for extra flavor.</li>
                            <li>Grill the chicken breast over medium heat until cooked through (around 5 minutes per side). Let it cool slightly before chopping into bite-sized pieces.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Assemble Your Wrap (10 minutes):</b></h>
                            <li>Spread a thin layer of hummus (choose a flavor you enjoy!) on a whole-grain tortilla.</li>
                            <li>Wash and tear some romaine lettuce leaves and arrange them on the tortilla.</li>
                            <li>Slice a juicy tomato and arrange it alongside the lettuce.</li>
                            <li>Mash half of an avocado and spread it on the tortilla for a creamy touch..</li>
                            <li>Finally, add your chopped grilled chicken.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Assemble Your Wrap (10 minutes):</b></h>
                            <li>Carefully roll up the tortilla with all the delicious fillings inside.</li>
                            <li>Secure the wrap with toothpicks if desired or simply enjoy it open-faced.</li>
                            <li>Cut the wrap in half for easier handling and savor your protein-packed creation.</li>
                    </ol>
                <p><b>Benefits:</b>  Lean protein from chicken keeps you feeling full and energized. Whole grains in the tortilla provide fiber, while healthy fats from avocado promote satiety. This wrap is a budget-friendly and customizable meal option!</p>
            `
        },
        {
            title: "Quinoa and Black Bean Salad",
            link: "https://www.freepik.com/free-photo/healthy-salad-bowl-with-quinoa-vegetables-fruit-generated-by-ai_43265872.htm#fromView=image_search&page=1&position=0&uuid=9eb17267-7a13-4568-85d9-124d1f40e9bf",
            content: `
                <p>This protein-rich salad is bursting with flavor and perfect for a light lunch or side dish.</p>
                <p><b>Ingredients:</b> Cooked quinoa (220 calories), black beans (114 calories), cherry tomatoes (22 calories), cucumber (30 calories), lime juice (4 calories), cilantro (2 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Cook the Quinoa (10 minutes):</b></h>
                            <li>Rinse 1 cup of quinoa in a fine-mesh strainer.</li>
                            <li>In a saucepan, combine rinsed quinoa with 2 cups of water or vegetable broth.</li>
                            <li>Bring to a boil, then reduce heat, cover, and simmer for 15 minutes or until the quinoa is fluffy and the liquid is absorbed.</li>
                            <li>Fluff the quinoa with a fork and set aside to cool slightly.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Prep the Veggies and Combine (10 minutes):</b></h>
                            <li>Wash and chop 1 cup of cherry tomatoes and half a cucumber.</li>
                            <li>Drain and rinse 1 can (15 oz) of black beans.</li>
                            <li>In a large bowl, combine the cooked quinoa, black beans, chopped vegetables, and a handful of chopped fresh cilantro.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2:  Dress and Chill (5 minutes):</b></h>
                            <li>In a separate bowl, whisk together 2 tablespoons of fresh lime juice, 1 tablespoon of olive oil, a pinch of salt, and a pinch of black pepper for a simple vinaigrette.</li>
                            <li>Pour the dressing over the salad ingredients and toss to coat evenly.</li>
                            <li>Cover the bowl and refrigerate for at least 30 minutes before serving to allow the flavors to meld.</li>
                    </ol>
                <p><b>Benefits:</b> This salad is a complete protein source thanks to the quinoa and black beans. It's loaded with fiber and antioxidants from the vegetables, making it a filling and nutritious option.</p>
            `
        },
        {
            title: "Baked Salmon with Asparagus Perfection",
            link: "https://www.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_7122701.htm#fromView=image_search&page=1&position=25&uuid=c7bb733d-c2d6-4d0c-a4bd-1f2a545985b2",
            content: `
                <p>This elegant dish is surprisingly easy to prepare and perfect for a weeknight dinner.</p>
                <p><b>Ingredients:</b> Salmon fillet (206 calories), asparagus (27 calories), olive oil (119 calories), lemon juice (4 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Prep the Salmon (5 minutes):</b></h>
                            <li>Preheat your oven to 375°F (190°C).</li>
                            <li>Pat a salmon fillet (around 6 oz) dry with paper towels.</li>
                            <li>In a small bowl, combine 1 tablespoon of olive oil with a squeeze of fresh lemon juice, salt, and pepper to create a simple marinade.</li>
                            <li>Brush the marinade on both sides of the salmon fillet.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Roast with Asparagus (25 minutes):</b></h>
                            <li>Wash and trim 1 bunch of asparagus. Arrange the asparagus spears on a baking sheet lined with parchment paper.</li>
                            <li>Place the marinated salmon fillet on top of the asparagus.</li>
                            <li>Bake for 20-25 minutes, or until the salmon is flaky and cooked through and the asparagus is tender-crisp.</li>
                    </ol>
                <p><b>Benefits:</b> Salmon is rich in omega-3 fatty acids, beneficial for heart health. Asparagus is a great source of vitamins and minerals. This meal is low in calories and promotes a healthy diet.</p>
            `
        },
        {
            title: "Tofu Scramble Scramble Up Some Goodness",
            link: "https://www.freepik.com/free-photo/scrambled-eggs-veggies-salad_6896993.htm#fromView=image_search&page=1&position=19&uuid=b4cf20fd-3b12-4e11-a570-3aa96e71cecf",
            content: `
                <p>This vegetarian dish is a protein-packed alternative to traditional scrambled eggs.</p>
                <p><b>Ingredients:</b> Firm tofu (70 calories), brown rice (215 calories), mixed vegetables (55 calories), soy sauce (8 calories), sesame oil (119 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Prep the Tofu (5 minutes):</b></h>
                            <li>Drain and press a block of firm tofu to remove excess moisture.</li>
                            <li>Crumble the tofu with your hands or a fork into pieces resembling scrambled eggs.</li>
                            <li>Heat a tablespoon of oil in a pan over medium heat.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Sauté the Veggies (5 minutes):</b></h>
                            <li>Add chopped vegetables of your choice (bell peppers, onions, mushrooms) to the pan and sauté until softened.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Scramble the Tofu (10 minutes):</b></h>
                            <li>Add the crumbled tofu to the pan with the vegetables.</li>
                            <li>Season with turmeric, nutritional yeast, and a pinch of salt for an eggy flavor.</li>
                            <li>Scramble the tofu mixture with a spatula until heated through.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Serve and Enjoy (optional):</b></h>
                            <li>Serve your tofu scramble over cooked brown rice (1 cup) for a complete and satisfying meal.</li>
                            <li>Top with chopped fresh herbs like parsley or cilantro for an extra burst of flavor.</li>
                    </ol>
                <p><b>Benefits:</b> Tofu is a versatile source of plant-based protein. This meal is full of fiber from the vegetables and brown rice, keeping you feeling full for longer.</p>
            `
        },
        {
            title: "Egg and Vegetable Omelette: A Colorful Breakfast Symphony",
            link: "https://www.freepik.com/free-photo/high-angle-breakfast-omelette-pan-with-tomatoes-herbs_6671390.htm#fromView=image_search&page=1&position=3&uuid=e95f9752-d0a9-4af1-97f1-ca144a9031d9",
            content: `
                <p>Start your day with a vibrant and protein-packed omelette.</p>
                <p><b>Ingredients:</b> Eggs (155 calories), spinach (7 calories), bell pepper (24 calories), onion (30 calories), cheese (100 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Prep the Veggies (5 minutes):</b></h>
                            <li>Wash and chop a handful of spinach leaves, half a bell pepper, and a quarter of an onion.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Whisk the Eggs (5 minutes):</b></h>
                            <li>In a bowl, whisk together 2 eggs with a splash of milk or water.</li>
                            <li>Season with salt and pepper to taste.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Cook the Omelette (5 minutes):</b></h>
                            <li>Heat a non-stick pan with a pat of butter or a drizzle of oil over medium heat.</li>
                            <li>Pour in the whisked egg mixture and swirl the pan to coat the bottom evenly.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Add Fillings and Fold (5 minutes):</b></h>
                            <li>Once the bottom starts to set (around 30 seconds), sprinkle half of the chopped spinach and vegetables over one half of the omelette.</li>
                            <li>Top with a sprinkle of shredded cheese (optional).</li>
                            <li>Use a spatula to carefully fold the omelette in half over the fillings.</li>
                            <li>Cook for another minute or two until the cheese melts and the omelette is cooked through.</li>
                    </ol>
                <p><b>Benefits:</b> Eggs are a complete protein source, providing all essential amino acids. Vegetables add vitamins, minerals, and fiber to this dish. This omelette is a quick and delicious way to start your day on a healthy note.</p>
            `
        },
        {
            title: "Lentil Soup: Hearty and Comforting (337 calories, 45 minutes)",
            link: "https://www.freepik.com/free-photo/top-view-delicious-vegetable-soup-inside-round-plate-with-bread-dark-blue-desk_11543979.htm#fromView=image_search&page=1&position=3&uuid=be07c334-de7f-4a7b-976e-f84bdba2ff12",
            content: `
                <p>This hearty soup is a budget-friendly and nourishing meal option.</p>
                <p><b>Ingredients:</b> Lentils (230 calories), vegetable broth (5 calories), carrots (52 calories), onions (46 calories), garlic (4 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Sauté the Aromatics (5 minutes):</b></h>
                            <li>Heat a tablespoon of olive oil in a large pot over medium heat.</li>
                            <li>Add chopped onions and garlic cloves (2-3 cloves) and sauté until softened (around 5 minutes).</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Simmer the Lentils (30 minutes):</b></h>
                            <li>Rinse 1 cup of brown lentils. Add them to the pot with 4 cups of vegetable broth and bring to a boil.</li>
                            <li>Reduce heat, cover the pot, and simmer for 30 minutes or until the lentils are tender.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 2: Add Veggies and Season (10 minutes):</b></h>
                            <li>While the lentils simmer, chop 1 carrot into small pieces.</li>
                            <li>After 30 minutes, add the chopped carrots and continue simmering for another 10 minutes.</li>
                            <li>Season the soup with salt, pepper, and a pinch of dried thyme or your favorite herbs.</li>
                    </ol>
                <p><b>Benefits:</b> Lentils are a great source of plant-based protein and fiber. Vegetables add vitamins and minerals to this soup, making it a well-balanced and satisfying meal. This recipe is budget-friendly and easy to prepare.</p>
                <p>These recipes offer a variety of healthy and delicious meal options to keep your diet interesting and support your weight management goals. Remember, portion control and tailoring ingredients to your preferences are key for long-term success. Enjoy!</p>
            `
        },
        {
            title: "Protein Power Shake: A Quick and Nutritious Refuel",
            link: "https://www.freepik.com/free-photo/still-life-tasty-summer-smoothie_4725688.htm#fromView=image_search&page=1&position=0&uuid=ed710526-9811-4ca3-91d1-460583f75e3f",
            content: `
                <p>This protein shake is a convenient and delicious way to refuel after a workout or as a quick and healthy snack.</p>
                <p><b>Ingredients:</b> Protein powder (120 calories), almond milk (30 calories), banana (105 calories), spinach (7 calories).</p>
                    <ol style="list-style-type: disc;">
                        <h><b>Step 1: Blend It Up (5 minutes):</b></h>
                            <li>In a blender, combine 1 scoop of your preferred protein powder (chocolate, vanilla, etc.)</li>
                            <li>Add 1 cup of unsweetened almond milk for a creamy base.</li>
                            <li>Throw in a ripe banana for natural sweetness and potassium.</li>
                            <li>Include a handful of fresh spinach leaves for a boost of vitamins and minerals.</li>
                            <li>Blend all ingredients until smooth and creamy.</li>
                    </ol>
                    <ol style="list-style-type: disc;">
                        <h><b>Enjoy Immediately (optional):</b></h>
                            <li>RPour the protein shake into a glass and enjoy it immediately for a refreshing and energizing pick-me-up.</li>
                    </ol>
                <p><b>Benefits:</b> Protein powder helps with muscle building and repair. Almond milk is a good source of calcium and vitamin E. Banana provides natural sweetness and potassium. Spinach adds essential vitamins and minerals. This protein shake is a quick and convenient way to incorporate essential nutrients into your diet.</p>            `
        },
    ];

    // Sample data for recipe list
    var recipeListData = [
        [
            {
                label: "Category",
                value: "Breakfast"
            },
            {
                label: "Calories",
                value: "320 cal"
            },
            {
                label: "Prepration-Time",
                value: "5 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Lunch/Dinner"
            },
            {
                label: "Calories",
                value: "462 cal"
            },
            {
                label: "Prepration-Time",
                value: "15 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Lunch/Dinner"
            },
            {
                label: "Calories",
                value: "356 cal"
            },
            {
                label: "Prepration-Time",
                value: "30 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Lunch/Dinner"
            },
            {
                label: "Calories",
                value: "467 cal"
            },
            {
                label: "Prepration-Time",
                value: "20 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Breakfast"
            },
            {
                label: "Calories",
                value: "316 cal"
            },
            {
                label: "Prepration-Time",
                value: "15 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Lunch/Dinner"
            },
            {
                label: "Calories",
                value: "337 cal"
            },
            {
                label: "Prepration-Time",
                value: "45 minutes"
            }
        ],
        [
            {
                label: "Category",
                value: "Drinks"
            },
            {
                label: "Calories",
                value: "262 cal"
            },
            {
                label: "Prepration-Time",
                value: "5 minutes"
            }
        ],
    ];

    function showSlide(index) {
        slides.hide().eq(index).show();
        updateBodyText(index);
        updateRecipeList(index);
        updateImageLink(index);
    }

    function updateBodyText(index) {
        var currentBodyText = bodyTexts[index];
        $('.body-text').html('<h3>' + currentBodyText.title + '</h3>' + currentBodyText.content);
    }

    function updateRecipeList(index) {
        var currentRecipeData = recipeListData[index].map(function(item) {
            return '<li><span>' + item.label + ':</span> ' + item.value + '</li>';
        });
        $('.recipe-list').html(currentRecipeData.join(''));
    }

    function updateImageLink(index) {
        var currentBodyText = bodyTexts[index];
        $('.image-attribution a').attr('href', currentBodyText.link);
    }

    // Initially show the first slide
    showSlide(currentIndex);

    $('.prev-button').click(function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    $('.next-button').click(function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });
});
