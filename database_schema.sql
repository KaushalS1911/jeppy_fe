-- =====================================================
-- Jeppy Database Schema - SQL Implementation
-- =====================================================
-- This file contains the complete SQL schema for the Jeppy website
-- Database: MySQL 8.0+ or PostgreSQL
-- =====================================================

-- Drop existing tables (in reverse dependency order) - USE WITH CAUTION
-- SET FOREIGN_KEY_CHECKS = 0; -- MySQL
-- DROP TABLE IF EXISTS product_suitability_tags;
-- DROP TABLE IF EXISTS product_specifications;
-- DROP TABLE IF EXISTS product_images;
-- DROP TABLE IF EXISTS process_step_points;
-- DROP TABLE IF EXISTS process_steps;
-- DROP TABLE IF EXISTS contact_inquiries;
-- DROP TABLE IF EXISTS company_stats;
-- DROP TABLE IF EXISTS partners;
-- DROP TABLE IF EXISTS certifications;
-- DROP TABLE IF EXISTS suitability_tags;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS company_info;
-- SET FOREIGN_KEY_CHECKS = 1; -- MySQL

-- =====================================================
-- 1. PRODUCTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_code VARCHAR(50) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_type (type),
    INDEX idx_product_code (product_code),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 2. PRODUCT SPECIFICATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS product_specifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    label VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_id (product_id),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 3. PRODUCT IMAGES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    image_type ENUM('main', 'raw', 'fried', 'gallery') DEFAULT 'gallery',
    alt_text VARCHAR(255),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_id (product_id),
    INDEX idx_image_type (image_type),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 4. SUITABILITY TAGS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS suitability_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    icon_url VARCHAR(500),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 5. PRODUCT SUITABILITY TAGS (JUNCTION TABLE)
-- =====================================================
CREATE TABLE IF NOT EXISTS product_suitability_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES suitability_tags(id) ON DELETE CASCADE,
    UNIQUE KEY unique_product_tag (product_id, tag_id),
    INDEX idx_product_id (product_id),
    INDEX idx_tag_id (tag_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 6. CERTIFICATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    issuing_authority VARCHAR(255),
    certificate_number VARCHAR(100),
    issue_date DATE,
    expiry_date DATE,
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 7. PARTNERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS partners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500) NOT NULL,
    website_url VARCHAR(500),
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_is_active (is_active),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 8. CONTACT INQUIRIES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    email_address VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email_address (email_address),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 9. COMPANY INFO TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS company_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    tagline VARCHAR(500),
    vision TEXT,
    mission TEXT,
    office_address TEXT,
    phone_number VARCHAR(50),
    email_domestic VARCHAR(255),
    email_international VARCHAR(255),
    google_maps_embed_url TEXT,
    years_in_business INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 10. COMPANY STATS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS company_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    value VARCHAR(50) NOT NULL,
    suffix VARCHAR(10),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 11. PROCESS STEPS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS process_steps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    step_number INT NOT NULL,
    step_label VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_step_number (step_number),
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 12. PROCESS STEP POINTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS process_step_points (
    id INT AUTO_INCREMENT PRIMARY KEY,
    process_step_id INT NOT NULL,
    point_text TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (process_step_id) REFERENCES process_steps(id) ON DELETE CASCADE,
    INDEX idx_process_step_id (process_step_id),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SAMPLE DATA INSERTIONS
-- =====================================================

-- Insert Suitability Tags
INSERT INTO suitability_tags (name, slug) VALUES
('Vegan', 'vegan'),
('Vegetarian', 'vegetarian'),
('Halal', 'halal'),
('Gluten Free', 'gluten-free'),
('Protein Rich', 'protein-rich')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Insert Certifications
INSERT INTO certifications (name, slug, image_url, display_order) VALUES
('APED Certification', 'aped-certification', '/assets/images/global/certificates/aped.PNG', 1),
('FSSAI Certification', 'fssai-certification', '/assets/images/global/certificates/fssai-certi.PNG', 2),
('Halal Certification', 'halal-certification', '/assets/images/global/certificates/halal.PNG', 3),
('ISOQAR Registered', 'isoqar-registered', '/assets/images/global/certificates/isoqar.PNG', 4)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Insert Company Stats
INSERT INTO company_stats (label, value, suffix, display_order) VALUES
('Shapes', '150', '+', 1),
('of Formulations', '1000', '', 2),
('MT / Day Production', '250', '', 3),
('Manufacturing Facilities', '5', '', 4),
('Products Designed and Shipped', '400', '', 5),
('Satisfied Customers', '200', '+', 6)
ON DUPLICATE KEY UPDATE label=VALUES(label);

-- Insert Company Info (Single Record)
INSERT INTO company_info (id, company_name, tagline, vision, mission, office_address, phone_number, email_domestic, email_international, years_in_business) VALUES
(1, 
 'Jeppy', 
 'Pioneers in Pellet Technology',
 'To become a global benchmark in clean, smart, and scalable snack manufacturing — driven by quality, innovation, and sustainability.',
 'To empower brands with snack solutions that are bold in taste, honest in ingredients, and tailored to the evolving needs of consumers across the world.',
 '27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh Bridge, Rajkot - 360003 (Gujarat) India.',
 '+91 75758 08749',
 'inquiry@jeppy.in',
 'export@jeppy.in',
 40)
ON DUPLICATE KEY UPDATE company_name=VALUES(company_name);

-- Insert Process Steps
INSERT INTO process_steps (step_number, step_label, title, image_url, display_order) VALUES
(1, 'STEP - 01', 'Raw Material Sourcing.', '/assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png', 1),
(2, 'STEP - 02', 'Core Production.', '/assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png', 2),
(3, 'STEP - 03', 'Hygiene & Automation.', '/assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png', 3),
(4, 'STEP - 04', 'Quality Control.', '/assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png', 4),
(5, 'STEP - 05', 'Packaging & Dispatch.', '/assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png', 5)
ON DUPLICATE KEY UPDATE title=VALUES(title);

-- Insert Process Step Points
-- Step 1 Points
INSERT INTO process_step_points (process_step_id, point_text, display_order) VALUES
(1, 'Sourced from trusted suppliers (potato, lentil, soya, rice, etc).', 1),
(1, 'Tested for moisture, density, ash content, pH, color & viscosity.', 2),
(1, 'Only approved materials proceed to production.', 3);

-- Step 2 Points
INSERT INTO process_step_points (process_step_id, point_text, display_order) VALUES
(2, 'Ingredients are precisely measured, sieved, mixed, and moisturized into dough.', 1),
(2, 'Dough is cooked, shaped (2D, 3D, or sheeted), cut, and dried.', 2),
(2, 'Ensures consistent texture, shape, and shelf-stable pellets.', 3);

-- Step 3 Points
INSERT INTO process_step_points (process_step_id, point_text, display_order) VALUES
(3, 'Fully automated, touch-free production.', 1),
(3, 'High hygiene compliance and food safety.', 2),
(3, 'Scalable output: up to 75,000 MT/year.', 3);

-- Step 4 Points
INSERT INTO process_step_points (process_step_id, point_text, display_order) VALUES
(4, 'Real-time checks at every stage.', 1),
(4, 'Advanced lab testing for consistency and safety.', 2),
(4, 'Certified by leading quality standards.', 3);

-- Step 5 Points
INSERT INTO process_step_points (process_step_id, point_text, display_order) VALUES
(5, 'Final inspection before packing.', 1),
(5, 'Sealed in hygienic, market-ready formats.', 2),
(5, 'Stored & shipped for domestic and global delivery.', 3);

-- =====================================================
-- EXAMPLE: Insert a Sample Product
-- =====================================================
-- INSERT INTO products (name, product_code, category, type, description) VALUES
-- ('ABCD', '111', 'Cereal Pellets', '3D Snack Pellet', 'Many pellets, including the one in the picture, are manufactured using a dough foil which texture/design is protected by Community and International trademarks and other MAFIN IP rights.');

-- SET @product_id = LAST_INSERT_ID();

-- INSERT INTO product_specifications (product_id, label, value, display_order) VALUES
-- (@product_id, 'Moisture (%)', '8.5–9.5', 1),
-- (@product_id, 'Density (Raw)', '546 gm/Ltr', 2),
-- (@product_id, 'Density (Fried)', '45 gm/Ltr', 3),
-- (@product_id, 'Products Pcs in 10g', '60', 4),
-- (@product_id, 'Salt (%)', '2.5–3.0', 5),
-- (@product_id, 'Frying Temperature', '185°C to 190°C', 6),
-- (@product_id, 'Frying Time', '15–17 Second', 7),
-- (@product_id, 'Size', '(4) to (6) cm', 8),
-- (@product_id, 'Ingredients', 'Wheat flour - corn starch - salt', 9);

-- INSERT INTO product_images (product_id, image_url, image_type, display_order) VALUES
-- (@product_id, '/assets/images/products/2d.PNG', 'main', 1),
-- (@product_id, '/assets/images/products/2d.PNG', 'raw', 2),
-- (@product_id, '/assets/images/products/2d.PNG', 'fried', 3);

-- INSERT INTO product_suitability_tags (product_id, tag_id) VALUES
-- (@product_id, (SELECT id FROM suitability_tags WHERE slug = 'vegan')),
-- (@product_id, (SELECT id FROM suitability_tags WHERE slug = 'vegetarian')),
-- (@product_id, (SELECT id FROM suitability_tags WHERE slug = 'halal')),
-- (@product_id, (SELECT id FROM suitability_tags WHERE slug = 'gluten-free')),
-- (@product_id, (SELECT id FROM suitability_tags WHERE slug = 'protein-rich'));

-- =====================================================
-- USEFUL QUERIES
-- =====================================================

-- Get all products with their specifications
-- SELECT 
--     p.id,
--     p.name,
--     p.product_code,
--     p.category,
--     p.type,
--     ps.label,
--     ps.value
-- FROM products p
-- LEFT JOIN product_specifications ps ON p.id = ps.product_id
-- WHERE p.is_active = TRUE
-- ORDER BY p.id, ps.display_order;

-- Get product with all related data
-- SELECT 
--     p.*,
--     GROUP_CONCAT(DISTINCT CONCAT(pi.image_type, ':', pi.image_url) SEPARATOR '|') as images,
--     GROUP_CONCAT(DISTINCT st.name SEPARATOR ', ') as suitability_tags
-- FROM products p
-- LEFT JOIN product_images pi ON p.id = pi.product_id
-- LEFT JOIN product_suitability_tags pst ON p.id = pst.product_id
-- LEFT JOIN suitability_tags st ON pst.tag_id = st.id
-- WHERE p.id = 1
-- GROUP BY p.id;

-- Get all active certifications
-- SELECT * FROM certifications WHERE is_active = TRUE ORDER BY display_order;

-- Get all active partners
-- SELECT * FROM partners WHERE is_active = TRUE ORDER BY display_order;

-- Get process steps with their points
-- SELECT 
--     ps.*,
--     GROUP_CONCAT(psp.point_text ORDER BY psp.display_order SEPARATOR '\n') as points
-- FROM process_steps ps
-- LEFT JOIN process_step_points psp ON ps.id = psp.process_step_id
-- WHERE ps.is_active = TRUE
-- GROUP BY ps.id
-- ORDER BY ps.display_order;





