import restaurants from './src/assets/restaurants.svg'
import order from './src/assets/order.svg'
import time from './src/assets/time.svg'

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

export const questions = [
    {
        id: 1,
        title: 'General',
        faq: [
            {
                idQuestion: 1,
                question: 'What do I need to apply for the account?',
                answer: `To create a personal account, you only need a valid email address 
                and a phone number for SMS verification. The entire process takes about 2 minutes, 
                and you'll get immediate access to all basic features.`,
            },
            {
                idQuestion: 2,
                question: 'How the subscription process works?',
                answer: `Choose a plan that fits your needs and click "Subscribe". 
                You'll be redirected to a secure payment page where you can pay 
                with a credit card or PayPal. Once the payment is confirmed, 
                your subscription activates automatically, and you can manage 
                it anytime from your account settings.`,
            },
            {
                idQuestion: 3,
                question: 'What payment methods do you accept?',
                answer: `We accept all major credit and debit cards (Visa, Mastercard, American Express), 
                PayPal, Apple Pay, and Google Pay. 
                For annual subscriptions, we also support bank transfers.`,
            },
            {
                idQuestion: 4,
                question: 'Can I change my plan later?',
                answer: `Yes, you can upgrade or downgrade your plan at any time from 
                your account dashboard. When upgrading, you'll get immediate access 
                to new features and pay only the prorated difference. When downgrading, 
                the new rate applies at the start of your next billing cycle.`,
            },
            {
                idQuestion: 5,
                question: 'Is there a free trial available?',
                answer: `Yes, all new users get a 14-day free trial with full access to premium features. 
                No credit card is required to start the trial. You'll receive 
                a reminder 2 days before it ends, and you can choose 
                to subscribe or continue with the free basic plan.`,
            },
            {
                idQuestion: 6,
                question: 'How do I cancel my subscription?',
                answer: `You can cancel your subscription anytime from your account 
                settings under "Billing". There are no cancellation fees, and you'll continue 
                to have access until the end of your current billing period. We also offer 
                a 30-day money-back guarantee for annual plans.`,
            },
            {
                idQuestion: 7,
                question: 'How do I contact customer support?',
                answer: `Our support team is available 24/7 via live chat, email 
                at support@example.com, or phone. Premium subscribers get priority support 
                with an average response time of under 5 minutes. 
                You can also browse our Help Center for instant answers to common questions.`,
            },
        ],
    },
    {
        id: 2,
        title: 'For business',
        faq: [
            {
                idQuestion: 1,
                question: 'What documents are required for a business account?',
                answer: `To open a business account, you'll need to provide a certificate 
                of incorporation, tax identification number (TIN/EIN), proof of business address 
                (utility bill or lease agreement), and a government-issued ID of the authorized signatory. 
                Additional industry-specific licenses may be requested depending on your sector.`,
            },
            {
                idQuestion: 2,
                question: 'How do I add team members to my business account?',
                answer: `From your business dashboard, go to "Team Management" and click "Invite Members". 
                Enter their email addresses and assign roles (Admin, Manager, or Viewer). 
                Invited members will receive an email with a secure link to join. 
                You can manage permissions and remove members at any time.`,
            },
            {
                idQuestion: 3,
                question: 'Is there a minimum contract period for business plans?',
                answer: `Business plans are available on both monthly and annual terms. 
                Annual subscriptions come with a 20% discount and can be cancelled anytime 
                with a 30-day notice. Monthly plans offer full flexibility with no long-term commitment.`,
            },
            {
                idQuestion: 4,
                question: 'Do you offer volume discounts for large teams?',
                answer: `Yes, we offer tiered pricing for teams of 10, 25, 50, and 100+ members. 
                The larger your team, the lower the cost per user. 
                Enterprise clients with 500+ seats receive custom pricing and a dedicated account manager.`,
            },
            {
                idQuestion: 5,
                question: 'Can I get a dedicated account manager?',
                answer: `Dedicated account managers are included with our Business Plus and Enterprise plans. 
                They assist with onboarding, custom integrations, priority support, 
                and quarterly business reviews. Standard business plans include access 
                to our business support team during extended hours.`,
            },
            {
                idQuestion: 6,
                question: 'How does invoicing work for business accounts?',
                answer: `Business accounts receive detailed monthly invoices with a full breakdown of charges, 
                including per-user fees, add-ons, and applicable taxes. 
                We support multiple payment methods including corporate credit cards, ACH transfers, 
                and wire transfers. Net-30 payment terms are available for annual contracts.`,
            },
        ],
    },
];

export const card = [
    {
        id: 1,
        img: 'https://i.pinimg.com/736x/06/e8/d4/06e8d498cffe196d47b61ca79ab6c591.jpg',
        title: 'Quinoa & Avocado Bowl',
        text: 'Nutritious bowl with quinoa, avocado, cucumber, and poached egg',
        price: 45.10,
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/1200x/93/c2/4c/93c24c76f55e7b7411d62c5a782537f4.jpg',
        title: 'Grilled Chicken Salad',
        text: 'Mixed greens with grilled chicken breast, tomatoes, and olive oil',
        price: 38.50,
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/1200x/9c/5a/a1/9c5aa18b217844fc8197d3947a4f0bf8.jpg',
        title: 'Pumpkin Cream Soup',
        text: 'Velvety soup made from roasted pumpkin with coconut milk and seeds',
        price: 29.0,
    },
    {
        id: 4,
        img: 'https://i.pinimg.com/736x/33/5c/8e/335c8e9cbf74f386fa6fdf2cad91f004.jpg',
        title: 'Greek Yogurt with Berries',
        text: 'Natural Greek yogurt with blueberries, raspberries, and chia seeds',
        price: 25.40,
    },
    {
        id: 5,
        img: 'https://i.pinimg.com/1200x/0a/16/35/0a16359ed02c26cfe59cc1449fe06cea.jpg',
        title: 'Oat Pancakes with Banana',
        text: 'Sugar-free oat pancakes with banana and natural honey',
        price: 32.0,
    },
    {
        id: 6,
        img: 'https://i.pinimg.com/1200x/ea/03/46/ea0346a003e0ceeb4fa454f93325d474.jpg',
        title: 'Baked Salmon with Veggies',
        text: 'Salmon fillet baked with asparagus, broccoli, and lemon',
        price: 59.0,
    },
    {
        id: 7,
        img: 'https://i.pinimg.com/736x/7a/d8/1a/7ad81a3b626219c5960239c55a8cc2ac.jpg',
        title: 'Acai Smoothie Bowl',
        text: 'Thick acai berry smoothie with granola, coconut, and fresh fruits',
        price: 42.70,
    },
    {
        id: 8,
        img: 'https://i.pinimg.com/1200x/6e/36/97/6e3697604d909cbb8ecb415e0b22c8c2.jpg',
        title: 'Turkey with Quinoa & Spinach',
        text: 'Grilled turkey fillet with quinoa, spinach, and sun-dried tomatoes',
        price: 48.0,
    },
    {
        id: 9,
        img: 'https://i.pinimg.com/736x/20/a7/3d/20a73d7c76c8f65c513e25b075a8eab8.jpg',
        title: 'Protein Oatmeal',
        text: 'Oatmeal cooked in water with protein powder and diced apple',
        price: 22.90,
    },
    {
        id: 10,
        img: 'https://i.pinimg.com/1200x/56/cb/60/56cb60515c9ce5f30d1d5edef10e1e4f.jpg',
        title: 'Rice-Free Crab Rolls',
        text: 'Low-carb rolls wrapped in cucumber with crab meat and avocado',
        price: 52.0,
    },
    {
        id: 11,
        img: 'https://i.pinimg.com/1200x/e0/38/3a/e0383a9a9c378d5ab86c3754bf552719.jpg',
        title: 'Cauliflower Crust Pizza',
        text: 'Pizza with thin cauliflower base, tomato sauce, and mozzarella',
        price: 46.60,
    },
    {
        id: 12,
        img: 'https://i.pinimg.com/1200x/db/ad/24/dbad2467d62ce13949cbe07ed83195ca.jpg',
        title: 'Buckwheat with Mushrooms',
        text: 'Buckwheat porridge with sautéed mushrooms and soft-boiled egg',
        price: 31.0,
    },
    {
        id: 13,
        img: 'https://i.pinimg.com/1200x/72/52/a2/7252a2c5b9295c9c339e3c9cb9e333be.jpg',
        title: 'Tofu Stir-Fry',
        text: 'Pan-fried tofu with bell peppers, broccoli, and soy sauce',
        price: 34.0,
    },
    {
        id: 14,
        img: 'https://i.pinimg.com/736x/c3/3b/b3/c33bb3627f20179e21a8e59c2a2537d8.jpg',
        title: 'Chia Pudding with Mango',
        text: 'Chia seed pudding in coconut milk with mango and coconut flakes',
        price: 28.10,
    },
    {
        id: 15,
        img: 'https://i.pinimg.com/1200x/1f/99/ff/1f99fff7e9452e62f39ad6989c90b89f.jpg',
        title: 'Chicken Meatballs in Tomato',
        text: 'Homemade chicken meatballs in tomato sauce with fresh herbs',
        price: 39.30,
    }
];