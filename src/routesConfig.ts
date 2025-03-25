// src/routesConfig.ts

import { lazy } from "react";
const Home = lazy(() => import('./pages/Home/Home'));
const Patients = lazy(() => import('./pages/Patients/Patrients'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const Schedule = lazy(() => import('./pages/Schedule/Schedule'));
const Billing = lazy(() => import('./pages/Billing/Billing'));


export const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/patients',
    component: Patients,
    exact: true,
  },
  {
    path: '/billing',
    component: Billing,
    exact: true,
  },
  {
    path: '/reports',
    component: Reports,
    exact: true,
  },
  {
    path: '/schedule',
    component: Schedule,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
];
