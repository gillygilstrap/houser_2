


module.exports = {
    getAllHouses: (req,res,next) => {
        const db = req.app.get('db')

        db.read_houses()
        .then(houses => {
            
            res.send(houses)
            
        })
    },

    addHouse: (req,res,next) => {
        const db = req.app.get('db');
        const {name, address, city, state, zipcode, mortgage, rent} = req.body
        db.create_house([name, address, city, state, zipcode, mortgage, rent])
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.error("---------------------error in create method------------------------------", err) 
        });
    },

    deleteHouse: (req,res,next) => {
        const db = req.app.get('db')
        const { id } = req.params;

        db.delete_house([id])
        .then( () => res.status(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log('---------------------Error in delete method--------------------', err)       
            })
    
    }
}


// ------------------------------------------------------------

// deleteItem: (req,res,nex) => {
//     const db = req.app.get('db')
//     const {id} = req.params;

//     db.delete_product([id])
//     .then( () => res.status(200))
//     .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log('---------------------Error in delete method--------------------', err)       
//         })

// getInventory: (req,res,next) => {
//     const db = req.app.get('db')

//     db.read_inventory()

//     .then( inventory => {
//         res.send(inventory)
//     } )
    
//     .catch( err => {
//         console.log('Something went wrong with read_inventory', err)
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//     });

// newItem: (req,res,next) => {
//     const db = req.app.get('db');
//     const {name, price , imgUrl} = req.body
      
//     db.create_product([name, price, imgUrl])
//     .then( () => res.sendStatus(200) )
//     .catch(err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.error("---------------------error in create method------------------------------", err) 
//     })

// module.exports = {
//     getInventory: (req,res,next) => {
//         const db = req.app.get('db')

//         db.read_inventory()
    
//         .then( inventory => {
//             res.send(inventory)
//         } )
        
//         .catch( err => {
//             console.log('Something went wrong with read_inventory', err)
//             res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//         });
//     },