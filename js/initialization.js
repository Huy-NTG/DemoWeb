function createProduct(){
    if(localStorage.getItem('Book') == null){
        let Book =[
            {
                id: 1,
                status: 1,
                title: 'Truyện Trinh Thám 1',
                img: './assets/img/products/TT1.jpg', //đường dẫn đúng
                price: 100000
            },
            {
                id: 2,
                status: 1,
                title: 'Truyện Trinh Thám 2',
                img: '../assets/img/products/TT2.webp',
                price: 100000
            },
            {
                id: 3,
                status: 1,
                title: 'Truyện Trinh Thám 3',
                img: '../assets/img/products/TT3.webp',
                price: 100000
            },
            {
                id: 4,
                status: 1,
                title: 'Truyện Trinh Thám 4',
                img: '../assets/img/products/TT4.jpg',
                price: 100000
            },
            {
                id: 5,
                status: 1,
                title: 'Truyện Trinh Thám 5',
                img: '../assets/img/products/TT5.webp',
                price: 100000
            },
            {
                id: 6,
                status: 1,
                title: 'Truyện Trinh Thám 6',
                img: '../assets/img/products/TT6.webp',
                price: 100000
            },
            {
                id: 7,
                status: 1,
                title: 'Truyện Trinh Thám 7',
                img: '../assets/img/products/TT7.jpg',
                price: 100000
            },
            {
                id: 8,
                status: 1,
                title: 'Truyện Trinh Thám 8',
                img: '../assets/img/products/TT8.webp',
                price: 100000
            },
            {
                id: 9,
                status: 1,
                title: 'Truyện Trinh Thám 9',
                img: '../assets/img/products/TT9.webp',
                price: 100000
            },
            {
                id: 10,
                status: 1,
                title: 'Truyện Trinh Thám 10',
                img: '../assets/img/products/TT10.jpg',
                price: 100000
            },
            {
                id: 11,
                status: 1,
                title: 'Truyện Trẻ em 1',
                img: '../assets/img/products/TE1.jpg',
                price: 100000
            },
            {
                id: 12,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE2.jpg',
                price: 100000
            },
            {
                id: 13,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE3.jpg',
                price: 100000
            },
            {
                id: 14,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE4.jpg',
                price: 100000
            },
            {
                id: 15,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE5.jpg',
                price: 100000
            },
            {
                id: 16,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE6.jpg',
                price: 100000
            },
            {
                id: 17,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE7.jpg',
                price: 100000
            },
            {
                id: 18,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE8.jpg',
                price: 100000
            },
            {
                id: 19,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE9.jpg',
                price: 100000
            },
            {
                id: 20,
                status: 1,
                title: 'Truyện Trẻ em 2',
                img: '../assets/img/products/TE10.jpg',
                price: 100000
            },
            {
                id: 21,
                status: 1,
                title: 'Sách khoa học 1',
                img: '../assets/img/products/KH1.jpg',
                price: 100000
            },
            {
                id: 22,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH2.jpg',
                price: 100000
            },
            {
                id: 23,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH3.jpg',
                price: 100000
            },
            {
                id: 24,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH4.jpg',
                price: 100000
            },
            {
                id: 25,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH5.jpg',
                price: 100000
            },
            {
                id: 26,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH6.jpg',
                price: 100000
            },
            {
                id: 27,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH7.jpg',
                price: 100000
            },
            {
                id: 28,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH8.jpg',
                price: 100000
            },
            {
                id: 29,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH9.jpg',
                price: 100000
            },
            {
                id: 30,
                status: 1,
                title: 'Sách khoa học 2',
                img: '../assets/img/products/KH10.jpg',
                price: 100000
            },
            {
                id: 31,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD1.webp',
                price: 100000
            },
            {
                id: 32,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/assets/img/products/KD2.webp',
                price: 100000
            },
            {
                id: 33,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD3.webp',
                price: 100000
            },
            {
                id: 34,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD4.webp',
                price: 100000
            },
            {
                id: 35,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD5.webp',
                price: 100000
            },
            {
                id: 36,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD6.webp',
                price: 100000
            },
            {
                id: 37,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD7.webp',
                price: 100000
            },
            {
                id: 38,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD8.webp',
                price: 100000
            },
            {
                id: 39,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD9.jpg',
                price: 100000
            },
            {
                id: 40,
                status: 1,
                title: 'Truyện kinh dị',
                img: '../assets/img/products/KD10.jpg',
                price: 100000
            },
            {
                id: 41,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH1.jpg',
                price: 100000
            },
            {
                id: 42,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH2.jpg',
                price: 100000
            },
            {
                id: 43,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH3.jpg',
                price: 100000
            },
            {
                id: 44,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH4.jpg',
                price: 100000
            },
            {
                id: 45,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH5.jpg',
                price: 100000
            },
            {
                id: 46,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH6.jpg',
                price: 100000
            },
            {
                id: 47,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH7.jpg',
                price: 100000
            },
            {
                id: 48,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH8.jpg',
                price: 100000
            },
            {
                id: 49,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH9.jpg',
                price: 100000
            },
            {
                id: 50,
                status: 1,
                title: 'Truyện Hài hước',
                img: '../assets/img/products/HH10.jpg',
                price: 100000
            },
            {
                id: 51,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS1.jpg',
                price: 100000
            },
            {
                id: 52,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS2.jpg',
                price: 100000
            },
            {
                id: 53,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS3.jpg',
                price: 100000
            },
            {
                id: 54,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS4.jpg',
                price: 100000
            },
            {
                id: 55,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS5.jpg',
                price: 100000
            },
            {
                id: 56,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS6.jpg',
                price: 100000
            },
            {
                id: 57,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS7.jpg',
                price: 100000
            },
            {
                id: 58,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS8.jpg',
                price: 100000
            },
            {
                id: 59,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS9.jpg',
                price: 100000
            },
            {
                id: 60,
                status: 1,
                title: 'Sách Lịch sử',
                img: '../assets/img/products/LS10.jpg',
                price: 100000
            },
        ]
        localStorage.setItem('Book', JSON.stringify(Book));
    }
}
function createAcclone(){
    let aclone = localStorage.getItem("Acclone");
    if(!aclone){
        aclone = [];
        aclone.push({
            fullname: "Gia Huy",
            phone: "0367644927",
            password: "120304",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('Acclones', JSON.stringify(aclone));
    }
}
window.onload = createProduct();
window.onload = createAcclone();