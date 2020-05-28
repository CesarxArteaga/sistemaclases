const {Pool} = require("pg");
const pool = new Pool({
    user: 'nrbtdmovhgfreh', 
    host: 'ec2-18-233-137-77.compute-1.amazonaws.com',
    database: 'd6lkp0hr41lqf0', 
    password: '4bfaab48055e2105f91639cba4bc264a80d14e2a83313dd858602be8f88579dc',
    port: 5432,
    ssl: true,
})

module.exports = pool;