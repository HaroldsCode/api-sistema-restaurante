const httpError = (res, error) => {
    res.json({
        status: 500,
        data: error,
        msg: "No eres tú, soy yo. algo anda mal conmigo"
    })
}

module.exports = httpError;