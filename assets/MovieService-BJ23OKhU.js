const n="",i="";class p{async fetchPopularMovies({page:t}={page:1}){const a=`${i}/movie/popular?api_key=${n}&language=es-ES&page=${t}`,e=await fetch(a).then(o=>o.json()),s=JSON.parse(localStorage.getItem("bookmarked_movies"))??{};return e!=null&&e.results&&(e.results=e.results.map(o=>({...o,bookmarked:s[o.id]}))),e}async getMovie(t){const a=`${i}/movie/${t}?api_key=${n}&language=es-ES`;let e=await fetch(a).then(s=>s.json());if(e){const s=`${i}/movie/${t}/videos?api_key=${n}&language=es-ES`,o=await fetch(s).then(c=>c.json());e.videos=o.results}return e}}export{p as M};
