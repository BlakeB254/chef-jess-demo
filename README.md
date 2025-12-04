# Chef Jess Demo Website

This is a demo website for Chef Jess, built with **Next.js 16** and **PayloadCMS 3.0**.

## Features
- **High-End UI/UX**: Designed with a focus on elegance, featuring smooth scroll animations (Framer Motion) and a clean, typography-driven layout.
- **Interactive Order System**: A fully functional cart and checkout flow (frontend demo) with category filtering and slide-out cart drawer.
- **PayloadCMS Integration**: Backend configured with Collections for `Menu Items`, `Orders`, `Media`, and `Users`.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    cd web
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Access the Site**:
    - Website: `http://localhost:3000`
    - Payload Admin: `http://localhost:3000/admin` (Create your first user on load)

## Project Structure
- `web/src/app`: Next.js App Router pages.
- `web/src/components`: Reusable UI components (Navbar, CartDrawer, etc.).
- `web/src/context`: Global state (CartContext).
- `web/src/payload.config.ts`: PayloadCMS configuration.
- `web/public/assets`: Scraped images and static assets.

## Deployment to Cloudflare Pages

This project supports static export for deployment to Cloudflare Pages.

### Option 1: Git Integration (Recommended)

1. Connect your GitHub repo to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `cd web && npm install && npm run build:static`
   - **Build output directory**: `web/out`
   - **Node.js version**: `20`

### Option 2: Wrangler CLI

```bash
cd web
npm install
npm run build:static
npx wrangler pages deploy out --project-name=chef-jess-demo
```

### Static Export Notes

The `build:static` script:
- Temporarily disables PayloadCMS routes
- Uses `next.config.static.ts` for static HTML export
- Outputs to `web/out/` directory
- Restores original configuration after build

## Notes
- The Order system currently uses mocked data for demonstration purposes in `web/src/app/order/page.tsx`. To use dynamic data, uncomment the Payload fetching logic and populate the `menu-items` collection in the Admin panel.
- Images are located in `web/public/assets` and served via Next.js Image component.
