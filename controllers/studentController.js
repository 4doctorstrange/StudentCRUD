const StudentModel = require('../models/student.js')

class StudentController{
    //This will take data from the form
    static createDoc = async (req,res)=>{
        //console.log(req.body)
        try{
            const {name,age,fees} = req.body
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            //saving doc
            const result = await doc.save()
            //console.log(result)
        } catch(err){
            console.log(err)
        }
        res.redirect("/student")
    }

    static getAllDoc = async (req,res) =>{
        try{
            const result  = await StudentModel.find()
            //console.log(result)
            res.render("index",{data: result})

        } catch(err){
            console.log(erro)
        }
    }

    static editDoc = async (req,res) =>{
        //console.log(req.params.id)
        try{
            const result = await StudentModel.findById(req.params.id)
            //console.log(result)
            res.render("edit" , {data: result})
        } catch(error){
            console.log(error)
        }

    }

    static updatetDocById = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)

        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            //console.log(result)
            
        } catch(error){
            console.log(error)
        }
        res.redirect("/student")
    }
    static deleteDocById = async (req,res) =>{
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            console.log(result)
        } catch(error){
            console.log(error)
        }
        res.redirect("/student")
    }
}

module.exports = StudentController