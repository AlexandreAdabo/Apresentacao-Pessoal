const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "404.html",
  "/": "index.html",
  "/SiteApresentacaoPessoal/": "index.html",
  "/SiteApresentacaoPessoal/projetos.html": "projetos.html",
  "/projetos/": "projetos.html",
  "/SiteApresentacaoPessoal/contato.html": "contato.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  console.log(route, "MINHA ROUTE");
  const html = await fetch(route).then((data) => data.text());
  //console.log(html, "MEU HTML");
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
