
# Matteson Children's Museum - Squarespace Compatible Version

This is a static HTML/CSS/JavaScript version of the Matteson Children's Museum website, designed to be compatible with Squarespace's platform.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - JavaScript functionality for interactivity

## Squarespace Integration Options

### Option 1: Code Injection (Recommended)
1. Copy the contents of `styles.css` into Squarespace's Custom CSS section
2. Copy the contents of `script.js` into the Code Injection footer area
3. Use the HTML structure from `index.html` in Squarespace's Code Blocks

### Option 2: Developer Platform
If you have access to Squarespace's Developer Platform:
1. Upload all files to your template
2. Integrate the HTML structure into your template files
3. Reference the CSS and JS files in your template

### Option 3: Section-by-Section Implementation
Break down the HTML into individual sections and implement using:
- Squarespace's built-in blocks for basic content
- Code Blocks for custom HTML sections
- CSS customization for styling

## Features Included

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid layouts

### Interactive Elements
- Mobile navigation menu
- Smooth scrolling navigation
- Form submission handlers
- Toast notifications
- Scroll animations

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

### Performance Optimized
- Minimal dependencies (only Google Fonts)
- Optimized CSS with CSS variables
- Efficient JavaScript with event delegation

## Customization

### Colors
All colors are defined as CSS variables in the `:root` selector:
```css
:root {
    --primary-color: #2563eb;
    --accent-color: #fbbf24;
    --text-primary: #1f2937;
    /* ... */
}
```

### Typography
Font family is set using CSS variables and can be easily changed:
```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Layout
Grid layouts and spacing use consistent values that can be adjusted in the CSS variables.

## Integration Steps for Squarespace

1. **Prepare Assets**
   - Upload images to Squarespace's file manager
   - Update image paths in the HTML

2. **Add Custom CSS**
   - Go to Design > Custom CSS
   - Paste the entire contents of `styles.css`

3. **Add JavaScript**
   - Go to Settings > Code Injection
   - Paste the contents of `script.js` in the Footer section

4. **Create Pages**
   - Use Code Blocks for custom HTML sections
   - Use built-in blocks where possible for easier editing

5. **Test Functionality**
   - Test navigation on mobile and desktop
   - Verify form submissions work
   - Check responsive design across devices

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Notes

- Form submissions currently show toast notifications but don't actually submit data
- You'll need to integrate with Squarespace's form system or a third-party service
- Images paths need to be updated to match your Squarespace file structure
- Some Squarespace templates may have conflicting CSS that needs to be overridden
