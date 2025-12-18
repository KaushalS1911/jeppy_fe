# Jeppy Database Schema Design

## Overview
This document outlines the complete database schema for the Jeppy snack pellet manufacturing company website. The schema is designed to support product management, company information, certifications, partners, contact inquiries, and manufacturing process documentation.

---

## Entity Relationship Diagram (ERD) Summary

```
Products ──┬── ProductSpecifications (1:N)
           ├── ProductImages (1:N)
           ├── ProductSuitabilityTags (N:M)
           └── ProductCategories (N:1)

CompanyInfo (1:1)
Certifications (1:N)
Partners (1:N)
ContactInquiries (1:N)
ProcessSteps (1:N)
Milestones (1:N)
```

---

## Tables

### 1. **products**
Stores all product information including pellets, snacks, and related items.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique product identifier |
| `name` | VARCHAR(255) | NOT NULL | Product name (e.g., "ABCD") |
| `product_code` | VARCHAR(50) | UNIQUE, NOT NULL | Product SKU/code (e.g., "111") |
| `category` | VARCHAR(100) | NOT NULL | Product category (e.g., "Cereal Pellets", "Potato Pellets") |
| `type` | VARCHAR(100) | NOT NULL | Product type (e.g., "3D Snack Pellet", "2D Snack Pellet") |
| `description` | TEXT | NULL | Detailed product description |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether product is active/visible |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_category` on `category`
- `idx_type` on `type`
- `idx_product_code` on `product_code`

---

### 2. **product_specifications**
Stores key-value specification pairs for each product (moisture, density, salt, etc.).

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique specification identifier |
| `product_id` | INT | FOREIGN KEY → products.id, NOT NULL | Reference to product |
| `label` | VARCHAR(255) | NOT NULL | Specification label (e.g., "Moisture (%)") |
| `value` | VARCHAR(255) | NOT NULL | Specification value (e.g., "8.5–9.5") |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- `idx_product_id` on `product_id`

---

### 3. **product_images**
Stores multiple images for each product (main, raw, fried, gallery).

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique image identifier |
| `product_id` | INT | FOREIGN KEY → products.id, NOT NULL | Reference to product |
| `image_url` | VARCHAR(500) | NOT NULL | URL/path to image file |
| `image_type` | ENUM('main', 'raw', 'fried', 'gallery') | DEFAULT 'gallery' | Type of image |
| `alt_text` | VARCHAR(255) | NULL | Alt text for accessibility |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- `idx_product_id` on `product_id`
- `idx_image_type` on `image_type`

---

### 4. **suitability_tags**
Master table for product suitability tags (Vegan, Vegetarian, Halal, etc.).

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique tag identifier |
| `name` | VARCHAR(100) | UNIQUE, NOT NULL | Tag name (e.g., "Vegan", "Halal") |
| `slug` | VARCHAR(100) | UNIQUE, NOT NULL | URL-friendly slug |
| `icon_url` | VARCHAR(500) | NULL | URL to icon/image for tag |
| `description` | TEXT | NULL | Tag description |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether tag is active |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- `idx_slug` on `slug`

---

### 5. **product_suitability_tags** (Junction Table)
Many-to-many relationship between products and suitability tags.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique relationship identifier |
| `product_id` | INT | FOREIGN KEY → products.id, NOT NULL | Reference to product |
| `tag_id` | INT | FOREIGN KEY → suitability_tags.id, NOT NULL | Reference to suitability tag |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- `idx_product_id` on `product_id`
- `idx_tag_id` on `tag_id`
- `UNIQUE(product_id, tag_id)` - Prevent duplicate associations

---

### 6. **certifications**
Stores company certifications and quality standards.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique certification identifier |
| `name` | VARCHAR(255) | NOT NULL | Certification name (e.g., "FSSAI Certification") |
| `slug` | VARCHAR(255) | UNIQUE, NOT NULL | URL-friendly slug |
| `image_url` | VARCHAR(500) | NOT NULL | URL/path to certification image |
| `issuing_authority` | VARCHAR(255) | NULL | Organization that issued certification |
| `certificate_number` | VARCHAR(100) | NULL | Certificate number/reference |
| `issue_date` | DATE | NULL | Date certification was issued |
| `expiry_date` | DATE | NULL | Date certification expires (if applicable) |
| `description` | TEXT | NULL | Certification description |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether certification is active |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_slug` on `slug`
- `idx_is_active` on `is_active`

---

### 7. **partners**
Stores business partners and client information.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique partner identifier |
| `name` | VARCHAR(255) | NOT NULL | Partner/company name |
| `logo_url` | VARCHAR(500) | NOT NULL | URL/path to partner logo |
| `website_url` | VARCHAR(500) | NULL | Partner website URL |
| `description` | TEXT | NULL | Partner description |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether partner is active |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_is_active` on `is_active`

---

### 8. **contact_inquiries**
Stores contact form submissions and inquiries.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique inquiry identifier |
| `full_name` | VARCHAR(255) | NOT NULL | Contact person's full name |
| `phone_number` | VARCHAR(50) | NULL | Phone number |
| `email_address` | VARCHAR(255) | NOT NULL | Email address |
| `subject` | VARCHAR(255) | NULL | Inquiry subject |
| `message` | TEXT | NOT NULL | Inquiry message |
| `status` | ENUM('new', 'read', 'replied', 'archived') | DEFAULT 'new' | Inquiry status |
| `ip_address` | VARCHAR(45) | NULL | IP address of submitter |
| `user_agent` | TEXT | NULL | Browser/user agent information |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_email_address` on `email_address`
- `idx_status` on `status`
- `idx_created_at` on `created_at`

---

### 9. **company_info**
Stores general company information (single record).

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique record identifier (should be 1) |
| `company_name` | VARCHAR(255) | NOT NULL | Company name |
| `tagline` | VARCHAR(500) | NULL | Company tagline (e.g., "Pioneers in Pellet Technology") |
| `vision` | TEXT | NULL | Company vision statement |
| `mission` | TEXT | NULL | Company mission statement |
| `office_address` | TEXT | NULL | Office address |
| `phone_number` | VARCHAR(50) | NULL | Primary phone number |
| `email_domestic` | VARCHAR(255) | NULL | Domestic inquiry email |
| `email_international` | VARCHAR(255) | NULL | International inquiry email |
| `google_maps_embed_url` | TEXT | NULL | Google Maps embed URL |
| `years_in_business` | INT | NULL | Years in business (e.g., 40) |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Note:** This table should only contain one record. Consider adding a CHECK constraint or application-level logic to enforce this.

---

### 10. **company_stats**
Stores company statistics and milestones.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique stat identifier |
| `label` | VARCHAR(255) | NOT NULL | Stat label (e.g., "Shapes", "MT / Day Production") |
| `value` | VARCHAR(50) | NOT NULL | Stat value (e.g., "150", "250") |
| `suffix` | VARCHAR(10) | NULL | Suffix to display (e.g., "+", "") |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether stat is active |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_display_order` on `display_order`
- `idx_is_active` on `is_active`

---

### 11. **process_steps**
Stores manufacturing process steps.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique step identifier |
| `step_number` | INT | NOT NULL | Step number (1-5) |
| `step_label` | VARCHAR(50) | NOT NULL | Step label (e.g., "STEP - 01") |
| `title` | VARCHAR(255) | NOT NULL | Step title (e.g., "Raw Material Sourcing.") |
| `image_url` | VARCHAR(500) | NOT NULL | URL/path to step image |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `is_active` | BOOLEAN | DEFAULT TRUE | Whether step is active |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_step_number` on `step_number`
- `idx_display_order` on `display_order`

---

### 12. **process_step_points**
Stores bullet points/details for each process step.

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique point identifier |
| `process_step_id` | INT | FOREIGN KEY → process_steps.id, NOT NULL | Reference to process step |
| `point_text` | TEXT | NOT NULL | Bullet point text |
| `display_order` | INT | DEFAULT 0 | Order for display purposes |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- `idx_process_step_id` on `process_step_id`
- `idx_display_order` on `display_order`

---

## Sample Data

### Suitability Tags
```sql
INSERT INTO suitability_tags (name, slug) VALUES
('Vegan', 'vegan'),
('Vegetarian', 'vegetarian'),
('Halal', 'halal'),
('Gluten Free', 'gluten-free'),
('Protein Rich', 'protein-rich');
```

### Certifications
```sql
INSERT INTO certifications (name, slug, image_url) VALUES
('APED Certification', 'aped-certification', '/assets/images/global/certificates/aped.PNG'),
('FSSAI Certification', 'fssai-certification', '/assets/images/global/certificates/fssai-certi.PNG'),
('Halal Certification', 'halal-certification', '/assets/images/global/certificates/halal.PNG'),
('ISOQAR Registered', 'isoqar-registered', '/assets/images/global/certificates/isoqar.PNG');
```

### Company Stats
```sql
INSERT INTO company_stats (label, value, suffix, display_order) VALUES
('Shapes', '150', '+', 1),
('of Formulations', '1000', '', 2),
('MT / Day Production', '250', '', 3),
('Manufacturing Facilities', '5', '', 4),
('Products Designed and Shipped', '400', '', 5),
('Satisfied Customers', '200', '+', 6);
```

---

## Relationships Summary

1. **Products → Product Specifications**: One-to-Many
2. **Products → Product Images**: One-to-Many
3. **Products ↔ Suitability Tags**: Many-to-Many (via `product_suitability_tags`)
4. **Process Steps → Process Step Points**: One-to-Many

---

## Additional Considerations

### 1. **Image Storage**
- Consider using cloud storage (AWS S3, Cloudinary) for production
- Store image URLs in database, not binary data
- Implement image optimization and CDN

### 2. **Audit Trail**
- Consider adding `created_by` and `updated_by` columns for user tracking
- Add soft delete support with `deleted_at` timestamp if needed

### 3. **Localization**
- If multi-language support is needed, consider separate translation tables
- Example: `product_translations` table with `product_id`, `language_code`, `name`, `description`

### 4. **Search & Filtering**
- Add full-text search indexes on product names and descriptions
- Consider Elasticsearch for advanced search capabilities

### 5. **Caching Strategy**
- Cache frequently accessed data (products, certifications, partners)
- Implement Redis for session management and caching

### 6. **API Considerations**
- Add `version` column to products for API versioning
- Consider pagination for large datasets
- Implement rate limiting for contact form submissions

---

## Database Technology Recommendations

- **Primary Database**: PostgreSQL or MySQL 8.0+
- **Caching**: Redis
- **Search**: Elasticsearch (optional, for advanced search)
- **File Storage**: AWS S3 / Cloudinary / Azure Blob Storage

---

## Migration Notes

1. Create tables in dependency order (products before product_specifications)
2. Add foreign key constraints after all tables are created
3. Insert master data (suitability_tags, certifications) before product data
4. Create indexes after initial data load for better performance

---

## Version History

- **v1.0** - Initial schema design based on frontend codebase analysis
- Created: 2025-01-XX






