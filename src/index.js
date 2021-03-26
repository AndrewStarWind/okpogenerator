import { generate } from './utils/okpoGenerator';
import './index.css';

const IECheckbox = document.querySelector('#ie');
const Input = document.querySelector('#okpo');
const Button = document.querySelector('#generate')

Button.addEventListener('click', () => Input.value = generate(!!IECheckbox.checked));