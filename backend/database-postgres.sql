-- PostgreSQL Schema for FoodTime

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    img VARCHAR(500) NOT NULL,
    title VARCHAR(200) NOT NULL,
    text TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FAQ categories table
CREATE TABLE faq_categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

-- FAQ items table
CREATE TABLE faq_items (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES faq_categories(id) ON DELETE CASCADE
);

-- Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Insert admin user
INSERT INTO users (name, username, password, role) VALUES 
('Admin', 'FTAdmin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Insert initial products
INSERT INTO products (img, title, text, price) VALUES
('https://i.pinimg.com/736x/06/e8/d4/06e8d498cffe196d47b61ca79ab6c591.jpg', 'Quinoa & Avocado Bowl', 'Nutritious bowl with quinoa, avocado, cucumber, and poached egg', 45.10),
('https://i.pinimg.com/1200x/93/c2/4c/93c24c76f55e7b7411d62c5a782537f4.jpg', 'Grilled Chicken Salad', 'Mixed greens with grilled chicken breast, tomatoes, and olive oil', 38.50),
('https://i.pinimg.com/1200x/9c/5a/a1/9c5aa18b217844fc8197d3947a4f0bf8.jpg', 'Pumpkin Cream Soup', 'Velvety soup made from roasted pumpkin with coconut milk and seeds', 29.00),
('https://i.pinimg.com/736x/33/5c/8e/335c8e9cbf74f386fa6fdf2cad91f004.jpg', 'Greek Yogurt with Berries', 'Natural Greek yogurt with blueberries, raspberries, and chia seeds', 25.40),
('https://i.pinimg.com/1200x/0a/16/35/0a16359ed02c26cfe59cc1449fe06cea.jpg', 'Oat Pancakes with Banana', 'Sugar-free oat pancakes with banana and natural honey', 32.00),
('https://i.pinimg.com/1200x/ea/03/46/ea0346a003e0ceeb4fa454f93325d474.jpg', 'Baked Salmon with Veggies', 'Salmon fillet baked with asparagus, broccoli, and lemon', 59.00),
('https://i.pinimg.com/736x/7a/d8/1a/7ad81a3b626219c5960239c55a8cc2ac.jpg', 'Acai Smoothie Bowl', 'Thick acai berry smoothie with granola, coconut, and fresh fruits', 42.70),
('https://i.pinimg.com/1200x/6e/36/97/6e3697604d909cbb8ecb415e0b22c8c2.jpg', 'Turkey with Quinoa & Spinach', 'Grilled turkey fillet with quinoa, spinach, and sun-dried tomatoes', 48.00),
('https://i.pinimg.com/736x/20/a7/3d/20a73d7c76c8f65c513e25b075a8eab8.jpg', 'Protein Oatmeal', 'Oatmeal cooked in water with protein powder and diced apple', 22.90),
('https://i.pinimg.com/1200x/56/cb/60/56cb60515c9ce5f30d1d5edef10e1e4f.jpg', 'Rice-Free Crab Rolls', 'Low-carb rolls wrapped in cucumber with crab meat and avocado', 52.00),
('https://i.pinimg.com/1200x/e0/38/3a/e0383a9a9c378d5ab86c3754bf552719.jpg', 'Cauliflower Crust Pizza', 'Pizza with thin cauliflower base, tomato sauce, and mozzarella', 46.60),
('https://i.pinimg.com/1200x/db/ad/24/dbad2467d62ce13949cbe07ed83195ca.jpg', 'Buckwheat with Mushrooms', 'Buckwheat porridge with sautéed mushrooms and soft-boiled egg', 31.00),
('https://i.pinimg.com/1200x/72/52/a2/7252a2c5b9295c9c339e3c9cb9e333be.jpg', 'Tofu Stir-Fry', 'Pan-fried tofu with bell peppers, broccoli, and soy sauce', 34.00),
('https://i.pinimg.com/736x/c3/3b/b3/c33bb3627f20179e21a8e59c2a2537d8.jpg', 'Chia Pudding with Mango', 'Chia seed pudding in coconut milk with mango and coconut flakes', 28.10),
('https://i.pinimg.com/1200x/1f/99/ff/1f99fff7e9452e62f39ad6989c90b89f.jpg', 'Chicken Meatballs in Tomato', 'Homemade chicken meatballs in tomato sauce with fresh herbs', 39.30);

-- Insert FAQ categories
INSERT INTO faq_categories (title) VALUES ('General'), ('For business');

-- Insert FAQ items
INSERT INTO faq_items (category_id, question, answer) VALUES
(1, 'What do I need to apply for the account?', 'To create a personal account, you only need a valid email address and a phone number for SMS verification. The entire process takes about 2 minutes, and you''ll get immediate access to all basic features.'),
(1, 'How the subscription process works?', 'Choose a plan that fits your needs and click ''Subscribe''. You''ll be redirected to a secure payment page where you can pay with a credit card or PayPal. Once the payment is confirmed, your subscription activates automatically.'),
(1, 'What payment methods do you accept?', 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For annual subscriptions, we also support bank transfers.'),
(1, 'Can I change my plan later?', 'Yes, you can upgrade or downgrade your plan at any time from your account dashboard. When upgrading, you''ll get immediate access to new features and pay only the prorated difference. When downgrading, the new rate applies at the start of your next billing cycle.'),
(1, 'Is there a free trial available?', 'Yes, all new users get a 14-day free trial with full access to premium features. No credit card is required to start the trial. You''ll receive a reminder 2 days before it ends, and you can choose to subscribe or continue with the free basic plan.'),
(1, 'How do I cancel my subscription?', 'You can cancel your subscription anytime from your account settings under ''Billing''. There are no cancellation fees, and you''ll continue to have access until the end of your current billing period. We also offer a 30-day money-back guarantee for annual plans.'),
(1, 'How do I contact customer support?', 'Our support team is available 24/7 via live chat, email at support@example.com, or phone. Premium subscribers get priority support with an average response time of under 5 minutes. You can also browse our Help Center for instant answers to common questions.'),
(2, 'What documents are required for a business account?', 'To open a business account, you''ll need to provide a certificate of incorporation, tax identification number (TIN/EIN), proof of business address (utility bill or lease agreement), and a government-issued ID of the authorized signatory. Additional industry-specific licenses may be requested depending on your sector.'),
(2, 'How do I add team members to my business account?', 'From your business dashboard, go to ''Team Management'' and click ''Invite Members''. Enter their email addresses and assign roles (Admin, Manager, or Viewer). Invited members will receive an email with a secure link to join. You can manage permissions and remove members at any time.'),
(2, 'Is there a minimum contract period for business plans?', 'Business plans are available on both monthly and annual terms. Annual subscriptions come with a 20% discount and can be cancelled anytime with a 30-day notice. Monthly plans offer full flexibility with no long-term commitment.'),
(2, 'Do you offer volume discounts for large teams?', 'Yes, we offer tiered pricing for teams of 10, 25, 50, and 100+ members. The larger your team, the lower the cost per user. Enterprise clients with 500+ seats receive custom pricing and a dedicated account manager.'),
(2, 'Can I get a dedicated account manager?', 'Dedicated account managers are included with our Business Plus and Enterprise plans. They assist with onboarding, custom integrations, priority support, and quarterly business reviews. Standard business plans include access to our business support team during extended hours.'),
(2, 'How does invoicing work for business accounts?', 'Business accounts receive detailed monthly invoices with a full breakdown of charges, including per-user fees, add-ons, and applicable taxes. We support multiple payment methods including corporate credit cards, ACH transfers, and wire transfers. Net-30 payment terms are available for annual contracts.');