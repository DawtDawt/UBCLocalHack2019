
// creates the user in the database
// requires: username: string, password: string, address: string, sections: array, driver: boolean, seats: number
// example sections array: [{term: "2019W", dept: "CPSC", id: "310", section: "101"}]
// returns username if successful
async function createUser(username, password, address, sections, driver, seats) {
    try {
        if (typeof username !== "string" && username.length === 0) {
            throw Error("username is invalid.");
        }
        if (typeof password !== "string" && password.length === 0) {
            throw Error("password is invalid");
        }
        if (typeof address !== "string" && address.length === 0) {
            throw Error("address is invalid");
        }
        if (typeof sections !== "array" && sections.length === 0) {
            throw Error("no valid sections were inputted");
        }
        if (typeof driver !== "boolean") {
            throw Error("driver is invalid");
        }
        if (typeof seats !== "number") {
            throw Error("seats is invalid");
        }

        const response = await fetch("http://localhost:8080/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                address,
                sections,
                driver,
                seats
            })
        });

        const content = await response.json();
        if (content.error) {
            if (content.error.hasOwnProperty("message")) {
                alert(content.error.message);
                console.log(content.error);
                throw Error(content.error);
            } else {
                console.log(content.error);
                alert("New Untracked Error In createUser: " + content.error.detail);
                throw Error(content.error);
            }
        } else {
            return (content.data);
        }
    } catch (error) {
        console.log(error);
    }
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