const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT';
const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT';
const SET_REVIEWS = 'PRODUCT/SET_REVIEWS';

const initialState = {
  products: {
    largeCardSections: [
      {
        id: 1,
        title: "Top-rated Fire Extinguisher in Niagara",
        snippet: "User say these are the best fire extinguishers to rent if your house is burning down.",
        cards: [
          {
            id: 19,
            title: "Toronto's Portable 2L Fire Extinguisher",
            snippet: "This fire extinguisher saved homes from completely burning down. People that used it only had 98% of their homes burned down.",
            image: "fe1.jpg"
          },
          {
            id: 20,
            title: "Empty Super Red Fire Extinguisher",
            snippet: "This is one of the most red fire extinguishers you will ever see. Super clean. It's pretty much useless otherwise.",
            image: "fe2.jpg"
          },
          {
            id: 21,
            title: "Fire Extinguisher, Perfect for Pools",
            snippet: "If you ever find that your pool is on fire then this is the fire extinguisher for you. It has a 100% success rate.",
            image: "fe3.jpg"
          }
        ]
      },
      {
        id: 2,
        title: "Luxury Fire Extinguisher",
        snippet: "Take down that fire lavishly and in style with our luxury extinguishers.",
        cards: [
          {
            id: 22,
            title: "Vintage 1864 Fire Extinguisher",
            snippet: "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
            image: "fe4.png"
          },
          {
            id: 23,
            title: "Pure Silver & Gold Fire Extinguisher",
            snippet: "This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!",
            image: "fe5.png"
          },
          {
            id: 24,
            title: "Two in One Fire Extinguisher",
            snippet: "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
            image: "fe6.jpg"
          }
        ]
      }
    ],
    smallCardSections: [
      {
        id: 1,
        title: "Fire Extinguisher in Toronto",
        cards: [
          {
            id: 1,
            image: "fe7.jpg"
          },
          {
            id: 2,
            image: "fe8.jpg"
          },
          {
            id: 3,
            image: "fe9.jpg"
          },
          {
            id: 4,
            image: "fe10.jpg"
          },
          {
            id: 5,
            image: "fe11.jpg"
          },
          {
            id: 6,
            image: "fe12.jpg"
          },
          {
            id: 7,
            image: "fe13.jpg"
          },
          {
            id: 8,
            image: "fe14.jpg"
          },
          {
            id: 9,
            image: "fe15.jpg"
          },
          {
            id: 10,
            image: "fe16.jpg"
          },
          {
            id: 11,
            image: "fe17.jpeg"
          },
          {
            id: 12,
            image: "fe18.jpg"
          }
        ]
      },
      {
        id: 2,
        title: "Fire Extinguisher in Niagara",
        cards: [
          {
            id: 13,
            image: "fe19.jpg"
          },
          {
            id: 14,
            image: "fe20.jpg"
          },
          {
            id: 15,
            image: "fe21.jpg"
          },
          {
            id: 16,
            image: "fe22.jpg"
          },
          {
            id: 17,
            image: "fe23.jpg"
          },
          {
            id: 18,
            image: "fe24.jpg"
          },
          {
            id: 19,
            image: "fe1.jpg"
          },
          {
            id: 20,
            image: "fe2.jpg"
          },
          {
            id: 21,
            image: "fe3.jpg"
          },
          {
            id: 22,
            image: "fe4.png"
          },
          {
            id: 23,
            image: "fe5.png"
          },
          {
            id: 24,
            image: "fe6.png"
          }
        ]
      }
    ],
    productsList: [
      {
        id: 1,
        title: "Dry Powder Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe7.jpg"
      },
      {
        id: 2,
        title: "2L Portable & Safe",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe8.jpg"
      },
      {
        id: 3,
        title: "2L Portable & Safe",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe9.jpg"
      },
      {
        id: 4,
        title: "Cartridge Operated Dry Chemical Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe10.jpg"
      },
      {
        id: 5,
        title: "Clean Agent Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe11.jpg"
      },
      {
        id: 6,
        title: "Water Mist",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe12.jpg"
      },
      {
        id: 7,
        title: "Clean Agent Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe13.jpg"
      },
      {
        id: 8,
        title: "2L Portable & Safe",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe14.jpg"
      },
      {
        id: 9,
        title: "Water & Foam Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe15.jpg"
      },
      {
        id: 10,
        title: "Clean Agent Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe16.jpg"
      },
      {
        id: 11,
        title: "Water Mist",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe17.jpeg"
      },
      {
        id: 12,
        title: "2L Portable & Safe",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe18.jpg"
      },
      {
        id: 13,
        title: "Water Mist",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe19.jpg"
      },
      {
        id: 14,
        title: "Clean Agent",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe20.jpg"
      },
      {
        id: 15,
        title: "ABC Powder Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe21.jpg"
      },
      {
        id: 16,
        title: "Carbon Dioxide Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe22.jpg"
      },
      {
        id: 17,
        title: "Wet Chemical Fire Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe23.jpg"
      },
      {
        id: 18,
        title: "Dry Powder Extinguisher",
        snippet: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe24.jpg"
      },
      {
        id: 19,
        title: "Toronto's Portable 2L Fire Extinguisher",
        snippet: "This fire extinguisher saved homes from completely burning down. People that used it only had 98% of their homes burned down.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe1.jpg"
      },
      {
        id: 20,
        title: "Empty Super Red Fire Extinguisher",
        snippet: "This is one of the most red fire extinguishers you will ever see. Super clean. It's pretty much useless otherwise.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe2.jpg"
      },
      {
        id: 21,
        title: "Fire Extinguisher, Perfect for Pools",
        snippet: "If you ever find that your pool is on fire then this is the fire extinguisher for you. It has a 100% success rate.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe3.jpg"
      },
      {
        id: 22,
        title: "Vintage 1864 Fire Extinguisher",
        snippet: "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe4.png"
      },
      {
        id: 23,
        title: "Pure Silver & Gold Fire Extinguisher",
        snippet: "This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe5.png"
      },
      {
        id: 24,
        title: "Two in One Fire Extinguisher",
        snippet: "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!",
        image: "fe6.jpg"
      }
    ]
  },
  productsReviews: [],
  userProductsList: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        userProductsList: action.products
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        userProductsList: action.products
      }
    case SET_REVIEWS:
        return {
          ...state, 
          productsReviews: action.reviews
        }
    default:
      return state;
  }
}

export const productsActions = {
  addProduct: (products) => ({ type: ADD_PRODUCT, products }),
  removeProducts: (products) => ({ type: REMOVE_PRODUCT, products }),
  setReviews: (reviews) => ({ type: SET_REVIEWS, reviews})
}

export const fetchReviews = () => async (dispatch) => {
  const response = await fetch("https://randomuser.me/api/?results=5");
  const reviews = await response.json();

  dispatch(productsActions.setReviews(reviews.results));
}

