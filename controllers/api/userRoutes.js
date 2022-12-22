const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res)=>{
    console.log("Being pinged")
    console.log(req.body)
    try {
        const userData = await User.create(req.body)
        res.send(userData)
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;
