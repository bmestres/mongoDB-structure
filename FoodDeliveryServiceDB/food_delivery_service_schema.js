db.createCollection("client", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "client",
      "required": ["name", "surnames", "phone"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surnames": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "post_code", "locality", "province"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "post_code": {
              "bsonType": "int"
            },
            "locality": {
              "bsonType": "string"
            },
            "province": {
              "bsonType": "string"
            }
          }
        },
        "phone": {
          "bsonType": "string"
        }
      }
    }
  }
});
db.createCollection("order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order",
      "required": ["product_line", "type", "client", "store", "total_price"],
      "properties": {
        "product_line": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["amount", "product"],
            "properties": {
              "amount": {
                "bsonType": "int"
              },
              "product": {
                "bsonType": "objectId"
              }
            }
          }
        },
        "type": {
          "enum": ["DELIVERY", "PICKUP"]
        },
        "delivery_date_time": {
          "bsonType": "object",
          "title": "object",
          "required": ["date", "time"],
          "properties": {
            "date": {
              "bsonType": "date"
            },
            "time": {
              "bsonType": "timestamp"
            }
          }
        },
        "client": {
          "bsonType": "objectId"
        },
        "store": {
          "bsonType": "objectId"
        },
        "total_price": {
          "bsonType": "decimal"
        },
        "note": {
          "bsonType": "string"
        },
        "employee": {
          "bsonType": "objectId"
        }
      }
    }
  }
});
db.createCollection("product", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "product",
      "required": ["name", "type", "description", "price"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "type": {
          "enum": ["PIZZA", "BURGER", "DRINK"]
        },
        "description": {
          "bsonType": "string"
        },
        "image": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "category": {
          "bsonType": "objectId"
        }
      }
    }
  }
});
db.createCollection("store", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "store",
      "required": ["address"],
      "properties": {
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "post_code", "locality", "province"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "post_code": {
              "bsonType": "int"
            },
            "locality": {
              "bsonType": "string"
            },
            "province": {
              "bsonType": "string"
            }
          }
        }
      }
    }
  }
});
db.createCollection("employee", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employee",
      "required": ["name", "surnames", "nif", "phone", "type", "store"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surnames": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        },
        "phone": {
          "bsonType": "string"
        },
        "type": {
          "enum": ["COOK", "COURIER"]
        },
        "store": {
          "bsonType": "objectId"
        }
      }
    }
  }
});
db.createCollection("category", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "category",
      "required": ["name"],
      "properties": {
        "name": {
          "bsonType": "string"
        }
      }
    }
  }
});