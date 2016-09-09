Meteor.publish('projects', function projectsPublication() {
    return Projects.find({PersonAssignedTheProject : this.userId });

    });

Meteor.publish('tasks', function taskManager() {
    return Tasks.find({});
});

Meteor.publish('singleTask', function projectsPublication(id) {
    check(id,String);
    return Tasks.find({_id : id});

});

Meteor.publish('tasks', function projectsPublication(id) {
    check(id,String);
    return Tasks.find({});

});