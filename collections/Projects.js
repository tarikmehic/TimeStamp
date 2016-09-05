Projects = new Mongo.Collection('projects');

Projects.allow({
   insert: function(userId, doc) {

       return !!userId;

   }
});

workingHours = new SimpleSchema({
    name: {
        type: String
    },

    hoursOfWorkDone: {
        type: String
    }
});

projectsSchema = new SimpleSchema({

    name: {
        type: String,
        label: "Name"
    },

    desc: {
        type: String,
        label: "Description"
    },

    workingHour: {
      type: [workingHours]
    },

    client: {
        type: String,
        label: "Client",
        autoValue: function () {

            return this.userId


        }
    },

    createdAt:{
        type: Date,
        label: "Singed at: ",
        autoValue: function () {

            return new Date()


        }
    }

});

Projects.attachSchema( projectsSchema );