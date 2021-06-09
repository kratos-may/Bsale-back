const productRouter = require("./product.route");
const categoryRouter = require("./category.route");

exports.load = (app) => {
    app.use("/product", productRouter);
    app.use("/category",categoryRouter);
    return app;
};

