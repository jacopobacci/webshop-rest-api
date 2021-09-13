const Product = require("../models/product.model");
const Category = require("../models/category.model");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const shoesTitles = [
    "Reebok Club C 85 Revenge Vintage",
    "Vans Classic Slip-On",
    "DC Shoes Tonik",
    "Lakai Griffin",
    "Vans Old Skool",
  ];

  const shoesImgs = [
    "https://media.endclothing.com/media/f_auto,w_600,h_600/prodmedia/media/catalog/product/2/6/26-03-2021_MB_FW4862_1_1.jpg",
    "https://images.vans.com/is/image/VansEU/VN000EYEBKA-HERO",
    "https://media.titus.de/media/image/1a/e6/e6/DC-Shoes-Alle-Schuhe-Tonik-black-black-Vorderansicht_600x600.jpg",
    "https://lotnikshop.pl/userdata/public/gfx/1556/pol_pm_BUTY-MESKIE-LAKAI-FW20-CAMBRIDGE-NAVY-WHITE-SUEDE-23488_4.jpg",
    "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
  ];

  //--------------------Travel Bags
  const sweatshirtsTitles = [
    "Adidas Seatshirt",
    "Nike Sportswear Mens Club Sweatshirt",
    "Casual Oversized Champion Sweatshirt",
    "Grey Patagonia Sweatshirt",
    "Adidas Vintage Sweatshirt",
  ];

  const sweatshirtsImgs = [
    "https://img01.ztat.net/article/spp-media-p1/bfa3d54cb37238f6b2d13635afb44de4/7e98eddf2c694ceea21df5dae6f3eeec.jpg?imwidth=1800&filter=packshot",
    "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwec8c51a9/images/58727701/Rebel_58727701_grey_hi-res.jpg?sw=558&sh=558&sm=fit",
    "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwd050cc50/images/hi-res/25528_STH.jpg?sw=1600&sh=1600&sfrm=png&q=80&bgcolor=f6f6f6",
    "https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw1029ba51/images/hi-res/63015_PLDG.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6",
    "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/xeJoQME8QHGYMtJjRx21",
  ];

  //--------------------Briefcases
  const backpacksTitles = [
    "Vans Disorder Plus",
    "Dakine Heli Pro 20L Backpack",
    "Dakine Mission Surf Pack",
    "Invicta Jolly Vintage Backpack",
  ];

  const backpacksImgs = [
    "https://images.vans.com/is/image/VansEU/VN0A4MPI6ZC-HERO",
    "https://cdn.bike24.net/i/mb/35/16/50/dakine-heli-pro-20l-black-1-850510.jpg",
    "https://www.dakine.fr/media/image/f3/96/68/Dakine-Mission-Surf-Pack-30L-Rucksack-mit-Nassfach-Griffin-1950-MAIN.jpg",
    "https://n.nordstrommedia.com/id/sr3/02a097dc-8066-42be-be6c-56159eddda38.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  ];

  //--------------------Mini Bags
  const jacketsTitles = [
    "Fila Beige Jacket",
    "Black Columbia Hooded Jacket",
    "Patagonia Rainshadow Jacket",
    "Women's Washed Duck Active Jacket",
    "Smooth Carhartt Wip OG Arctic Coat",
  ];
  const jacketsImgs = [
    "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/FILA-Boys-Bruno-Sherpa-Jacket-_319261.jpg",
    "https://images2.drct2u.com/pdp_main_tablet_x2/products/rc/rc751/n08rc751500s.jpg",
    "https://www.tauntonleisure.com/images/wbs20_85115_fre.jpg",
    "https://www.bfgcdn.com/1500_1500_90/103-1295-0111/carhartt-womens-washed-duck-active-jacket-veste-de-loisirs.jpg",
    "https://smoothitalia.com/wp-content/uploads/2020/11/carhartt-wip-og-arctic-coat-hamilton-brown-black-aged-canvas-01.jpg",
  ];

  //--------------------Large Handags

  const jeansTitles = [
    "Levi's 501 Light Blue",
    "Vintage black washed Levi's 501",
    "Carhartt WIP W Pierce Pant Blue Stone Washed",
    "Wrangler Wild West",
    "Vintage Wrangler Jeans Black Denim",
  ];
  const jeansImgs = [
    "https://storage.googleapis.com/max-crushonapp-com/new_crushon/2021/03/7cfc78ac-p10200001-2-scaled.jpg",
    "https://i.pinimg.com/originals/6e/26/75/6e26756d3da4033d7efc262d9b189663.jpg",
    "https://twin-shop.be/39254-large_default/carhartt-wip-w-pierce-pant-blue-stone-washed.jpg",
    "https://images.asos-media.com/products/wrangler-wild-west-jeans-met-rechte-pijpen-en-hoge-taille-in-donkere-wassing/21133006-3?$n_640w$&wid=513&fit=constrain",
    "https://i.etsystatic.com/6419512/r/il/efabe4/1230910916/il_794xN.1230910916_rxv7.jpg",
  ];

  //-----------------------Purses
  const sandalsTitles = [
    "Birkenstock Arizona",
    "Birkenstock Mayari",
    "Teva Original Universal Canyon Dark Gull Grey",
    "Teva Original Universal Boomerang",
    "Dr Martens Sandals",
  ];
  const sandalsImgs = [
    "https://www.shooos.be/media/catalog/product/cache/9/image/9df78eab33525d08d6e5fb8d27136e95/b/i/birkenstock-arizona-bs-oiled-leather-habana-regular-5.jpg",
    "https://www.shooos.be/media/catalog/product/cache/9/image/9df78eab33525d08d6e5fb8d27136e95/b/i/birkenstock-mayari-birko-flor-black-regular-4.jpg",
    "https://www.bfgcdn.com/1500_1500_90/025-0229-2011/teva-original-universal-sandals.jpg",
    "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000200821894_01_ts.jpg",
    "https://i1.adis.ws/i/drmartens/23802001.83.jpg?$medium$",
  ];

  //-----------------Totes

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          title: titlesArr[i],
          image: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.datatype.number({ min: 40, max: 80 }),
          category: categ._id,
          createdAt: faker.date.past(2),
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("Closing connection");
    await mongoose.disconnect();
  }

  await seedProducts(shoesTitles, shoesImgs, "Shoes");
  await seedProducts(backpacksTitles, backpacksImgs, "Backpacks");
  await seedProducts(sweatshirtsTitles, sweatshirtsImgs, "Sweatshirts");
  await seedProducts(jacketsTitles, jacketsImgs, "Jackets");
  await seedProducts(jeansTitles, jeansImgs, "Jeans");
  await seedProducts(sandalsTitles, sandalsImgs, "Sandals");

  await closeDB();
}

seedDB();
