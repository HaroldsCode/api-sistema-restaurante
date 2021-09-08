const checkOrigin = (req, res, next) => {
    const url = req.headers.origin;
    next()
}
module.exports = checkOrigin