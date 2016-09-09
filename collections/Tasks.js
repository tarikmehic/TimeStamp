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
        label: "Description of the project"
    },


    workingHour: {
        type: [workingHours]
    },

    tasksDoneAt:{
        type: Date,
        label: "Started project at: ",
        autoValue: function () {

            return new Date()


        }
    }
});


Tasks.attachSchema( tasksSchema );