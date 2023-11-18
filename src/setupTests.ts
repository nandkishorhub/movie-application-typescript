// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

const { TextDecoder, TextEncoder } = require("node:util");
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
})

// Establish API mocking before all tests.
// beforeAll(() => server.listen());

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => server.resetHandlers());

// // Clean up after the tests are finished.
// afterAll(() => server.close());

const { fetch, Request, Response, FormData } = require("undici");
global.fetch = fetch;
global.Request = Request;
global.Response = Response;
global.FormData = FormData;

// below code is for react-slick package error
// without below code it throws below error
// matchMedia not present, legacy browsers require a polyfill
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
