const validateBooks = (req, res, next) => {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
        return res.status(400).send('title,author,publishyear are required')
    }
    next();

};

export default validateBooks