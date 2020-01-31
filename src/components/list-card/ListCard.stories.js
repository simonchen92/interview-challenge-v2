import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

const headerList = ['Header1', 'Header2', 'Header3']

stories
  .add('with text', () => (
    <ListCard 
    header={'Header'} 
    items={['Item 1', 'Item 2']}></ListCard>
  ))
  .add('with some emoji', () => (
    <ListCard
    header={'Header'} items={['😀 😎 👍 💯']}>
    </ListCard>
  ))
  .add('with custom themes', () => {
    const header = select('Custom Theme', headerList, headerList[0]);
    return <ListCard 
    header={header} 
    items={['Item 1', 'Item 2', 'Item 3']}></ListCard>
   });