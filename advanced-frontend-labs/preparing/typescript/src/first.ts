export type User = {
    name: string;
    age: number;
    occupation: string;
};

// Define the users array
export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

// Define the logPerson function to accept a User type
export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

export function FirstTask() {
    console.log('Users:');
    users.forEach(logPerson);
}