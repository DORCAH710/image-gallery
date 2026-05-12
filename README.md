# Responsive Image Gallery

A modern, responsive image gallery built with vanilla JavaScript, HTML, and CSS. Features smooth animations, category filtering, lightbox viewing, and image effects.

## Features

- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Category Filtering**: Filter images by Nature, Architecture, People, Abstract, or view All
- **Lightbox View**: Full-screen image viewing with navigation
- **Image Effects**: Apply filters like Grayscale, Sepia, High Contrast, Cool Hue
- **Slideshow Mode**: Auto-play through images with 3.5-second intervals
- **Hover Effects**: Smooth zoom and caption reveal on hover
- **Keyboard Navigation**: Arrow keys and Escape for lightbox control
- **Accessibility**: ARIA labels, keyboard support, focus management

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Git for version control

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DORCAH710/image-gallery.git
   cd image-gallery
   ```

2. **Open in browser:**
   - Open `index.html` in your web browser
   - Or use a local server for better experience:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Usage

### Viewing Images
- Click any image to open in lightbox view
- Use Prev/Next buttons or arrow keys to navigate
- Press Escape to close lightbox

### Filtering
- Click category buttons (All, Nature, Architecture, etc.) to filter images
- Filters work with lightbox navigation

### Image Effects
- Select an effect from the dropdown to apply to all gallery images
- Effects: Natural, Grayscale, Sepia, High Contrast, Cool Hue

### Slideshow
- Click "Start Slideshow" to begin auto-play
- Images change every 3.5 seconds
- Click "Stop Slideshow" to end

## Project Structure

```
image-gallery/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Image files (image-1.jpg to image-31.jpg)
└── README.md           # This documentation
```

## Customization

### Adding Images
1. Place your images in the `images/` folder
2. Name them `image-1.jpg`, `image-2.jpg`, etc.
3. Update the HTML in `index.html` to include new images
4. Set appropriate `data-category` attributes for filtering

### Modifying Categories
Edit the filter buttons in `index.html` and update `data-category` attributes on gallery items.

### Changing Effects
Modify the `effectMap` object in `script.js` to add new CSS filters.

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Demo

View the live demo at: [https://dorcah710.github.io/image-gallery](https://dorcah710.github.io/image-gallery) (if GitHub Pages is enabled)

---

Built with ❤️ using vanilla web technologies.