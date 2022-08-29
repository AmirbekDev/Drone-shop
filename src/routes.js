import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product/Product";
import Spray from "./pages/Spray/Spray";

let routes = [
	{
		id: 1,
		path: "/",
        component: <Main/>,
	},
	{
		id: 2,
		path: "/about",
		component: <About/>,
	},
	{
		id: 3,
		path: "/catalog",
		component: <Catalog/>,
	},
	{
		id: 4,
		path: "/contact",
		component: <Contact/>,
	},
	{
		id: 5,
		path: "/news",
		component: <News/>,
	},
	{
		id: 6,
		path: "/product",
		component: <Product/>,
	},
	{
		id: 7,
		path: "/spray",
		component: <Spray/>,
	},
	{
		id: 8,
		path: "/*",
		component: <PageNotFound/>,
	},
]

export default routes;