let orders: { [key: string]: any }[] = []; // Keep orders in memory

export const addToOrder = (order: any) => {
    const existingOrderIndex = orders.findIndex(o => o.id === order.id);

    if (existingOrderIndex !== -1) {
        // If item exists, update its quantity
        orders[existingOrderIndex].qty = order.qty;
    } else {
        // Add new item to orders
        orders = [...orders, order]; // Ensure new reference
    }
};

export const getOrders = () => [...orders]; // Return a new array reference

export const clearOrders = () => {
    orders = []; // Reset array properly
};
