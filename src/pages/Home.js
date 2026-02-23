import Products from "../components/Products";

export default function Home() {
  return (
    <>
      {/* ===== COMPANY HEADER ===== */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">WT Winds</h1>
          <p className="lead mt-3">
            Professional Training & Internship Platform
          </p>
        </div>
      </div>

      {/* ===== OUR PRODUCTS SECTION (Reuse Component) ===== */}
      <Products />
    </>
  );
}

