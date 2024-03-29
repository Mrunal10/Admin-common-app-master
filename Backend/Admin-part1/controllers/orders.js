const Orders = require('../../models/orders');
const asyncHandler = require('../../middleware/async');
const bcrypt = require('bcrypt');

// 4.Connection to db
console.log('attempting to connect')

const getOrderCount = asyncHandler(async(req,res)=>{
    let totalorder=await Orders.countDocuments();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let todaysorder=await Orders.countDocuments({orderDate: {$gte: today}});
    let cancelledcount=await Orders.countDocuments({status:'cancelled'});
    res.json({totalorder,todaysorder,cancelledcount});
})

const fetchAllOrders = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults)
})

const updateOrderById = asyncHandler(async (req, res, next) => {

    let orders = await Orders.findByIdAndUpdate({ _id: req.params._id }, { status:req.body.status }, {
        new: true,
        runValidators: true
    })
    console.log(orders)
    if (!orders) throw new Error(`Order id ${req.params._id} not found`)
    res.json({ success: true, data: orders,message:"order details updated successfully" });

})

const addOrder = asyncHandler(async (req, res, next) => {
    //Operatons on model

    let order = await Orders.create(req.body);
    console.log(order);
    res.status(201).json({ success: true, data: order })
})
const ordersCount = asyncHandler(async (req, res) => {
    // let orders = await Orders.count({ status: req.params.status })
    const statusArr = [
        { "New": 0 },
        { "Packed": 0 },
        { "Shipped": 0 },
        { "Completed": 0 },
        { "Cancelled": 0 },
        { "Delayed": 0 }
    ]

    for (let index = 0; index < statusArr.length; index++) {
        const element = statusArr[index];
        for (var key in element) {
            let count = await Orders.count({ status: key.toLowerCase() })
            console.log(key + "-->  " + count);
            statusArr[index][key] = count
        }

    }

    // for (let index = 0; index < statusArr.length; index++) {
    //     const element = array[index];
    //     let count = await Orders.count({ status: element })
    //     statusCount.push(count)
    //     console.log(count);
    // }
    // console.log(statusCount);
    res.json({ success: true, data: statusArr })
    // res.send('count')

})



module.exports = { updateOrderById, fetchAllOrders, addOrder,getOrderCount,ordersCount };