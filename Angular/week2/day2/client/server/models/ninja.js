const mongoose = require('mongoose');

const {Schema} = mongoose;

const ninjaSchema = new Schema ({
  name: {
    type: String,
    minlength: 4
    required: true,
    trim: true
    },
    age: {
      type: Number,
      min: 13
    },
    belt: {
      type: String,
      minlength: 3,
      required: true,
      trim: true
    },
    location: {
      type: String,
      minlength: 4
      required: true,
      trim: true
    }
})

module.export = mongoose.model('Ninja', ninjaSchema);
