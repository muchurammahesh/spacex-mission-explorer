import "@testing-library/jest-dom";

beforeEach(() => {
  localStorage.clear();
});

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
};