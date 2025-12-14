import crypto from "crypto";

// generate randome sycreate key

const secretKey=crypto.randomBytes(32).toString("hex")

export default secretKey;