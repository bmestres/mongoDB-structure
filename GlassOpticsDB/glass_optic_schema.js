db.createCollection("client", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "client",
      "required": ["name", "address", "register_date"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "city", "postal_code", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "string"
            },
            "floor": {
              "bsonType": "string"
            },
            "door": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "postal_code": {
              "bsonType": "int"
            },
            "country": {
              "bsonType": "string"
            }
          }
        },
        "phone": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "register_date": {
          "bsonType": "date"
        },
        "recommended_by": {
          "bsonType": "objectId"
        }
      }
    }
  },

});
db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "prescription", "mount_type", "mount_colour", "price", "glass_colour", "provider_id"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "prescription": {
          "bsonType": "object",
          "title": "object",
          "required": ["left", "right"],
          "properties": {
            "left": {
              "bsonType": "decimal"
            },
            "right": {
              "bsonType": "decimal"
            }
          }
        },
        "mount_type": {
          "enum": ["RIMLESS", "PLASTIC", "METAL"]
        },
        "mount_colour": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "glass_colour": {
          "bsonType": "object",
          "title": "object",
          "required": ["left", "right"],
          "properties": {
            "left": {
              "bsonType": "string"
            },
            "right": {
              "bsonType": "string"
            }
          }
        },
        "provider_id": {
          "bsonType": "objectId"
        }
      }
    }
  },

});
db.createCollection("provider", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "provider",
      "required": ["name", "nif", "address"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "phone": {
          "bsonType": "string"
        },
        "fax": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "city", "postal_code", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "string"
            },
            "floor": {
              "bsonType": "string"
            },
            "door": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "postal_code": {
              "bsonType": "int"
            },
            "country": {
              "bsonType": "string"
            }
          }
        }
      }
    }
  },

});
db.createCollection("sale", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "sale",
      "required": ["product_line", "employee", "date", "time", "total_price", "client"],
      "properties": {
        "product_line": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["quantity", "price", "glasses"],
            "properties": {
              "quantity": {
                "bsonType": "int"
              },
              "price": {
                "bsonType": "decimal"
              },
              "glasses": {
                "bsonType": "objectId"
              }
            }
          }
        },
        "employee": {
          "bsonType": "object",
          "title": "object",
          "required": ["name"],
          "properties": {
            "name": {
              "bsonType": "string"
            }
          }
        },
        "date": {
          "bsonType": "date"
        },
        "time": {
          "bsonType": "timestamp"
        },
        "total_price": {
          "bsonType": "decimal"
        },
        "client": {
          "bsonType": "objectId"
        }
      }
    }
  },
});
