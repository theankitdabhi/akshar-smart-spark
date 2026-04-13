

## Plan: Add Logo to Header

### What changes
1. **Copy the uploaded logo** (`user-uploads://image-2.png`) to `src/assets/logo.png`
2. **Update Header component** to display the logo image next to the "Akshar Enterprise" text:
   - Import the logo from `@/assets/logo.png`
   - Add an `<img>` tag (approx 40-48px height) before the text in the logo area
   - The logo will appear on both scrolled and non-scrolled states
   - On mobile, the logo will be slightly smaller (~32px)

### Technical details
- File: `src/components/Header.tsx` — add logo import and `<img>` element inside the existing `<a href="#home">` link
- The logo has a white background which works well on both transparent and solid header states

