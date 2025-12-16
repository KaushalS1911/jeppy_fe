# Jeppy Database Schema - Quick Reference

## 📊 Database Overview

This database schema supports the Jeppy snack pellet manufacturing company website with **12 main tables** covering products, company information, certifications, partners, contact inquiries, and manufacturing processes.

---

## 📋 Table Summary

| Table Name | Purpose | Key Relationships |
|-----------|---------|-------------------|
| `products` | Core product catalog | → product_specifications, product_images, product_suitability_tags |
| `product_specifications` | Product technical specs | ← products |
| `product_images` | Product images (main, raw, fried) | ← products |
| `suitability_tags` | Master tags (Vegan, Halal, etc.) | ↔ products (via junction) |
| `product_suitability_tags` | Product-tag associations | ← products, suitability_tags |
| `certifications` | Company certifications | None |
| `partners` | Business partners/clients | None |
| `contact_inquiries` | Contact form submissions | None |
| `company_info` | Company details (single record) | None |
| `company_stats` | Company statistics/milestones | None |
| `process_steps` | Manufacturing process steps | → process_step_points |
| `process_step_points` | Bullet points for each step | ← process_steps |

---

## 🔗 Entity Relationships

```
products (1) ──┬── (N) product_specifications
               ├── (N) product_images
               └── (N) product_suitability_tags (M) ── (N) suitability_tags

process_steps (1) ── (N) process_step_points

company_info (1) - Single record table
certifications (N) - Independent
partners (N) - Independent
contact_inquiries (N) - Independent
company_stats (N) - Independent
```

---

## 🎯 Key Features

### Products Management
- ✅ Multiple product categories (Cereal, Potato, Millet, Lentil, etc.)
- ✅ Product types (2D/3D Snack Pellets)
- ✅ Flexible specifications (key-value pairs)
- ✅ Multiple images per product (main, raw, fried, gallery)
- ✅ Many-to-many suitability tags (Vegan, Vegetarian, Halal, etc.)

### Company Information
- ✅ Single company info record (vision, mission, contact details)
- ✅ Company statistics/milestones
- ✅ Certifications management
- ✅ Partners/clients management

### Contact Management
- ✅ Contact form submissions with status tracking
- ✅ IP address and user agent logging

### Process Documentation
- ✅ 5-step manufacturing process
- ✅ Detailed bullet points for each step
- ✅ Image support for each step

---

## 📁 Files Included

1. **`database_schema.md`** - Complete documentation with detailed table descriptions
2. **`database_schema.sql`** - MySQL implementation with sample data
3. **`database_schema_postgresql.sql`** - PostgreSQL implementation with triggers
4. **`DATABASE_SCHEMA_SUMMARY.md`** - This quick reference guide

---

## 🚀 Quick Start

### MySQL
```bash
mysql -u your_user -p your_database < database_schema.sql
```

### PostgreSQL
```bash
psql -U your_user -d your_database -f database_schema_postgresql.sql
```

---

## 📝 Sample Queries

### Get Product with All Details
```sql
SELECT 
    p.*,
    GROUP_CONCAT(DISTINCT CONCAT(pi.image_type, ':', pi.image_url)) as images,
    GROUP_CONCAT(DISTINCT st.name) as suitability_tags
FROM products p
LEFT JOIN product_images pi ON p.id = pi.product_id
LEFT JOIN product_suitability_tags pst ON p.id = pst.product_id
LEFT JOIN suitability_tags st ON pst.tag_id = st.id
WHERE p.id = 1
GROUP BY p.id;
```

### Get All Active Products by Category
```sql
SELECT * FROM products 
WHERE is_active = TRUE AND category = 'Cereal Pellets'
ORDER BY product_code;
```

### Get Contact Inquiries by Status
```sql
SELECT * FROM contact_inquiries 
WHERE status = 'new'
ORDER BY created_at DESC;
```

---

## 🔧 Maintenance Notes

1. **Image URLs**: Update image paths when migrating to production (consider CDN)
2. **Company Info**: Only one record should exist in `company_info` table
3. **Soft Deletes**: Consider adding `deleted_at` columns if soft deletes are needed
4. **Indexes**: All foreign keys and frequently queried columns are indexed
5. **Timestamps**: Auto-updated `updated_at` columns for audit trail

---

## 📞 Support

For questions or modifications to the schema, refer to the detailed documentation in `database_schema.md`.

---

**Version**: 1.0  
**Last Updated**: 2025-01-XX





