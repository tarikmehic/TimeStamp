Tasks = new Mongo.Collection('tasks');

Tasks.allow({
    insert: function(userId, doc) {

        return !!userId;

    },

    update: function(userId, doc) {

        return !!userId;

    }
});

workingHours = new SimpleSchema({
    segmentOfTheTask: {
        type: String
    },

    hoursOfWorkDone: {
        type: Number
    }
});

tasksSchema = new SimpleSchema({

    taskId: {
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
        label: "Name of the task"
    },

    desc: {
        type: String ,
        label: "Description of the task"
    },


    workingHour: {
        type: [workingHours]
    },

    tasksDoneAt:{
        type: Date,
        label: "Task completed at: ",
        autoValue: function () {

            return new Date()


        }
    }
});

Meteor.methods({
    deleteTask: function (id) {

        Tasks.remove(id);

    }
});

Tasks.attachSchema( tasksSchema );