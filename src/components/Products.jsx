export default function Products() {
  const products = [
    { name: "SmartPay Bank", icon: "bi-bank", color: "text-primary", link: "https://bank-stock-web.onrender.com/" },
    { name: "Stock", icon: "bi-graph-up-arrow", color: "text-success", link: "https://bank-stock-web.onrender.com/" },
    { name: "Tambola", icon: "bi-123", color: "text-danger", link: "https://tambola-wtwinds.onrender.com/" },
    { name: "HR Appraisal", icon: "bi-clipboard-check", color: "text-warning", link: "https://hr-appraisal-gc7z.onrender.com" },
    { name: "Tic Tac Toe", icon: "bi-grid-3x3", color: "text-dark", link: "https://tictactoe-bw7q.onrender.com" },
    { name: "InShot", icon: "bi-newspaper", color: "text-primary", link: "https://inshots.onrender.com" },
    { name: "Fitness Mall", icon: "bi-bag-check", color: "text-danger", link: "https://fitness-mall-4h2n.onrender.com" },
     { name: "Ecommerce", icon: "bi-cart", color: "text-warning", link: "https://ecommerce-7cio.onrender.com" },
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold text-center mb-5">Our Products</h2>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {products.map((product, index) => (
          <div key={index} className="col">
            <div className="card text-center shadow-sm h-100 border-0">
              <div className="card-body d-flex flex-column justify-content-center align-items-center py-4">

                <i
                  className={`bi ${product.icon} ${product.color}`}
                  style={{ fontSize: "48px" }}
                ></i>

                <h6 className="mt-3 fw-semibold">
                  {product.name}
                </h6>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stretched-link"
                ></a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
