Projects = new Mongo.Collection('projects');

Projects.allow({
   insert: function(userId, doc) {

       return !!userId;

   },

    update: function(userId, doc) {

        return !!userId;

    }
});

workingHours = new SimpleSchema({
    nameOfTheTask: {
        type: String
    },

    hoursOfWorkDone: {
        type: Number
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

    // projectId: {
    //     type: String,
    //     autoValue: function () {
    //         return this.projectId
    //
    //     },
    //
    //     autoform:{
    //         type: "hidden"
    //     }
    //
    // },


    name: {
        type: String ,
        label: "Name of the project"
    },

    desc: {
        type: String ,
        label: "Description of the completed task"
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
        label: "Started project at: ",
        autoValue: function () {

            return new Date()


        }
    }
});
    Meteor.methods({
        logToLogHours: function (id, currentState) {
            Projects.update(id, {
                $set: {
                    workingOnThisProject: !currentState
                }
            });
        }
});

Projects.attachSchema( projectsSchema );