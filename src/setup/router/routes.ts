import { lazy } from 'react';
import { Home, Gnomes, Search, About } from './pages';
import { Gnome } from './pages/gnomes/gnome/Gnome';


type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent, // Uppercase obhligatorio porque es un componente de react.
    name: string,
    showOnNavBar: boolean 
}


export const routes : Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Home',
        showOnNavBar: true
    },
    {
        to: '/gnomes',
        path: 'gnomes',
        Component: Gnomes,
        name: 'Gnomes',
        showOnNavBar: true
    },
    {
        to: '/search',
        path: 'search',
        Component: Search,
        name: 'Search',
        showOnNavBar: true
    },
    {
        to: '/about',
        path: 'about',
        Component: About,
        name: 'About',
        showOnNavBar: true
    },
    {
        to: '/gnome/:id',
        path: 'gnome/:id',
        Component: Gnome,
        name: 'Gnome',
        showOnNavBar: false
    },
]