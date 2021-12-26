import { useContext } from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import Download from "./Download";
import Loader from "./Loader";
import { AutoSizer, List } from "react-virtualized";

function Content() {
  // for (const brand in BrandsData) {
  //     console.log(brand);
  // }

  const { brands, selectedBrands } = useContext(MainContext);

  const rowRenderer = ({ key, index, style, isScrolling }) => {
    const content = isScrolling ? <Loader /> : <Brand brand={brands[index]} />;
    return (
      <div style={style} key={key}>
        {content}
      </div>
    );
  };

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className="brands">
        {/* {brands.map((brand) => (
          <Brand key={brand.slug} brand={brand} />
        ))} */}

        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={113}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
}

export default Content;
