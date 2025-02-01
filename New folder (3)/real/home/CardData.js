import { Images } from "../../utils";

  // Mock user data
  export const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: Images.user
  };

export const propertyData = [
  {
    id: 1,
    image: Images.backgroundOne,
    title: 'Spotlight Property',
    price: '$1,300,000',
    location: '1421 San Pedro St. Los Angeles, CA',
    beds: 4,
    baths: 3,
    sqft: 3500,
    isNew: true,
    isPopular: true,
    yearBuilt: 2021,
    parkingSpaces: 2,
    description: 'A stunning villa with modern amenities and breathtaking views.',
    agency: {
      name: 'Jon Smith',
      email: 'testing@gmail.com'
    }
  },
  {
    id: 2,
    image: Images.imageTwo,
    title: 'Luxury Villa',
    price: '$500,000',
    location: 'Beachfront',
    beds: 4,
    baths: 3,
    sqft: 2500,
    isNew: false,
    isPopular: true,
    yearBuilt: 2010,
    parkingSpaces: 2,
    description: 'A luxurious villa with stunning beach views.',
    agency: {
      name: 'Jon Smith',
      email: 'testing@gmail.com'
    }
  },
  {
    id: 3,
    image: Images.imageThree,
    title: 'Cozy Cottage',
    price: '$300,000',
    location: 'Countryside',
    beds: 3,
    baths: 2,
    sqft: 1500,
    isNew: false,
    isPopular: false,
    yearBuilt: 2005,
    parkingSpaces: 1,
    description: 'A cozy cottage in a peaceful countryside setting.',
    agency: {
      name: 'Jon Smith',
      email: 'testing@gmail.com'
    }
  },
  {
    id: 4,
    image: Images.imageFour,
    title: 'Urban Loft',
    price: '$400,000',
    location: 'City Center',
    beds: 2,
    baths: 1,
    sqft: 1000,
    isNew: true,
    isPopular: true,
    yearBuilt: 2020,
    parkingSpaces: 0,
    description: 'A stylish urban loft with modern amenities.',
    agency: {
      name: 'Jon Smith',
      email: 'testing@gmail.com'
    }
  },
  {
    id: 5,
    image: Images.imageThree,
    title: 'Suburban House',
    price: '$350,000',
    location: 'Suburbs',
    beds: 4,
    baths: 3,
    sqft: 2000,
    isNew: false,
    isPopular: false,
    yearBuilt: 2012,
    parkingSpaces: 2,
    description: 'A spacious house in a family-friendly suburb.',
    agency: {
      name: 'Jon Smith',
      email: 'testing@gmail.com'
    }
  }
];

  export const spotlightProperties = [
    {
        id: 1,
        title: 'Spotlight Property',
        subHeading: 'Living Room',
        location: '1421 San Pedro St. Los Angeles, CA',
        description: 'A stunning villa with modern amenities and breathtaking views.',
        priceDetails: [
            { day: 3, price: 13000 },
        ],
        avatar: Images.user,
        image: Images.backgroundOne,
        agency: {
            name: 'Jon Smith',
            email: 'testing@gmail.com'
        },
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3500
    },
    {
        id: 2,
        title: 'Modern Apartment',
        subHeading: 'City View',
        location: '1234 Sunset Blvd. Los Angeles, CA',
        description: 'A modern apartment with a beautiful city view.',
        priceDetails: [
            { day: 2, price: 8000 },
        ],
        avatar: Images.user,
        image: Images.backgroundOne,
        agency: {
            name: 'Jane Doe',
            email: 'jane.doe@gmail.com'
        },
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1500
    },
    {
        id: 3,
        title: 'Cozy Cottage',
        subHeading: 'Garden View',
        location: '5678 Maple St. San Francisco, CA',
        description: 'A cozy cottage with a lovely garden view.',
        priceDetails: [
            { day: 3, price: 6000 },
        ],
        avatar: Images.user,
        image: Images.backgroundOne,
        agency: {
            name: 'Alice Johnson',
            email: 'alice.johnson@gmail.com'
        },
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 2000
    },
    {
        id: 4,
        title: 'Luxury Condo',
        subHeading: 'Ocean View',
        location: '9101 Ocean Dr. Miami, FL',
        description: 'A luxury condo with an amazing ocean view.',
        priceDetails: [
            { day: 4, price: 20000 },
        ],
        avatar: Images.user,
        image: Images.backgroundOne,
        agency: {
            name: 'Michael Smith',
            email: 'michael.smith@gmail.com'
        },
        bedrooms: 5,
        bathrooms: 4,
        squareFeet: 4000
    }
  ];

  export const favoriteCities = [
    { id: 1, name: 'New York', image: Images.imageFour, propertiesCount: 120 },
    { id: 2, name: 'Los Angeles', image: Images.imageFour, propertiesCount: 85 },
    { id: 3, name: 'Chicago', image: Images.imageFour, propertiesCount: 60 },
    { id: 4, name: 'Houston', image: Images.imageFour, propertiesCount: 45 },
  ];

  export const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      feedback: 'Great service and amazing properties!',
      image: Images.user,
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Smith',
      feedback: 'I found my dream home thanks to this app!',
      image: Images.user,
      rating: 4
    },
    {
      id: 3,
      name: 'Emily Davis',
      feedback: 'Highly recommend for anyone looking for a new place.',
      image: Images.user,
      rating: 5
    }
  ];

  export const categoryOptions = [
    { icon: "home", label: "Home" },
    { icon: "home-city", label: "Villa" },
    { icon: "office-building", label: "Apartment" },
    { icon: "home-group", label: "PG" },
    { icon: "home-modern", label: "Hostel" },
    { icon: "home-variant", label: "Rent" }
  ];

  export const bannerSliderData = [
    { id: 1, image: Images.suggestionOne },
    { id: 2, image: Images.suggestionTwo },
    { id: 3, image: Images.suggestionThree },
    { id: 4, image: Images.suggestionTwo },
  ];

  export const primePropertyData = [
        {
            id: 1,
            title: 'Personal Prime Property',
            subHeading: 'Real estate agency',
            location: '1421 San Pedro St. Los Angeles, CA',
            description: 'A stunning villa with modern amenities and breathtaking views.',
            price: '$5,000,000',
            avatar: Images.user,
            agency: {
                email: 'testing@gmail.com',
                name: 'Jon Smith'
            }
        },
        {
            id: 2,
            title: 'Luxury Beachfront',
            subHeading: 'Real estate agency',
            location: '123 Ocean Blvd. Miami, FL',
            description: 'A luxurious beachfront property with private access to the ocean.',
            price: '$10,000,000',
            avatar: Images.user,
            agency: {
                email: 'luxuryprop@gmail.com',
                name: 'Jane Doe'
            }
        },
        {
            id: 3,
            title: 'Mountain Retreat',
            subHeading: 'Real estate agency',
            location: '456 Mountain Dr. Aspen, CO',
            description: 'A secluded mountain retreat with breathtaking views of the surrounding mountains.',
            price: '$8,000,000',
            avatar: Images.user,
            agency: {
                email: 'mountainret@gmail.com',
                name: 'John Doe'
            }
        },
    ];