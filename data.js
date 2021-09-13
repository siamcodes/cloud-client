export default {
    timetables: [
        {
            id: '30903-2005',
            name: 'การโปรแกรมระบบไอโอที',
            unit: 3,
            teacher: 'สมเกียรติ ใจดี'
        },
        {
            id: '30903-2103',
            name: 'การพัฒนาซอฟต์แวร์ประยุกต์บนคลาวน์',
            unit: 3,
            teacher: 'สมเกียรติ ใจดี'
        },
        {
            id: '30204-2303',
            name: 'การพัฒนาโปรแกรมบนอุปกรณ์เคลื่อนที่แบบพกพา',
            unit: 3,
            teacher: 'สมเกียรติ ใจดี'
        },
        {
            id: '20204-2108',
            name: 'การเขียนโปรแกรมบนเชิงวัตถุเบื้องต้น',
            unit: 3,
            teacher: 'สมเกียรติ ใจดี'
        }

    ],

    categories: [
        {
            name: 'อุปกรณ์คอมพิวเตอร์',
            slug: 'computer'
        },
        {
            name: 'เครื่องใช้ไฟฟ้า',
            slug: 'electric'
        },
        {
            name: 'อุปกรณ์อิเล็กทรอนิกส์',
            slug: 'electronic'
        },
        {
            name: 'อุปกรณ์เน็ตเวิร์ก',
            slug: 'network'
        }
    ],

    products: [
        {
            name: 'ESP32',
            slug: 'esp32',
            price: 165,
            stock: 10,
            description: 'ESP32 WROOM-32 WIFI+Bluetooth 2-in-1 Dual-Core MCU Low Power Development Board',
            category: 'electronic',
            picture: '/product/pic1.jpg'
        },
        {
            name: 'ESP8266',
            slug:'esp8266',
            price: 140,
            stock: 5,
            description: 'ESP8266 ESP-12F WiFi wireless module for IoT',
            category: 'electronic',
            picture: '/product/pic2.jpg'
        },
        {
            name: 'DHT22',
            slug:'dht22',
            price: 120,
            stock: 20,
            description: 'DHT22 AM2302B digital temperature and humidity sensor',
            category: 'electronic',
            picture: '/product/pic3.jpg'
        },
        {
            name: 'Max7219 LED dot Matrix',
            slug: 'max7219leddotmatrix',
            price: 165,
            stock: 10,
            description: 'Max7219 LED dot matrix module control single chip microcomputer module 4 in 1 display sending 5P line suitable for MCU',
            category: 'electronic',
            picture: '/product/pic4.jpg'
        },
        {
            name: 'RS485 to TTL',
            slug:'rs485tottl',
            price: 140,
            stock: 5,
            description: 'RS485 to TTL Stable Module',
            category: 'electronic',
            picture: '/product/pic5.jpg'
        },
        {
            name: 'MFRC-522 RFID',
            slug:'mfrc522rfid',
            price: 100,
            stock: 5,
            description: 'MFRC-522 RFID radio frequency IC card induction module RFID wireless IC module 13.56Mhz RC522',
            category: 'electronic',
            picture: '/product/pic6.jpg'
        },

    ]
}
