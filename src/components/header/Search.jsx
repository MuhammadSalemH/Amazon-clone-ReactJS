import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { fetchProducts } from "../../api/fetchProduct";
import Overlay from "../../ui/Overlay";

import { SearchOutlined } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filterationSlice";

const initialState = {
  searchTerm: "",
  searchResult: [],
  show: false,
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH") {
    return { ...state, searchTerm: action.payload, show: false };
  }

  if (action.type === "SEARCH_RESULT") {
    return {
      ...state,
      searchResult: state.searchTerm.length >= 1 ? action.payload : [],
      show: true,
    };
  }

  if (action.type === "SHOW") {
    return { ...state, show: !state.show };
  }

  if (action.type === "HIDE") {
    return { ...state, show: false };
  }

  return initialState;
};

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchState, dispatchSearch] = useReducer(searchReducer, initialState);
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchStart, setSearchStart] = useState(false);

  const { searchTerm, searchResult, show } = searchState;

  const inputChangeHandler = async (event) => {
    setSearchStart(true);
    dispatchSearch({ type: "SEARCH", payload: event.target.value });
    if (searchTerm) {
      const { data } = await fetchProducts();
      const result = data.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });

      dispatchSearch({
        type: "SEARCH_RESULT",
        payload: result,
      });
    }
  };

  const inputFocusedHandler = () => {
    setShowOverlay(true);
    dispatchSearch({ type: "SHOW" });
  };

  const inputBlurHandler = () => {
    setSearchStart(false);
  };

  const hideOverlayHandler = () => {
    setShowOverlay(false);
    dispatchSearch({ type: "HIDE" });
  };

  const searchHandler = () => {
    if (searchResult.length >= 1) {
      dispatch(filterActions.addFilteredItems(searchResult));
      setShowOverlay(false);
      navigate("/filtered");
      dispatchSearch({ type: "RESET" });
    }
  };

  const showResults = show && searchResult.length >= 1;
  return (
    <div className="relative z-30 text-sm flex-grow text-black bg-white hidden mdl:flex items-center h-[38px] rounded-md">
      <label
        htmlFor="search"
        className="min-w-[38px] bg-amazon_light absolute left-0 cursor-pointer h-full flex items-center justify-center rounded-tl-md rounded-bl-md"
      ></label>
      <input
        onChange={inputChangeHandler}
        onFocus={inputFocusedHandler}
        onBlur={inputBlurHandler}
        value={searchTerm}
        id="search"
        type="text"
        className="w-full h-full rounded-md focus:outline-0 focus:ring-4 focus:ring-amber-500 px-[50px] placeholder:text-grey-500 placeholder:font-roboto"
        placeholder="Search Amazon"
      />
      <button
        onClick={searchHandler}
        className="bg-amazon_yellow absolute right-0 cursor-pointer h-full flex items-center justify-center px-2 rounded-tr-md rounded-br-md"
      >
        <SearchOutlined />
      </button>

      {showOverlay && <Overlay onClick={hideOverlayHandler} index="20" />}

      <div className="absolute top-[100%] bg-white w-[calc(100%-60px)] ml-[38px] max-h-[300px] overflow-auto">
        {showResults && (
          <ul className={`${show ? "border-t" : ""}`}>
            {searchResult.map((result) => (
              <Link
                key={result.id}
                className="text-sm p-2 hover:bg-gray-200 block"
                to={`/${result.id}`}
                onClick={() => {
                  setShowOverlay(false);
                  dispatchSearch({ type: "RESET" });
                }}
              >
                {result.title}
              </Link>
            ))}
          </ul>
        )}
        {searchStart && searchResult.length === 0 && (
          <p className="p-2 text-center text-lg">No results matched.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
