// Function to add a new housemate
export default function addHousemate(name) {
    const newHousemate = {
        name,
        chores: [],
        points: 0
    };
    setHousemates(prevHousemates => [
        ...prevHousemates,
        newHousemate
    ]);
};
