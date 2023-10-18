import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import {GlobalStyles} from "./Styles/Globalstyle";
import {
    Home,
    Products,
    Blogs,
    PageNotFound,
    Shop,
    WishList,
    SelectOption,
    Checkout,
} from "./pages";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {QueryClient, QueryClientProvider} from "react-query";
import {PersistGate} from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const client = new QueryClient();
const persistor = persistStore(store);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/shop',
                element: <Shop/>,
            },
            {
                path: '/products',
                element: <Products/>,
            },
            {
                path: '/blog',
                element: <Blogs/>,
            },
            {
                path: '/wishlist',
                element: <WishList/>,
            },
            {
                path: '/checkout',
                element: <Checkout/>,
            },
            {
                path: '/products/:to',
                element: <SelectOption/>,
            },
        ]
    },

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={client}>
                    <GlobalStyles/>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </>
);
