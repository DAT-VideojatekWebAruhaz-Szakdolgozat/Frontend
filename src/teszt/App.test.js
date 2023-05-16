import { render, screen } from '@testing-library/react';
import App from '../App';
import {createMemoryHistory} from 'history'
import Jateklista from '../komponensek/Jateklista';
import { Bejelentkezes } from '../komponensek/Bejelentkezes';

test('Betöltődik az oldal', () => {
  expect(<App/>)
});
