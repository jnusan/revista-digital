import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PromotionList from '../Promotion/PromotionList';

export default function Routes() {

  return (
    <>
      <Switch>
          <Route path="/" exact component={PromotionList} />
      </Switch>
    </>
  )
}