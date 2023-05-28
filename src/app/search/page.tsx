/* eslint-disable react/no-unescaped-entities */

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q ?? undefined;
  if (!query) {
    return (
      <section className="layout">
        <h3>Please use the search bar to search for recipes</h3>
      </section>
    );
  }
  return <section className="layout">searching for {query}</section>;
}
