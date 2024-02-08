import { handleClick } from './myCardHelpers.ts';

test('should call on navigate', () => {
  const navigateSpy = vi.fn();
  handleClick({ navigate: navigateSpy });
  expect(navigateSpy).toHaveBeenCalled();
});

test('should not throw an error', () => {
  const navigateMock = vi.fn();
  expect(() => handleClick({ navigate: navigateMock })).not.toThrow();
});
