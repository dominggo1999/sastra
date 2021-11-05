import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
const Contact = lazy(() => import('./pages/Contact'));
const Authors = lazy(() => import('./pages/Authors'));
const Tags = lazy(() => import('./pages/Tags'));
const TagSingle = lazy(() => import('./pages/TagSingle'));
const AccountFree = lazy(() => import('./pages/AccountFree'));
const AccountPaid = lazy(() => import('./pages/AccountPaid'));
const Membership = lazy(() => import('./pages/Membership'));
const Page404 = lazy(() => import('./pages/Page404'));

// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/tags" component={Tags} />
        <Route exact path="/tag-single" component={TagSingle} />
        <Route exact path="/account-free" component={AccountFree} />
        <Route exact path="/account-paid" component={AccountPaid} />
        <Route exact path="/membership" component={Membership} />
        {/* 404 PAGE */}
        <Route path="*" component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
