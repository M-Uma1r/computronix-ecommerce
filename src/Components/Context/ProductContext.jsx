import React,{createContext, useState} from 'react'
const Data = createContext();

export default function ProductContext({children}) {

    const [Cards , setCards] = useState([
        {
            imgSrc : "https://www.czone.com.pk/images/thumbnails-large/copy-copy-copy-38-czone.com.pk-1540-15889-020524100012.jpg",
            productTitle : 'Apple iMac 24" | Apple M3 8-Core CPU, 24GB, 2TB SSD, 10-Core GPU | Silver',
            productCode : "d1",
            Brand:"Apple",
            priceUpdate :"22 Sep,2024",
            Description:'The world’s best all-in-one computer, is now supercharged by the M3 chip. With a stunning 24-inch display that gives you all the space you need and an iconic design that livens up any space, iMac is perfect for work and play. Apple M3 8-Core CPU 24GB Unified RAM| 2TB SSD 10-Core GPU | 16-Core Neural Engine 24" 4480 x 2520 Retina Display ',
            Price:1699
    
        },
        {
            imgSrc : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6580/6580517_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
            productTitle : 'MSI - Codex R2 Gaming Desktop - Intel Core i5-14400F - 16GB Memory - NVIDIA GeForce RTX 4060 - 1TB SSD - Black',
            productCode : "d2",
            Brand:"MSI",
            priceUpdate :"22 Sep,2024",
            Description:"The MSI Codex R2 Gaming Desktop delivers powerful performance in a sleek black design, perfect for gaming and multitasking. Powered by an Intel Core i5-14400F processor and 16GB of memory, it ensures smooth gameplay and efficient processing for demanding tasks. The NVIDIA GeForce RTX 4060 graphics card provides stunning visuals, making it ideal for high-resolution gaming and immersive experiences. With a 1TB SSD, you'll have ample storage and fast load times for all your games and applications. This desktop is a solid choice for gamers seeking power, speed, and style in one compact machine.",
            Price:899.99
    
        },
        {
            imgSrc : "https://www.datocms-assets.com/34299/1727324328-player-1-ww-09-04-24-hero-black-badge.png?ixlib=js-3.8.0&w=500&h=500&dpr=1&q=75",
            productTitle : 'NZXT Player: One -H5 Flow Gaming PC with RTX 3050 or RTX 4060 GPU',
            productCode : "d3",
            Brand:"NZXT",
            priceUpdate :"22 Sep,2024",
            Description:"The NZXT Player: One - H5 Flow Gaming PC offers a high-performance gaming experience with options for either the RTX 3050 or RTX 4060 GPU, providing impressive graphics and smooth gameplay. Designed for optimal airflow with the H5 Flow case, this PC keeps components cool during intense sessions. Ideal for both gaming and multitasking, it’s a reliable and stylish choice for gamers looking for power, versatility, and future-proofing at an accessible price.",
            Price:829
    
        },
        {
            imgSrc : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/pdp/testing/desktop-aw-r16-bk-lqd-cooling-gallery-1-test.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=271&qlt=100,1&resMode=sharp2&size=271,402&chrss=full",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "d4",
            Brand:"Apple",
            priceUpdate :"22 Sep,2024",
            Description:'The Alienware Aurora R16 Gaming Desktop is a powerhouse built for serious gamers, featuring high-performance Intel or AMD processors, cutting-edge NVIDIA GeForce or AMD Radeon graphics, and an advanced cooling system to handle intense gaming sessions. Its sleek, redesigned chassis offers improved airflow, quieter operation, and customizable RGB lighting. With upgradable components and ample storage options, the Aurora R16 is perfect for immersive gaming and future-proofing performance.',
            Price:1249.99
    
        },
        {
            imgSrc : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/notebook-xps-14-9440t-sl-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=675&qlt=100,1&resMode=sharp2&size=675,402&chrss=full",
            productTitle : 'Apple iMac 24" | Apple M3 8-Core CPU, 24GB, 2TB SSD, 10-Core GPU | Silver',
            productCode : "L1",
            Brand:"Apple",
            priceUpdate :"22 Sep,2024",
            Description:'The Apple iMac 24" with the powerful Apple M3 chip brings an 8-core CPU and 10-core GPU, ensuring smooth and fast performance for demanding tasks. Featuring 24GB of unified memory and a spacious 2TB SSD, this sleek silver iMac is built to handle multitasking and large files effortlessly. Its stunning 4.5K Retina display delivers vivid colors and sharp details, making it an ideal choice for creatives and professionals alike.',
            Price:1699
    
        },
        {
            imgSrc : "https://m.media-amazon.com/images/I/71xZUkl5dyL._AC_SX466_.jpg",
            productTitle : 'ASUS Zenbook Duo(2024)',
            productCode : "L2",
            Brand:"Asus",
            priceUpdate :"22 Sep,2024",
            Description:'The 2024 ASUS Zenbook Duo redefines multitasking with its innovative dual-screen design, featuring a primary display and the ScreenPad Plus—a secondary touchscreen that enhances productivity and creativity. Equipped with the latest Intel Core processor, high-performance graphics, and up to 32GB of RAM, this ultra-portable laptop is perfect for power users and creators on the go. Its sleek, lightweight build is both stylish and durable, making it an ideal companion for professionals seeking versatility and cutting-edge technology.',
            Price:1099.99
    
        },
        {
            imgSrc : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=510&qlt=100,1&resMode=sharp2&size=510,402&chrss=full",
            productTitle : 'Alienware m16 R2 Gaming Laptop',
            productCode : "L3",
            Brand:"Dell",
            priceUpdate :"22 Sep,2024",
            Description:'The Alienware m16 R2 Gaming Laptop delivers an immersive gaming experience with its powerful hardware and sleek design. Featuring the latest Intel or AMD processors, high-performance NVIDIA GeForce RTX graphics, and a 16-inch QHD display with fast refresh rates, this laptop ensures stunning visuals and smooth gameplay. With advanced cooling technology, customizable RGB lighting, and a premium build, the m16 R2 is crafted for serious gamers who demand peak performance and style in one package.',
            Price:829
    
        },
        {
            imgSrc : "https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "L4",
            Brand:"Lenovo",
            priceUpdate :"22 Sep,2024",
            Description:'The ThinkPad X1 Carbon Gen 12 (14" Intel) is a powerful and ultra-lightweight business laptop designed for professionals on the move. Featuring Intel’s latest processors, up to 32GB of memory, and a range of SSD options, this laptop provides seamless performance and productivity. Its 14-inch display offers vibrant visuals with options for high-resolution and low blue light settings. Known for durability and security, the X1 Carbon Gen 12 includes features like a fingerprint reader, facial recognition, and ThinkShield security suite, making it an ideal choice for business users who need reliability, portability, and advanced security.',
            Price:1361.88
    
        },
        {
            imgSrc : "https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "S1",
            Brand:"Lenovo",
            priceUpdate :"22 Sep,2024",
            Description:'The ThinkPad X1 Carbon Gen 12 (14" Intel) is a powerful and ultra-lightweight business laptop designed for professionals on the move. Featuring Intel’s latest processors, up to 32GB of memory, and a range of SSD options, this laptop provides seamless performance and productivity. Its 14-inch display offers vibrant visuals with options for high-resolution and low blue light settings. Known for durability and security, the X1 Carbon Gen 12 includes features like a fingerprint reader, facial recognition, and ThinkShield security suite, making it an ideal choice for business users who need reliability, portability, and advanced security.',
            Price:1361.88
    
        },        {
            imgSrc : "https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "S2",
            Brand:"Lenovo",
            priceUpdate :"22 Sep,2024",
            Description:'The ThinkPad X1 Carbon Gen 12 (14" Intel) is a powerful and ultra-lightweight business laptop designed for professionals on the move. Featuring Intel’s latest processors, up to 32GB of memory, and a range of SSD options, this laptop provides seamless performance and productivity. Its 14-inch display offers vibrant visuals with options for high-resolution and low blue light settings. Known for durability and security, the X1 Carbon Gen 12 includes features like a fingerprint reader, facial recognition, and ThinkShield security suite, making it an ideal choice for business users who need reliability, portability, and advanced security.',
            Price:1361.88
    
        },        {
            imgSrc : "https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "S3",
            Brand:"Lenovo",
            priceUpdate :"22 Sep,2024",
            Description:'The ThinkPad X1 Carbon Gen 12 (14" Intel) is a powerful and ultra-lightweight business laptop designed for professionals on the move. Featuring Intel’s latest processors, up to 32GB of memory, and a range of SSD options, this laptop provides seamless performance and productivity. Its 14-inch display offers vibrant visuals with options for high-resolution and low blue light settings. Known for durability and security, the X1 Carbon Gen 12 includes features like a fingerprint reader, facial recognition, and ThinkShield security suite, making it an ideal choice for business users who need reliability, portability, and advanced security.',
            Price:1361.88
    
        },        {
            imgSrc : "https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png",
            productTitle : 'Alienware Aurora R16 Gaming Desktop',
            productCode : "S4   ",
            Brand:"Lenovo",
            priceUpdate :"22 Sep,2024",
            Description:'The ThinkPad X1 Carbon Gen 12 (14" Intel) is a powerful and ultra-lightweight business laptop designed for professionals on the move. Featuring Intel’s latest processors, up to 32GB of memory, and a range of SSD options, this laptop provides seamless performance and productivity. Its 14-inch display offers vibrant visuals with options for high-resolution and low blue light settings. Known for durability and security, the X1 Carbon Gen 12 includes features like a fingerprint reader, facial recognition, and ThinkShield security suite, making it an ideal choice for business users who need reliability, portability, and advanced security.',
            Price:1361.88
    
        }
    ]
)

    const getProductByProductcode = (productCode) =>{
        return Cards.find(Card => Card.productCode === productCode )
    }
    
  return (
    <div>
        <Data.Provider value={{Cards,getProductByProductcode}}>
            {children}
        </Data.Provider>
    </div>
  )
}
export {Data}
