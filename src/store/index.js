import { createStore } from 'vuex'

export default createStore({
  state: {
    categories:[
      {
        id: 1,
        category:"Fresh Fruit & Vegatables",
        type:"fruit",
        image: `https://i.postimg.cc/Hx6p2dRL/aisle-fuit-vegs.jpg`,
        items:{
        item1:`https://i.postimg.cc/63NdxJWw/silo-product-image-v2-03-Dec2020-180128-6001007301118-front-479207-700-140-Wx140-H.jpg`,
        item2:`https://i.postimg.cc/zG6CpH4y/silo-product-image-v2-08-Aug2020-180113-6001007051044-front-441071-5317-140-Wx140-H.jpg`,
        item3:`https://i.postimg.cc/KYTnWvyJ/silo-product-image-v2-08-Aug2020-180123-6001007300845-front-441304-5550-140-Wx140-H.jpg`,
        item4:`https://i.postimg.cc/G2Jvc7tD/silo-product-image-v2-15-Jul2022-180111-6001007322199-Straight-on-49716-7622-140-Wx140-H.jpg`,
        item5:`https://i.postimg.cc/tJqW73nM/silo-product-image-v2-15-Jul2022-180112-6001007291778-Straight-on-49734-7645-140-Wx140-H.jpg`,
        item6:`https://i.postimg.cc/L5xfPJz6/silo-product-image-v2-15-Mar2022-180215-6001007020804-Straight-on-7445-18193-140-Wx140-H.jpg`,
        item7:`https://i.postimg.cc/Y2RQZsJK/silo-product-image-v2-15-Mar2022-180216-6001007071554-Straight-on-7463-18204-140-Wx140-H.jpg`,
        item8:`https://i.postimg.cc/J4hjLQLy/silo-product-image-v2-15-Mar2022-180218-6001007155971-Straight-on-7507-18246-140-Wx140-H.jpg`,
        item9:`https://i.postimg.cc/Fsn3sJrT/silo-product-image-v2-15-Mar2022-180401-6001007048174-Straight-on-12296-20276-140-Wx140-H.jpg`,
        item10:`https://i.postimg.cc/sgQSBD1s/silo-product-image-v2-15-Mar2022-180813-6001007301224-Straight-on-7935-23088-140-Wx140-H.jpg`,
        item11:`https://i.postimg.cc/9Q69y5qT/silo-product-image-v2-15-Mar2022-180817-6001007300975-Straight-on-8005-23147-140-Wx140-H.jpg`,
        item12:`https://i.postimg.cc/9fy7p8Gk/silo-product-image-v2-15-Mar2022-180819-6001007300890-Straight-on-8015-23159-140-Wx140-H.jpg`,
        item13:`https://i.postimg.cc/26mBXQGS/silo-product-image-v2-16-Oct2021-180202-6001007056445-front-2779640-7922-140-Wx140-H.jpg`,
        item14:`https://i.postimg.cc/pTZnNmcY/silo-product-image-v2-21-Jul2022-180121-6001000003712-Straight-on-50230-8675-140-Wx140-H.jpg`,
        item15:`https://i.postimg.cc/dQj9v1Zf/silo-product-image-v2-22-Jul2021-180059-6001007051433-front-1500559-4733-140-Wx140-H.jpg`,
        item16:`https://i.postimg.cc/NfGk0c1j/silo-product-image-v2-24-Jul2021-180110-6001007022044-front-1501680-5432-140-Wx140-H.jpg`,
        item17:`https://i.postimg.cc/wj75hQ4K/silo-product-image-v2-27-Aug2019-180342-6001007300838-front-372063-617-140-Wx140-H.jpg`,
        item18:`https://i.postimg.cc/8PyBJ0HB/silo-product-image-v2-27-Nov2021-180054-6001007076078-front-2829094-6603-140-Wx140-H.jpg
          `
        }
        

      },
      {
        id: 2,
        category:"Bakery",
        type:"bakery",       
        image:`https://i.postimg.cc/9FwHKGsV/aisle-bakery.jpg`

      },
      {
        id: 3,
        category:"Milk, Dairy & Eggs",
        type:"milk",       
        image:`https://i.postimg.cc/5NCDnfF2/aisle-milk-diary-eggs.jpg`

      },
      {
        id: 4,
        category:"Meat, Poultry & Seafood",
        type:"meat",       
        image:`https://i.postimg.cc/5NCDnfF2/aisle-milk-diary-eggs.jpg`

      },{
        id: 5,
        category:"Ready Meals & Desserts",
        type:"meals",       
        image:`https://i.postimg.cc/sXHb0Xcv/aisle-convenience-meals.jpg`

      },
      {
        id: 6,
        category:"Deli & Party",
        type:"deli",       
        image:`https://i.postimg.cc/tJ180jSD/aisle-deli-party.jpg`

      },
      {
        id: 7,
        category:"Frozen Food",
        type:"frozen",       
        image:`https://i.postimg.cc/5yZTbRDJ/aisle-frozen-food.jpg`

      },
      {
        id: 8,
        category:"Chocolates Chips & Snacks", 
        type:"snack",      
        image:`https://i.postimg.cc/JhqfZKH3/aisle-chocolates-sweets.jpg`
          

      },
      {
        id: 9,
        category:"Food Cupboard",
        type:"cupboard",       
        image:`https://i.postimg.cc/4dxr5tpD/aisle-food-cupboard.jpg`

      },
      {
        id: 10,
        category:"Beverages",
        type:"beverages",       
        image:`https://i.postimg.cc/rw62kDL4/aisle-beverages.jpg`

      },
      {
        id: 11,
        category:"Beer, Cider & Seltzer",
        type:"beer",       
        image:`hhttps://i.postimg.cc/sgpdD3VN/aisle-beer-cider.jpg`

      },{
        id: 12,
        category:"Wine",
        type:"wine",       
        image:`https://i.postimg.cc/wB0r7vn0/aisle-wine.jpg`

      },
      {
        id: 13,
        category:"Spirits",
        type:"spirits",       
        image:`https://i.postimg.cc/MGW46R3n/aisle-spirits.jpg`

      },
      {
        id: 14,
        category:"Household & Cleaning",
        type:"cleaning",       
        image:`https://i.postimg.cc/vmbR4CTH/aisle-cleaning.jpg`

      },
      {
        id: 15,
        category:"Personal Care & Health",
        type:"personal",       
        image:`https://i.postimg.cc/2SNMtg4F/aisle-personal-care.jpg`

      },
      {
        id: 16,
        category:"Baby",
        type:"baby",       
        image:`https://i.postimg.cc/9MkNYkm9/aisle-baby.jpg`

      },
      {
        id: 17,
        category:"Pet Care",
        type:"pet",       
        image:`https://i.postimg.cc/0yGF1Zng/aisle-pets.jpg`

      },{
        id: 18,
        category:"Home, Appliances & Outdoor",
        type:"home",        
        image:`https://i.postimg.cc/VsT3qJvh/aisle-homeware.jpg`
          

      },
      {
        id: 19,
        category:"Electronics & Office",
        type:"electronics ",       
        image:`https://i.postimg.cc/C15QD0gY/aisle-electronics.jpg`

      }

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
