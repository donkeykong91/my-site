import ExtraInfoCard from './ExtraInfoCard.tsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  EXTRA_INFO_CARD_BODY_TEXT,
  EXTRA_INFO_CARD_HEADING,
} from './constants.ts';

test('should have the "rocket launch" icon', () => {
  render(<ExtraInfoCard />);

  expect(screen.getByTestId('RocketLaunchIcon')).toBeInTheDocument;
});

test('should have the heading', () => {
  render(<ExtraInfoCard />);

  expect(screen.getByText(EXTRA_INFO_CARD_HEADING)).toBeInTheDocument;
});

test('should have the body', () => {
  render(<ExtraInfoCard />);

  expect(screen.getByText(EXTRA_INFO_CARD_BODY_TEXT)).toBeInTheDocument;
});
