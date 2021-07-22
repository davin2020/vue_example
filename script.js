    // data binding example with alternative syntax for unnamed variable/obj - always needs return stmt tho! - if u omit # in front of id, then console gives error about not being able to find app_model
    Vue.createApp({
        data() {
            return {
                value: 'The local whisky Hock'
            }
        }
    }).mount('#app_model');

    // click me example using regular syntX
    const AppPlanetClick = Vue.createApp({
        data() {
            return {
                message: "Click to generate a random donation amount",
                amount: 0
            };
        },
        methods: {
          randomGenerate() {
            // display as currency to 2 dp
            this.amount = (Math.random() * 100).toFixed(2);
          },
        },
    });
    AppPlanetClick.mount('#app_onclick');

    const lucyCruise = Vue.createApp({
        data() {
            return {
                productName: 'Book a Trip to Leith',
                productDescription: 'Take a break from the smog of Westerley and book a trip to the verdant moon Leith. Relax aboard aboard Lucy the Spaceship with a glass of Hock and watch the Killjoys in action',
                imageSource2: 'spaceship_lucy.png',
                sourceColor2: 'color:green; font-weight: 700'
            }
        },
    });
    //seems this mount line can go in either the html or js file?
    lucyCruise.mount('#lucy_cruise');