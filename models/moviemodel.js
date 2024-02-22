const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  poster: {
    type: String, // Assuming the avatar will be stored as a URL to an image
    default: "default_avatar",
  },
  yor: {
    type: Number,
    require: true,
  },
  plot: {
    type: String,
    require: true,
  },
  actors:[
    {
        type:String,
        ref:"Celebrity"
    }
  ],
  producer:
    {
        type:String,
        ref:"Celebrity"
    }
  
});

// Define pre-save middleware to populate actors and producer
movieSchema.pre('save', async function(next) {
  try {
      const Celebrity = mongoose.model('Celebrity'); // Import the Celebrity model
      const actorEmails = this.actors; // Assuming this.actors contains an array of actor emails
      const actorIds = [];
      for (const email of actorEmails) {
          const celebrity = await Celebrity.findOne({ email });
          if (celebrity) {
              actorIds.push(celebrity._id);
          }
      }
      const producerEmails = this.producer;
      const producerIds = [];
      for (const email of producerEmails) {
        const celebrity = await Celebrity.findOne({ email });
        if (celebrity) {
          producerIds.push(celebrity._id);
        }
    }

      if (actorIds.length > 0) {
          this.actors = actorIds;
          this.producer = producerIds; // Assuming the first actor is also the producer
      }
      next();
  } catch (error) {
      next(error);
  }
});


module.exports = mongoose.model('Movie',movieSchema);