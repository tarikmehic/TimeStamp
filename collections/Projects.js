Projects = new Mongo.Collection('projects');

Projects.allow({
   insert: function(userId, doc) {

       return !!userId;

   },

    update: function(userId, doc) {

        return !!userId;

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
        type: String ,
        label: "Name of the project"
    },

    desc: {
        type: String ,
        label: "Description of the project"
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

Projects.attachSchema(projectsSchema);