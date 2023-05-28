import "./SearchBar.css";

export default function RecipesSearch({ callback }) {
  return (
    <form action="/search" className="form-control">
      <input
        name="q"
        type="text"
        placeholder="Search"
        className="input input-bordered"
      />
    </form>
  );
}
