import { faker } from '@faker-js/faker';


export function generateUserData() {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
    };
}

// Create testdata for room
export function generateRoomData() {
    return {
        // category: faker
        roomcategory: faker.helpers.arrayElement(['Double', 'Single', 'Twin']),
        // roomnumber is between 1 to 10
        roomnumber: faker.number.int({ min: 1, max: 10 }),
        // floornumber is between 1 to 5
        floornumber: faker.number.int({ min: 1, max: 5 }), 
        // available 
        roomavailable: faker.datatype.boolean(0.5),
        // price is between 100 to 1000
        roomprice: faker.number.int({ min: 100, max: 1000 }),
        // features
        roomfeatures: faker.helpers.arrayElements(['Balcony', 'Ensuite', 'Sea View', 'Penthouse'])

        // Features Balcony, Ensuite, Sea View, Penthouse

    };
}
// skapa rum
// Category - single, double, twin,
// Number
//  Floor
// Available
// Price
// Features Balcony, Ensuite, Sea View, Penthouse


// Clients
// Name
// Email
// Telephone

// New Bill
// Value
// Paid - i kryssad eller ej

// New Reservation
// Start
// End
// Client - väljs som nr
// Room - väljs som nr
// Bill - Väljs som nr 


