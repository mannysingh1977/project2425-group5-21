import { User } from '../model/user';

const users = [
    new User({
        id: 1,
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@ucll.be',
        password: 'johnd123',
        role: 'player',
    }),
    new User({
        id: 2,
        username: 'janedoe',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@ucll.be',
        password: 'janed123',
        role: 'player',
    }),
    new User({
        id: 3,
        username: 'michaelking',
        firstName: 'Michael',
        lastName: 'King',
        email: 'michael.king@ucll.be',
        password: 'michael123',
        role: 'player',
    }),
    new User({
        id: 4,
        username: 'lindawalker',
        firstName: 'Linda',
        lastName: 'Walker',
        email: 'linda.walker@ucll.be',
        password: 'linda123',
        role: 'player',
    }),
    new User({
        id: 5,
        username: 'chrisjohnson',
        firstName: 'Chris',
        lastName: 'Johnson',
        email: 'chris.johnson@ucll.be',
        password: 'chrisj123',
        role: 'admin',
    }),
];

const getAllUsers = (): User[] => {
    return users;
};

const getUserById = (id: number): User | undefined => {
    return users.find((user) => user.getId() === id);
};

export default {
    getAllUsers,
    getUserById,
};
