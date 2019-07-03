export const people = [
    {
    id: "1",
    name: "Coco",
    score: 98
},
{
    id: "2",
    name: "Annie",
    score: 97
},
{
    id: "3",
    name: "Wonder",
    score: 99
}
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}