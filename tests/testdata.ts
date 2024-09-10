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
    };
}

export function generateClientData() {
    return {
        clientname: faker.person.fullName(),
        clientemail: faker.internet.email(),
        // clientphonenumber: faker.phone.number({ style: 'international' }),
        clientphonenumber:generateTelephoneNumber(),
    };
}
export function generateTelephoneNumber() {
    const areaCode = '07' + faker.string.numeric(1); // Generats the first bit of a swedish phonenumber 070, 073, 076, etc.
    const firstPart = faker.string.numeric(3);       // First bit for example 123
    const secondPart = faker.string.numeric(2);      // Second bit for example 45
    const thirdPart = faker.string.numeric(2);       // Third bit for example 67

    return `${areaCode}-${firstPart} ${secondPart} ${thirdPart}`;
    };



// New Bill
// Value
// Paid - i kryssad eller ej

// New Reservation
// Start
// End
// Client - väljs som nr
// Room - väljs som nr
// Bill - Väljs som nr 


