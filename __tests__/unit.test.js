// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number', () =>{

    expect(isPhoneNumber('818-246-8582')).toBe(true);
});

test('valid phone number with parentheses for area code', () =>{

    expect(isPhoneNumber('(626)-174-1864')).toBe(true);
});

test('invalid phone number (no dashes)', () => {

    expect(isPhoneNumber('9596920532')).toBe(false);
});

test('string that is not a phone number', () => {

    expect(isPhoneNumber('im so tired')).toBe(false);
});

test('valid email', () => {
    expect(isEmail('hustlergrinder@yahoo.com')).toBe(true);
});

test('valid email with underscore', () => {

    expect(isEmail('prof_powell@ucsd.edu')).toBe(true);
});


test('invalid email', () => {

    expect(isEmail('<I°_°I>@ucsd.edu')).toBe(false);
});

test('numbers in email address', () => {
    expect(isEmail('john359johnson@gmail56.com')).toBe(false)
});

test('valid strong password', () => {
    expect(isStrongPassword('D12_')).toBe(true);
});

test('valid strong password at maximum length', () => {
    expect(isStrongPassword('D12_GNQ260__14d')).toBe(true);
});

test('invalid strong password', () => {
    expect(isStrongPassword('Wow!SoStrong_;D')).toBe(false);
});

test('password exceeds maximum length', () => {
    expect(isStrongPassword('1234567890abcdefghijkkmnndf')).toBe(false);
});

test('valid date for MM/DD/YYYY (two digits)', () => {
    expect(isDate('05/05/2026')).toBe(true);
});

test('valid date for DD/MM/YYYY (one digit)', () => {
    expect(isDate('6/7/1967')).toBe(true);
});

test('uses dashes instead of slashes for date', () => {
    expect(isDate('05-05-2026')).toBe(false);
});

test('invalid date with longer length for year', () => {
    expect(isDate('07/29/20026')).toBe(false);
});

test('valid hex color (3 chars)', () => {
    expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color (6 chars)', () => {
    expect(isHexColor('003333')).toBe(true);
});

test('hex color uses invalid chars', () => {
    expect(isHexColor('#4>2')).toBe(false);
});

test('double hashtag for hex color', () => {
    expect(isHexColor('##9fc')).toBe(false);
});