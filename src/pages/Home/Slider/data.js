import restaurants from '../../../assets/restaurants.svg'
import order from '../../../assets/order.svg'
import time from '../../../assets/time.svg'

export const slider = [
    {
        id: 1,
        icon: restaurants,
        title: 'Wide selection of restaurants',
        text: 'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.',
        isActive: true,
        slide: {
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/83cd7b208436293.66ee89461f8ed.jpg',
            title: 'Want to be a part of Foodtime?',
            text: 'List your restaurant or shop on foodtime.',
            btn: 'Get started',
        }
    },
    {
        id: 2,
        icon: order,
        title: 'Easy ordering process',
        text: 'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc.',
        isActive: false,
        slide: {
            img: 'https://i.pinimg.com/originals/2e/cc/97/2ecc97a5a8780923e39f82f477bd93ab.jpg?nii=t',
            title: 'Hungry? We got you covered.',
            text: 'Thousands of local restaurants, ready to deliver.',
            btn: 'Order now',
        }
    },
    {
        id: 3,
        icon: time,
        title: 'Fast delivery within 20 min',
        text: 'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh.',
        isActive: false,
        slide: {
            img: 'https://i.pinimg.com/originals/ab/51/73/ab5173eb1ef2d973ae36a028f53755b9.jpg',
            title: 'Your kitchen, your rules.',
            text: 'Become a Foodtime partner and reach more customers.',
            btn: 'Track your order',
        }
    },
];