import offers from "./data/correct-offer-499.json";

export const list = [
  // {
  //   loading: true
  // },
  {
    name: "MNIST",
    loading: false
  },
  {
    name: "ImageNet",
    loading: false
  },
  {
    name: "Flowers",
    loading: false
  },
  {
    name: "Et ut eu",
    loading: false
  },
  {
    name: "Ea eu laboris",
    loading: false
  },
  {
    name: "In duis",
    loading: false
  }
];

export const userDatasets = [
  {
    key: "1",
    hospital: "Sibley Hospital",
    name: "Genomics data",
    categories: ["Brain", "test"],
    keywords: ["3d", "brain", "neuroscience"],
    id: "7e3a2d8e-344d-4b09-92e8-698c1715647a",
    description: `Est eos necessitatibus quis harum quidem. Unde a harum dolorum animi tempore sit corporis eos voluptas. Deserunt omnis odit.
 
Neque cupiditate distinctio corrupti consequuntur unde iste ut alias hic. Vel dicta ut facilis non qui. Harum aut quia laborum id vel.
 
Tempora sit facilis commodi quae unde molestiae esse iste. Sapiente sapiente corrupti sit. Autem ut ut doloribus.`
  },
  {
    key: "2",
    hospital: "Sibley Hospital",
    name: "Genomics data",
    categories: ["Brain", "test"],
    keywords: ["3d", "brain", "neuroscience"],
    id: "7e3a2d8e-344d-4b09-92e8-698c1715647a",
    description: `Est eos necessitatibus quis harum quidem. Unde a harum dolorum animi tempore sit corporis eos voluptas. Deserunt omnis odit.
 
Neque cupiditate distinctio corrupti consequuntur unde iste ut alias hic. Vel dicta ut facilis non qui. Harum aut quia laborum id vel.
 
Tempora sit facilis commodi quae unde molestiae esse iste. Sapiente sapiente corrupti sit. Autem ut ut doloribus.`
  },
  {
    key: "3",
    hospital: "Sibley Hospital",
    name: "Genomics data",
    categories: ["Brain", "test"],
    keywords: ["3d", "brain", "neuroscience"],
    id: "7e3a2d8e-344d-4b09-92e8-698c1715647a",
    description: `Est eos necessitatibus quis harum quidem. Unde a harum dolorum animi tempore sit corporis eos voluptas. Deserunt omnis odit.
 
Neque cupiditate distinctio corrupti consequuntur unde iste ut alias hic. Vel dicta ut facilis non qui. Harum aut quia laborum id vel.
 
Tempora sit facilis commodi quae unde molestiae esse iste. Sapiente sapiente corrupti sit. Autem ut ut doloribus.`
  }
];

export function getRecommendedOffers() {
  // return offers;
  return offers.map(offer => {
    return {
      key: offer.data_id,
      id: offer.data_id,
      categories: offer.category,
      name: offer.dataset_name,
      hospital: "Sibley Memorial Hospital",
      ...offer
    };
  });
}

export function getDataset(id) {
  return offers
    .map(offer => {
      return {
        key: offer.data_id,
        id: offer.data_id,
        categories: offer.category,
        name: offer.dataset_name,
        hospital: "Sibley Memorial Hospital",
        ...offer
      };
    })
    .filter(val => val.id == id)[0];
}
