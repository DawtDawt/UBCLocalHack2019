
// creates the user in the database
// requires: username: string, password: string, address: string, sections: array, driver: boolean, seats: number
// example sections array: [{term: "2019W", dept: "CPSC", id: "310", section: "101"}]
// returns username if successful
async function createUser(username, password, address, sections, driver, seats) {
    // TODO
}

// login function for users
// requires: username: string, password: string
// returns true if allowed to login
async function confirmUser(username, password) {
    // TODO
}

// gets the nearest driver to username
// requires: valid username
// returns driver's username
async function getNearDriver(username) {
    // TODO
}

// gets information about the user
// requires: username
// returns address, sections, driver associated (null if none)
async function getUser(username) {
    // TODO
}

// gets information about the driver
// requires username that is a driver
// returns seatsAvailable
async function getDriver(username) {
    // TODO
}

// links username to the driver
// requires username and driver
// returns true if success
async function linkSeat(username, driver) {
    // TODO
}

// unlinks username to the driver
// requires username and driver
// returns true if success
async function unlinkSeat(username, driver) {
    // TODO
}

module.exports = {
    createUser,
    getUser,
    confirmUser,
    getNearDriver,
    getDriver,
    linkSeat,
    unlinkSeat
}