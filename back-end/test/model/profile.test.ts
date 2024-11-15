import { set } from 'date-fns';
import { Profile } from '../../model/profile';
import { Role } from '../../types';

// start date

const startDate = set(new Date(), { hours: 8, minutes: 30 });

test('given: missing username, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: '',
        bio: 'I love to program and to type fast.',
        avgWPM: 122.34,
        highestWPM: 145.56,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Username is required');
});

test('given: missing bio, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: '',
        avgWPM: 122.34,
        highestWPM: 145.56,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Bio is required');
});

test('given: negative avgWPM, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: -1,
        highestWPM: 145.56,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Average WPM must be positive');
});

test('given: missing avgWPM, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: undefined as any,
        highestWPM: 145.56,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Average WPM is required');
});

test('given: negative highestWPM, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: 120.23,
        highestWPM: -1,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Highest WPM must be positive');
});

test('given: missing highestWPM, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: 120.56,
        highestWPM: undefined as any,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Highest WPM is required');
});

test('given: missing role, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: 122.34,
        highestWPM: 145.56,
        startDate: startDate,
        role: null as any,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Role is required');
});

test('given: missing start date, when: profile is created, then: an error is thrown', () => {
    // given

    const invalidProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: 122.34,
        highestWPM: 145.56,
        startDate: undefined as any,
        role: Role.Player,
    };

    // when
    const profile = () => new Profile(invalidProfile);

    // then
    expect(profile).toThrow('Start date is required');
});

test('given: valid values for a profile, when: profile is created, then: profile is created with those values', () => {
    // given

    const validProfile = {
        username: 'johndoe',
        bio: 'I love to program and to type fast.',
        avgWPM: 122.34,
        highestWPM: 145.56,
        startDate: startDate,
        role: Role.Player,
    };

    // when
    const profile = new Profile(validProfile);

    // then
    expect(profile.getUsername()).toEqual(validProfile.username);
    expect(profile.getBio()).toEqual(validProfile.bio);
    expect(profile.getAvgWPM()).toEqual(validProfile.avgWPM);
    expect(profile.getHighestWPM()).toEqual(validProfile.highestWPM);
    expect(profile.getStartDate()).toEqual(validProfile.startDate);
    expect(profile.getRole()).toBe(validProfile.role);
});
