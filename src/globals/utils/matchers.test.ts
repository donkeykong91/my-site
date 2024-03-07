import { getPage } from './matchers.ts';
import * as CONSTANTS from '../constants.ts';

test('should get the "about me" page', () => {
  const pageRes = getPage({ page: CONSTANTS.ABOUT_ME });
  expect(pageRes).toEqual(CONSTANTS.ABOUT_ME_PAGE);
});

test('should get the "fun" page', () => {
  const pageRes = getPage({ page: CONSTANTS.FUN });
  expect(pageRes).toEqual(CONSTANTS.FUN_PAGE);
});

test('should get the "contact" page', () => {
  const pageRes = getPage({ page: CONSTANTS.CONTACT });
  expect(pageRes).toEqual(CONSTANTS.CONTACT_PAGE);
});

test('should get the "resume" page', () => {
  const pageRes = getPage({ page: CONSTANTS.RESUME });
  expect(pageRes).toEqual(CONSTANTS.RESUME_PAGE);
});

test('should get the "projects" page', () => {
  const pageRes = getPage({ page: CONSTANTS.PROJECTS });
  expect(pageRes).toEqual(CONSTANTS.PROJECTS_PAGE);
});

test('should get an empty string', () => {
  const EMPTY_STRING = '';
  const pageMock = 'blablabla';
  const pageRes = getPage({ page: pageMock });
  expect(pageRes).toEqual(EMPTY_STRING);
});
