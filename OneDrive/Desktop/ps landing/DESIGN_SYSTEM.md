# Design System Documentation

## Overview

This design system is inspired by modern ed-tech platforms with a focus on clean, professional aesthetics combined with playful space-themed elements.

## Color Palette

### Primary Colors
```css
Primary Blue:
- 50:  #f0f9ff (lightest)
- 100: #e0f2fe
- 200: #bae6fd
- 300: #7dd3fc
- 400: #38bdf8
- 500: #0ea5e9 (base)
- 600: #0284c7 (primary CTA)
- 700: #0369a1
- 800: #075985
- 900: #0c4a6e (darkest)
```

### Accent Colors
```css
Purple: #8b5cf6
Pink:   #ec4899
Orange: #f97316
Yellow: #fbbf24
```

### Neutral Colors
```css
Gray Scale:
- 50:  #f9fafb
- 100: #f3f4f6
- 200: #e5e7eb
- 300: #d1d5db
- 600: #4b5563
- 700: #374151
- 800: #1f2937
- 900: #111827
```

## Typography

### Font Families
- **Display/Headings**: Poppins (600, 700, 800)
- **Body Text**: Inter (300, 400, 500, 600, 700)

### Font Sizes
```css
text-xs:   0.75rem  (12px)
text-sm:   0.875rem (14px)
text-base: 1rem     (16px)
text-lg:   1.125rem (18px)
text-xl:   1.25rem  (20px)
text-2xl:  1.5rem   (24px)
text-3xl:  1.875rem (30px)
text-4xl:  2.25rem  (36px)
text-5xl:  3rem     (48px)
text-6xl:  3.75rem  (60px)
```

### Line Heights
- Tight: 1.25
- Normal: 1.5
- Relaxed: 1.625
- Loose: 2

## Spacing System

### Base Unit: 4px (0.25rem)

```css
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
```

### Section Spacing
- Section padding: py-20 (80px vertical)
- Container padding: px-6 (24px horizontal)
- Card spacing: gap-6 or gap-8

## Layout

### Container
```css
max-width: 1200px
margin: 0 auto
padding: 0 1.5rem (24px)
```

### Grid System
```css
Mobile:  grid-cols-1
Tablet:  grid-cols-2
Desktop: grid-cols-3 or grid-cols-4
```

### Breakpoints
```css
sm:  640px  (mobile landscape)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1536px (extra large)
```

## Components

### Buttons

#### Primary Button
```jsx
className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-purple 
           text-white rounded-xl font-semibold hover:shadow-xl 
           transition transform hover:scale-105"
```

#### Secondary Button
```jsx
className="px-8 py-4 bg-white text-primary-600 border-2 
           border-primary-600 rounded-xl font-semibold 
           hover:bg-primary-50 transition"
```

#### Ghost Button
```jsx
className="px-6 py-3 bg-transparent border border-white 
           text-white rounded-lg hover:bg-white 
           hover:text-primary-600 transition"
```

### Cards

#### Standard Card
```jsx
className="bg-white p-6 rounded-2xl shadow-card 
           hover:shadow-xl transition-all"
```

#### Feature Card
```jsx
className="bg-gradient-to-br from-blue-50 to-purple-50 
           p-6 rounded-2xl border border-blue-100 
           hover:shadow-lg transition-all"
```

#### Pricing Card
```jsx
className="bg-white rounded-2xl shadow-card hover:shadow-xl 
           transition-all p-8"
```

### Shadows

```css
shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06)
shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.08)
shadow-xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

### Border Radius

```css
rounded-lg:   0.5rem  (8px)
rounded-xl:   0.75rem (12px)
rounded-2xl:  1rem    (16px)
rounded-3xl:  1.5rem  (24px)
rounded-full: 9999px
```

## Animations

### Framer Motion Variants

#### Fade In Up
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Fade In Left
```jsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

#### Scale In
```jsx
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
```

#### Hover Effects
```jsx
whileHover={{ y: -5, scale: 1.02 }}
whileTap={{ scale: 0.95 }}
```

### Transition Timing
- Fast: 0.2s
- Normal: 0.3s
- Slow: 0.6s

## Icons

### Icon Library
React Icons (react-icons)

### Icon Sizes
```css
text-sm:  14px
text-base: 16px
text-lg:  18px
text-xl:  20px
text-2xl: 24px
text-3xl: 30px
```

### Icon Colors
- Primary: text-primary-600
- Success: text-green-500
- Warning: text-yellow-500
- Error: text-red-500

## Gradients

### Background Gradients
```css
Primary: bg-gradient-to-r from-primary-600 to-accent-purple
Soft:    bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
Hero:    bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
```

### Text Gradients
```css
.text-gradient {
  background: linear-gradient(to right, #0284c7, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Forms

### Input Fields
```jsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg 
           focus:ring-2 focus:ring-primary-500 
           focus:border-transparent outline-none transition"
```

### Labels
```jsx
className="block text-sm font-semibold text-gray-700 mb-2"
```

### Error Messages
```jsx
className="bg-red-50 border border-red-200 text-red-700 
           px-4 py-3 rounded-lg text-sm"
```

### Success Messages
```jsx
className="bg-green-50 border border-green-200 text-green-700 
           px-4 py-3 rounded-lg text-sm"
```

## Navigation

### Navbar
- Height: 64px (py-4)
- Background: White with shadow on scroll
- Sticky: fixed top-0
- Z-index: 50

### Links
```jsx
className="text-gray-700 hover:text-primary-600 transition"
```

## Accessibility

### Focus States
```css
focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
```

### Color Contrast
- All text meets WCAG AA standards
- Minimum contrast ratio: 4.5:1

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows logical flow

## Responsive Design

### Mobile First Approach
1. Design for mobile (320px+)
2. Enhance for tablet (768px+)
3. Optimize for desktop (1024px+)

### Common Patterns
```jsx
// Stack on mobile, side-by-side on desktop
className="grid md:grid-cols-2 gap-8"

// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop
className="block md:hidden"
```

## Best Practices

1. **Consistency**: Use design tokens consistently
2. **Spacing**: Follow 4px base unit system
3. **Typography**: Maintain hierarchy with font sizes
4. **Colors**: Stick to defined palette
5. **Animations**: Keep subtle and purposeful
6. **Accessibility**: Always consider keyboard and screen readers
7. **Performance**: Optimize images and animations
8. **Mobile**: Test on real devices

## Component Checklist

When creating new components:
- [ ] Uses design system colors
- [ ] Follows spacing system
- [ ] Includes hover states
- [ ] Has focus states
- [ ] Responsive on all breakpoints
- [ ] Includes animations (if appropriate)
- [ ] Accessible (keyboard + screen reader)
- [ ] Consistent with existing components
