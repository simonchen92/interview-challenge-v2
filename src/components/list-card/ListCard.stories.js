import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

const headerList = ['header1', 'header2', 'header3']
const itemList = [
    ['item1', 'item2', 'item3'],
    ['text1', 'text2', 'text3']
]

stories
  .add('with text', () => <ListCard header={'header'} items={['a', 'b']}onClick={action('clicked')}>Hello ListCard</ListCard>)
  .add('with some emoji', () => (
    <ListCard
    header={'header'}
    items={['a', 'b']}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </ListCard>
  ))
  .add('with disabled prop activated', () => {
    const disabled = boolean('Disabled', true);
    return <ListCard 
    header={'header'}
    items={['a', 'b']}
    disabled={disabled} > Disabled </ListCard>
  })
  .add('with custom themes', () => {
    const header = select('custom theme', headerList, 'header1');
    return <ListCard 
    header={header} 
    items={[itemList]}> Themed </ListCard>
   });