//Get blog
const getAllMarks = (req, res, next) => {
    res.json([
        {
            name:'arun',
            physics:88,
            maths:87,
            english:78
            },
            {
            name:'rajesh',
            physics:96,
            maths:100,
            english:95
            },
            {
            name:'moorthy',
            physics:89,
            maths:90,
            english:70
            },
            {
            name:'raja',
            physics:30,
            maths:25,
            english:40
            }
    ])
}


module.exports = {
    getAllMarks
};