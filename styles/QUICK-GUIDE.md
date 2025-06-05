# Quick Reference Guide - Taiwan 127 Modular CSS

## Common Tasks

### 🎨 Change Website Colors
**File:** `styles/variables.css`
```css
:root {
    --color-primary: #your-color;        /* Main brand color */
    --color-primary-dark: #darker-color; /* Hover states */
}
```

### 🔤 Change Fonts
**File:** `styles/variables.css`
```css
:root {
    --font-primary: 'YourFont', Arial, sans-serif;
    --font-chinese: 'YourChineseFont', 'Microsoft JhengHei', sans-serif;
}
```

### 📱 Fix Mobile Issues
**File:** `styles/responsive.css`
- All mobile-specific styles and media queries are here
- Hamburger menu behavior
- Mobile grid layouts

### 🔘 Add New Buttons
**File:** `styles/components.css`
```css
.your-button {
    /* Add your button styles here */
}
```

### 📐 Create New Layouts
**File:** `styles/layout.css`
```css
.your-grid {
    display: grid;
    /* Add your grid styles here */
}
```

### 🧭 Modify Navigation
**File:** `styles/header.css`
- Header styling
- Navigation links
- Logo and biblical quote
- Hamburger menu styles

## File Quick Reference

| Need to change... | Edit this file |
|-------------------|----------------|
| Colors, fonts, sizes | `variables.css` |
| Basic styles, resets | `base.css` |
| Headings, text utilities | `typography.css` |
| Header, nav, menu | `header.css` |
| Buttons, cards, forms | `components.css` |
| Grids, sections | `layout.css` |
| Mobile styles | `responsive.css` |

## Import Order (Important!)
The files must be imported in this order in `common.css`:
1. `variables.css` (must be first - others depend on it)
2. `base.css`
3. `typography.css`
4. `header.css`
5. `components.css`
6. `layout.css`
7. `responsive.css` (should be last for proper media query cascade)

## Tips
- Always use CSS variables from `variables.css` instead of hardcoded values
- Test changes on both desktop and mobile
- Keep related styles in the same file
- Document any new components you add
- Use the existing naming conventions
