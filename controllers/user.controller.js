const generateNewURL = async function (id) {
    const baseUrl = process.env.BASE_URL
    return `${baseUrl}/user/${id}`
}

module.exports = generateNewURL
