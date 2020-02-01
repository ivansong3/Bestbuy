import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const itemInfo = {
    "0": "default; default; default",
    "1": "iPhone X; $619.82; https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HN002_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1559870271538",
    "2": "iPhone 8; $388.90; https://www.apple.com/newsroom/images/product/iphone/standard/iphone8plus_product_red_front_041018_carousel.jpg.large_2x.jpg",
    "3": "Samsung Galaxy S8; $298.98; https://image-us.samsung.com/SamsungUS/home/mobile/mobile-accessories/pdp/SM-G950UZKAATT/gallery/S8_Black_front.jpg?$product-details-jpg$",
    "4": "Google Pixel 3; $485.87; https://cdn.dxomark.com/wp-content/uploads/medias/post-24749/googlepixel3.jpg",
    "5": "Blackberry KEY2 LE; $579.99; https://www.notebookcheck.net/fileadmin/_processed_/b/d/csm_BlackBerry_Key2_rechts_links_006b9ca4bc.jpg",
    "6": "Samsung Galaxy Note 10+; $899.99; https://images.samsung.com/is/image/samsung/uk-galaxy-note10plus-sm-n975-sm-n975fzsdbtu-179669580?$PD_GALLERY_L_SHOP_JPG$",
    "7": "Motorola Moto G7+; $255.62; https://i5.walmartimages.com/asr/e6eea3f9-8844-4cde-92d9-8b716ffc8d15_1.be5e25475d5d9dab02ddb54196d70e2b.jpeg",
    "8": "Huawei P30 Lite; $598.88; https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p30-lite/img/Huawei-Nova-4e_bg_48m.jpg",
    "9": "Samsung A20s; $222.89; https://images.samsung.com/is/image/samsung/hk-en-galaxy-a20s-a207-sm-a2070zbgtgy-vitalityblue-188826732?$PD_GALLERY_L_JPG$"
}

class ProductCard extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={getImage(itemInfo[this.props.item])}/>
                <Card.Header>{getProductName(itemInfo[this.props.item])}</Card.Header>
                <Card.Body>
                <Card.Text classname="cardDescription"> {getProductDescription(itemInfo[this.props.item])}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const getProductName = (string) => {
    if (string !== undefined) {
        return string.split(";")[0];
    }
}

const getProductDescription = (string) => {
    if (string !== undefined) {
        return string.split(";")[1];
    }
}

const getImage = (string) => {
    if (string !== undefined) {
        return string.split(";")[3];
    }
}

export default ProductCard;