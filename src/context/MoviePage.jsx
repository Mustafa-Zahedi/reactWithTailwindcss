import React from "react";
import MovieList from "./MovieList";

function MoviePage(props) {
  return (
    <div>
      <MovieList />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
          <button className="px-4 py-1 text-sm text-purple-800 font-semibold rounded-full border border-purple-100 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <div class="table w-80">
        <div class="table-header-group">
          <div class="table-row">
            <div class="table-cell text-left">Song</div>
            <div class="table-cell text-left">Artist</div>
            <div class="table-cell text-left">Year</div>
          </div>
        </div>
        <div class="table-row-group">
          <div class="table-row">
            <div class="table-cell">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div class="table-cell">Malcolm Lockyer</div>
            <div class="table-cell">1961</div>
          </div>
          <div class="table-row">
            <div class="table-cell">Witchy Woman</div>
            <div class="table-cell">The Eagles</div>
            <div class="table-cell">1972</div>
          </div>
          <div class="table-row">
            <div class="table-cell">Shining Star</div>
            <div class="table-cell">Earth, Wind, and Fire</div>
            <div class="table-cell">1975</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
