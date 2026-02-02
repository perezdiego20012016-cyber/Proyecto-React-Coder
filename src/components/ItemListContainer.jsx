import "./ItemListContainer.css";

function ItemListContainer({ texto }) {
  return (
    <main className="item-list">
      <h2>{texto}</h2>
    </main>
  );
}

export default ItemListContainer;