// const appCruise2 = Vue.createApp({
//     data() {
//         return {
//             productName: 'Book a Trip to Leith',
//             productDescription: 'WHY NOT Take a break from the smog of Westerley and book a trip to the verdant moon Leith, aboard Lucy the Spaceship. Watch the Killjoys in action as you leave the smog of Westerley behind.',
//             // additional properties later


//         }
//     },
// });

//seems this line can go in either the html or js file?
// appCruise2.mount('#quad_cruise');


//  alternative syntax for unnamed variable/obj
	Vue.createApp({
        data() {
            return {
            	imageSource: 'spaceship_lucy.png',
                sourceColor: 'color:green;'
            }
        }
    }).mount('#appBindTest');
    //  code wasnt working as example code was missing # rom in front of div id! - browser console had errors about not being able to find 'appBindTest'

    Vue.createApp({
        data() {
            return {
            	imageSourceLucy: 'spaceship_lucy.png'
            }
        }
    }).mount('#appBindTest2');


// const appLucy = Vue.createApp({
//     data() {
//         return {
//             productName: 'XXBook a Cruise to the Moon',
//             productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
//             // additional properties later


//         }
//     },
// });

// //seems this line can go in either the html or js file?
// appLucy.mount('#lucy_cruise');

const lucyCruise = Vue.createApp({
    data() {
        return {
            productName: 'Book a Trip to Leith',
            productDescription: 'Take a break from the smog of Westerley and book a trip to the verdant moon Leith. Relax aboard aboard Lucy the Spaceship with a glass of Hock and watch the Killjoys in action',
            // additional properties later
            	imageSource2: 'spaceship_lucy.png',
                sourceColor2: 'color:green;'

        }
    },
});

//seems this line can go in either the html or js file?
lucyCruise.mount('#lucy_cruise');