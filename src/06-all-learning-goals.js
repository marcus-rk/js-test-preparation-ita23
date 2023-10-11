const weeklySalesDataExample = [
    {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
    {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
    {date: '2023-09-27', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-09-28', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-09-29', sales: [{item: 'Apple', quantity: 10, price: 1}, {item: 'Banana', quantity: 35, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-09-30', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-01', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-02', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-03', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-04', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-05', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-06', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-07', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-08', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-09', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-10', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-11', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-12', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-13', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-14', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]}
];


/**
 * This function generates a sales report for a given week.
 *
 * @param {array} salesData - An array of objects, each representing a day's sales.
 * Each object contains a date, and an array of items sold with their quantities and prices.
 * @returns {object} - An object containing total sales, best selling item, and the day with the highest sales.
 *
 * Usage:
 * const weeklySalesData = [
 *     {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
 *     {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
 *     // ... other days
 * ];
 * const report = generateSalesReport(weeklySalesData);
 * console.log(report);
 * // Outputs { totalSales: 55, bestSellingItem: 'Banana', highestSalesDay: {date: '2023-09-26', totalSales: 30} }
 */

function generateSalesReport(salesData) {
    // total sales / set datatype
    let totalSales = 0;

    // best-selling item / set object type
    let bestSellingItem = salesData[0].sales[0].item;

    // day with the highest sales / set object type
    let highestSalesDay = salesData[0];
    let highestSalesDaySale = 0;

    salesData.forEach((day) => {

        // find best-selling item that day
        // and calculate sales for that day
        let dateBestSeller = day.sales[0].item;
        let dateSales = 0;

        for (const product of day.sales) {
            const itemPrice = product.price;
            const itemQuantity = product.quantity;
            const itemSales = itemPrice * itemQuantity;

            // add to total sales that day
            dateSales += itemSales;

            // if item sales if higher than current item
            // set new best seller
            if (itemSales > dateBestSeller)
                dateBestSeller = product.item;

            // if date sales is new highest day sale
            // set new highest day sale and day
            if (dateSales > highestSalesDaySale) {
                highestSalesDaySale = dateSales;
                highestSalesDay = day;
            }
        }

        // check if best-selling item overall
        if (dateBestSeller > bestSellingItem)
            bestSellingItem = dateBestSeller;

        // check if highest-sales that day
        if (dateSales > highestSalesDaySale) {
            highestSalesDay = dateSales;
        }

        // add to total sales overall
        totalSales += dateSales;
    });

    return {
        totalSales: totalSales,
        bestSellingItem: bestSellingItem,
        highestSalesDay: {
            date: highestSalesDay.date,
            totalSales: highestSalesDaySale
        }
    }
}

/*
const weeklySalesData2 = [
    {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
    {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]}]

const report = generateSalesReport(weeklySalesData2);
console.log("Result", report);
*/

