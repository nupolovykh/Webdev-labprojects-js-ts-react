// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// react-scripts@5.0.1 runs Jest 27, which reads neither package "exports" (hence
// the react-router/dom mapping in package.json) nor provides TextEncoder in
// jsdom. React Router 7 needs both.
import { TextDecoder, TextEncoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });
