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

function ProductsIndex() {}

function Footer() {}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
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
