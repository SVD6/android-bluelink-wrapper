import BlueLinky from "bluelinky";

const username = 'vikranthdesu@gmail.com';
const password = 'Njoy2022';
const pin = '2466';
const vin = 'KMHLW4AK9NU006586';
const region = 'CA';
const brand = 'hyundai';

const client = new BlueLinky({
    username,
    password,
    region,
    brand,
    pin
});

console.log("Hello World");

client.on('ready', async () => {
    const vehicle = client.getVehicle(vin);
    try {
        const response = await vehicle.lock();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
});

client.on('error', async (err) => {
    console.log(err);
});