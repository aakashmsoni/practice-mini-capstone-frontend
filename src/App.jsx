import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#products-index">Product Index</a> | <a href="#products-new">New Product</a>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Price: <input type="number" />
        </div>
        <div>
          Image URL: <input type="url" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map(product) => (
        <div key={product.id} className="products">
          <h2>{product.title}</h2>
          
        </div>
      )
      }
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let products = [
    {
      id: 1,
      name: "Jelly Belly",
      description: "A soft bean-shaped candy filled with various flavors.",
      price: "3",
      image_url: "https://cdn-tp1.mozu.com/9046-11441/cms/11441/files/1717d1ab-8e9f-4370-8eb6-e34dce41b1ea?max=650",
    },
    {
      id: 2,
      name: "Hershey's Kisses",
      description: "A small droplet-shaped chocolate candy.",
      price: "5",
      image_url:
        "https://images.heb.com/is/image/HEBGrocery/001970187?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
    },
  ];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
