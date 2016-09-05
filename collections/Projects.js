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

    PersonAssignedTheProject: {
        type: String,
        autoValue: function () {
            return this.userId

        },

        autoform:{
            type: "hidden"
        }

    },

    name: {
        type: String,
        label: "Name of the project"
    },

    desc: {
        type: String,
        label: "Description"
    },

    workingHour: {
      type: [workingHours]
    },

    workingOnThisProject: {
      type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
          type: "hidden"
        }
    },

    Client: {
        type: String,
        label: "Client"

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