function calculateDistance(numBuildings, numFloors, numParcels, parcelLocations) {
    const buildingDistance = 1;
    const floorDistance = 1;

    let currentBuilding = 0;
    let currentFloor = 0;
    let totalDistance = 0;

    for (let i = 0; i < numParcels; i++) {
        const [targetBuilding, targetFloor] = parcelLocations[i].split('-').map(Number);

        const distanceToBuilding = Math.abs(targetBuilding - currentBuilding) * buildingDistance;

        const distanceToFloor = Math.abs(targetFloor - currentFloor) * floorDistance;

        currentBuilding = targetBuilding;
        currentFloor = targetFloor;

        totalDistance += distanceToBuilding + distanceToFloor;
    }

    totalDistance += currentBuilding * buildingDistance;

    return totalDistance;
}

const numBuildings = parseInt(prompt("Enter the number of buildings in the society:"));
const numFloors = parseInt(prompt("Enter the number of floors in a building:"));
const numParcels = parseInt(prompt("Enter the total number of parcels to be delivered:"));

const parcelLocations = [];
for (let i = 0; i < numParcels; i++) {
    const parcelLocation = prompt(`Enter the delivery location for parcel ${i + 1} (format: a-b):`);
    parcelLocations.push(parcelLocation);
}

const totalDistance = calculateDistance(numBuildings, numFloors, numParcels, parcelLocations);
console.log(`The total distance to be traveled by the delivery boy is: ${totalDistance} units.`);
