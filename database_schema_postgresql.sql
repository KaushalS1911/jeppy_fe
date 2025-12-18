-- =====================================================
-- Jeppy Database Schema - PostgreSQL Implementation
-- =====================================================
-- This file contains the complete SQL schema for the Jeppy website
-- Database: PostgreSQL 12+
-- =====================================================

-- Enable UUID extension if needed
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. PRODUCTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_code VARCHAR(50) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_type ON products(type);
CREATE INDEX idx_products_product_code ON products(product_code);
CREATE INDEX idx_products_is_active ON products(is_active);

-- =====================================================
-- 2. PRODUCT SPECIFICATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS product_specifications (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    label VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_specifications_product 
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX idx_product_specifications_product_id ON product_specifications(product_id);
CREATE INDEX idx_product_specifications_display_order ON product_specifications(display_order);

-- =====================================================
-- 3. PRODUCT IMAGES TABLE
-- =====================================================
CREATE TYPE image_type_enum AS ENUM ('main', 'raw', 'fried', 'gallery');

CREATE TABLE IF NOT EXISTS product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    image_type image_type_enum DEFAULT 'gallery',
    alt_text VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_images_product 
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX idx_product_images_product_id ON product_images(product_id);
CREATE INDEX idx_product_images_image_type ON product_images(image_type);
CREATE INDEX idx_product_images_display_order ON product_images(display_order);

-- =====================================================
-- 4. SUITABILITY TAGS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS suitability_tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    icon_url VARCHAR(500),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_suitability_tags_slug ON suitability_tags(slug);
CREATE INDEX idx_suitability_tags_is_active ON suitability_tags(is_active);

-- =====================================================
-- 5. PRODUCT SUITABILITY TAGS (JUNCTION TABLE)
-- =====================================================
CREATE TABLE IF NOT EXISTS product_suitability_tags (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_suitability_tags_product 
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    CONSTRAINT fk_product_suitability_tags_tag 
        FOREIGN KEY (tag_id) REFERENCES suitability_tags(id) ON DELETE CASCADE,
    CONSTRAINT unique_product_tag UNIQUE (product_id, tag_id)
);

CREATE INDEX idx_product_suitability_tags_product_id ON product_suitability_tags(product_id);
CREATE INDEX idx_product_suitability_tags_tag_id ON product_suitability_tags(tag_id);

-- =====================================================
-- 6. CERTIFICATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS certifications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    issuing_authority VARCHAR(255),
    certificate_number VARCHAR(100),
    issue_date DATE,
    expiry_date DATE,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_certifications_slug ON certifications(slug);
CREATE INDEX idx_certifications_is_active ON certifications(is_active);
CREATE INDEX idx_certifications_display_order ON certifications(display_order);

-- =====================================================
-- 7. PARTNERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS partners (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500) NOT NULL,
    website_url VARCHAR(500),
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_partners_is_active ON partners(is_active);
CREATE INDEX idx_partners_display_order ON partners(display_order);

-- =====================================================
-- 8. CONTACT INQUIRIES TABLE
-- =====================================================
CREATE TYPE inquiry_status_enum AS ENUM ('new', 'read', 'replied', 'archived');

CREATE TABLE IF NOT EXISTS contact_inquiries (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    email_address VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status inquiry_status_enum DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_inquiries_email_address ON contact_inquiries(email_address);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX idx_contact_inquiries_created_at ON contact_inquiries(created_at);

-- =====================================================
-- 9. COMPANY INFO TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS company_info (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    tagline VARCHAR(500),
    vision TEXT,
    mission TEXT,
    office_address TEXT,
    phone_number VARCHAR(50),
    email_domestic VARCHAR(255),
    email_international VARCHAR(255),
    google_maps_embed_url TEXT,
    years_in_business INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- 10. COMPANY STATS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS company_stats (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    value VARCHAR(50) NOT NULL,
    suffix VARCHAR(10),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_company_stats_display_order ON company_stats(display_order);
CREATE INDEX idx_company_stats_is_active ON company_stats(is_active);

-- =====================================================
-- 11. PROCESS STEPS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS process_steps (
    id SERIAL PRIMARY KEY,
    step_number INTEGER NOT NULL,
    step_label VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_process_steps_step_number ON process_steps(step_number);
CREATE INDEX idx_process_steps_display_order ON process_steps(display_order);
CREATE INDEX idx_process_steps_is_active ON process_steps(is_active);

-- =====================================================
-- 12. PROCESS STEP POINTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS process_step_points (
    id SERIAL PRIMARY KEY,
    process_step_id INTEGER NOT NULL,
    point_text TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_process_step_points_process_step 
        FOREIGN KEY (process_step_id) REFERENCES process_steps(id) ON DELETE CASCADE
);

CREATE INDEX idx_process_step_points_process_step_id ON process_step_points(process_step_id);
CREATE INDEX idx_process_step_points_display_order ON process_step_points(display_order);

-- =====================================================
-- TRIGGERS FOR UPDATED_AT
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON certifications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partners_updated_at BEFORE UPDATE ON partners
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_company_info_updated_at BEFORE UPDATE ON company_info
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_company_stats_updated_at BEFORE UPDATE ON company_stats
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_process_steps_updated_at BEFORE UPDATE ON process_steps
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

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
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

-- Insert Certifications
INSERT INTO certifications (name, slug, image_url, display_order) VALUES
('APED Certification', 'aped-certification', '/assets/images/global/certificates/aped.PNG', 1),
('FSSAI Certification', 'fssai-certification', '/assets/images/global/certificates/fssai-certi.PNG', 2),
('Halal Certification', 'halal-certification', '/assets/images/global/certificates/halal.PNG', 3),
('ISOQAR Registered', 'isoqar-registered', '/assets/images/global/certificates/isoqar.PNG', 4)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

-- Insert Company Stats
INSERT INTO company_stats (label, value, suffix, display_order) VALUES
('Shapes', '150', '+', 1),
('of Formulations', '1000', '', 2),
('MT / Day Production', '250', '', 3),
('Manufacturing Facilities', '5', '', 4),
('Products Designed and Shipped', '400', '', 5),
('Satisfied Customers', '200', '+', 6)
ON CONFLICT DO NOTHING;

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
ON CONFLICT (id) DO UPDATE SET company_name = EXCLUDED.company_name;

-- Insert Process Steps
INSERT INTO process_steps (step_number, step_label, title, image_url, display_order) VALUES
(1, 'STEP - 01', 'Raw Material Sourcing.', '/assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png', 1),
(2, 'STEP - 02', 'Core Production.', '/assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png', 2),
(3, 'STEP - 03', 'Hygiene & Automation.', '/assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png', 3),
(4, 'STEP - 04', 'Quality Control.', '/assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png', 4),
(5, 'STEP - 05', 'Packaging & Dispatch.', '/assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png', 5)
ON CONFLICT DO NOTHING;

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
--     array_agg(DISTINCT pi.image_type || ':' || pi.image_url) as images,
--     array_agg(DISTINCT st.name) as suitability_tags
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
--     array_agg(psp.point_text ORDER BY psp.display_order) as points
-- FROM process_steps ps
-- LEFT JOIN process_step_points psp ON ps.id = psp.process_step_id
-- WHERE ps.is_active = TRUE
-- GROUP BY ps.id
-- ORDER BY ps.display_order;






