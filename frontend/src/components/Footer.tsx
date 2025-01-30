// src/components/Footer.tsx
function Footer() {
    return (
      <footer className="bg-gray-100 mt-4">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DemoStore - All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  