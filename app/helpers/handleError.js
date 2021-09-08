const httpError = (res, error) => {
    res.status(500).json({
        data: "No eres tú, soy yo. algo anda mal conmigo",
        error: error
    })
}

module.exports = httpError;