const notFound= (req,res)=>{
    res.status(400).send('route doesnt exist...')
}

module.exports=notFound