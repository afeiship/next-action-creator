# next-action-creator
> Redux action creator methods

## install:
```bash
npm install -S afeiship/next-action-creator --registry=https://registry.npm.taobao.org
```

## apis:
| api   | args                     | description                |
|-------|--------------------------|----------------------------|
| bind  | actionCreator, dispatch  | bind action with dispatch  |
| binds | actionCreators, dispatch | bind actions with dispatch |


## usage:
```js
import NxActionCreator from 'next-action-creator';
import { createStore } from 'redux';

const store = createStore(/* YOUR OPTIONS */);
const actionCreators = {
  memory: function(inData) {
    return {
      type: 'memory',
      data: inData
    };
  }
};

// use binds:
const actions = NxActionCreator.binds(actionCreators, store.dispatch);

// dispatch by functional:
actions.memory({ test: 'hello redux' });
```
