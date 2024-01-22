import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './Components/Button/Button';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Button onClick={() => console.log('Button is ckicked')} text='Кнопка' />)