import Order from '../model/ordersModel';

export const createOrder = async (orderData: any) => {
    try {
        const order = await Order.create(orderData);
        return order;
    } catch (error) {
        throw new Error('Failed to create order');
    }
};

export const deleteOrder = async (orderId: number) => {
    try {
        const order = await Order.findByPk(orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        await order.destroy();
    } catch (error) {
        throw new Error('Failed to delete order');
    }
};
