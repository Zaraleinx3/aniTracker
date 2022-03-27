import { combineReducers } from "redux";
import { search } from "./search";
import { movieModal } from "./movieModal";
import { seriesModal } from "./seriesModal";
import { list } from "./list";
import { media } from "./media";

export default combineReducers({
  search,
  movieModal,
  seriesModal,
  list,
  media,
});
