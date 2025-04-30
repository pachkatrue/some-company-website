# Some Company Website

This is a responsive website for "Some Company" built with Next.js, TypeScript, Material UI, and Styled Components. The project includes a main landing page and a contact form with a backend API endpoint.

## Features

- Responsive design for all devices
- Optimized YouTube video embed
- Contact form with validation and submission
- SEO optimization including Open Graph and Twitter card tags
- Core Web Vitals optimizations
- Accessibility compliance

## Technical Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **UI Library**: Material UI
- **Styling**: Styled Components (CSS-in-JS)
- **Optimizations**: Lite YouTube Embed for better LCP

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pachkatrue/some-company-website.git
cd some-company-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

To start the production server:
```bash
npm run start
# or
yarn start
```

## Deployment

The project can be easily deployed to various platforms:

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel automatically detects Next.js settings
3. Deploy

## CSS and Styling Techniques

### Advanced CSS Techniques Used

1. **CSS Variables with Dynamic Properties**:
   - The project uses CSS variables to create dynamic theming capabilities
   - Integrated with Styled Components for component-level theming

2. **Scroll-Linked Animations**:
   - Custom implementation of Intersection Observer API to trigger animations when elements enter the viewport
   - Smooth transitions and reveals as users scroll through the page

3. **Focus Visible Animations**:
   - Enhanced focus indicators with subtle animations to improve accessibility
   - Better visual feedback for keyboard users without disrupting the design

4. **Container Queries**:
   - Components respond to their parent container's size rather than just the viewport
   - More refined control over responsive layouts

5. **CSS Grid with Auto-Placement**:
   - Advanced grid layout that automatically adjusts based on content and available space
   - Content-aware placement of items for better use of space

### Optimization Techniques

1. **CSS Chunking**:
   - CSS is code-split along with JavaScript to reduce initial load size
   - Critical CSS is inlined for faster first paint

2. **Preloading Critical Assets**:
   - Key styles and assets are preloaded for better performance
   - Improved Core Web Vitals metrics, especially LCP

## SEO Implementation

### Metadata and Tags

- Proper heading hierarchy (h1, h2, h3) for better content structure
- Descriptive meta tags for better search engine understanding
- Appropriate alt text for all images

### Open Graph & Twitter Cards

- Implemented Open Graph tags for better social media sharing
- Twitter card tags for optimized Twitter sharing
- Custom preview images designed for different social platforms

### Performance Considerations

- Optimized Core Web Vitals:
  - LCP (Largest Contentful Paint) improved by lazy-loading the YouTube video
  - FID (First Input Delay) optimized by deferring non-critical JavaScript
  - CLS (Cumulative Layout Shift) minimized by reserving space for dynamic content

## Accessibility

- ARIA labels implemented where necessary
- Proper semantic HTML5 elements
- Keyboard navigation support
- High color contrast for readability
- Screen reader friendly content structure

## Assumptions Made

1. **Content Management**: The website content is currently hardcoded, assuming a small site with infrequent content changes. For a production site, integration with a CMS might be necessary.

2. **Backend Processing**: The contact form data is currently only logged to the console. In production, this would likely connect to a CRM, email service, or database.

3. **Authentication**: No user authentication is implemented as it wasn't part of the requirements. If needed, Next.js Auth solutions could be added.

4. **Analytics**: No analytics are currently implemented, but the site is structured to easily add Google Analytics or similar services.

5. **Internationalization**: The site is currently in English only. For multi-language support, next-i18next could be added.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
