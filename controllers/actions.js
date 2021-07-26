const Contact = require('../models/contacts');

//Create and save new contact
exports.createContact = async (req,res) => {
    const contacts = new Contact({
        name: req.body.name,
        telephone: req.body.telephone
    });
    await contacts.save().then((data) =>{
         res.json({
             data: data
         });
    }).catch(err =>{
         res.json({
             message: "erreur"
         });
    })
}

//recuperer les donnees
exports.recupAllContact = async (req,res) => {
    try {
        const dataContact = await Contact.find({});
        res.status(200).json({
            data: dataContact
        });
    } catch (error) {
         res.json({
             message: error
         });
    }
}

//effacer les donnees
exports.delContact = async (req,res) => {
        const filter = {
            id: req.body.id
        }
        await Contact.deleteOne(filter).then((data) =>{
             res.json({data:data});
        }).catch((err) =>{
             res.json({msg:err});
        })
}

//update data

exports.updContact = async (req,res) => {
    const filter = {
        name: req.body.name
    }
    const updateData = {
        telephone: req.body.telephone
    }
    await Contact.updateOne(filter, updateData,{
        new: true
    }).then((data) =>{
         res.json({data:data});
    }).catch((err) =>{
         res.json({msg:err});
    })
}