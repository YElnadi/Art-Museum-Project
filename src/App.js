import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <div className="page-wrapper">
      <Switch>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>
            Look, but Don't Touch. Please select a Gallery in the navigation
            bar.
          </p>
        </Route>

        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>

        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
      <GalleryNavigation galleries={harvardArt.records} />

    </div>
  );
}

export default App;
