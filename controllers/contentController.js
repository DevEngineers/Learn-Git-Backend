const { product } = require("../models/Content");

async function createContent(params, callback) {
  if (!params.title) {
    return callback(
      {
        message: "Product Name Required",
      },
      ""
    );
  }

  const productModel = new product(params);
  productModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getContents(params, callback) {
  const title = params.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  product
    .find(condition)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getContentById(params, callback) {
  const productId = params.productId;

  product
    .findById(productId)
    .then((response) => {
      if (!response) callback("Not found Product with id " + productId);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function updateContent(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndUpdate(productId, params, { useFindAndModify: false })
    .then((response) => {
      if (!response)
        callback(
          `Cannot update Tutorial with id=${productId}. Maybe Tutorial was not found!`
        );
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function deleteContent(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndRemove(productId)
    .then((response) => {
      if (!response)
        callback(
          `Cannot delete Product with id=${productId}. Maybe Product was not found!`
        );
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}


exports.create = (req, res, next) => {
      var model = {
        title: req.body.title,
        content: req.body.content,
      };

      createContent(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
}

exports.findAll = (req, res, next) => {
  var model = {
    title: req.query.title,
  };

  getContents(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.findOne = (req, res, next) => {
  var model = {
    productId: req.params.id,
  };

  getContentById(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.update = (req, res, next) => {
      var model = {
        productId: req.params.id,
        title: req.body.title,
        content: req.body.content,
      };

      updateContent(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
}


exports.delete = (req, res, next) => {
  var model = {
    productId: req.params.id,
  };

  deleteContent(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
