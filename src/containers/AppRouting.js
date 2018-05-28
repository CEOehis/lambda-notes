import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';

const AppRouting = () => (
  <BrowserRouter>
    <div>
      <NavbarMenu />
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>
);

export default AppRouting;