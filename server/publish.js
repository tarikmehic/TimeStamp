Meteor.publish('projects', function projectsPublication() {
    return Projects.find({PersonAssignedTheProject : this.userId });

    });

Meteor.publish('singleProject', function projectsPublication(id) {
    check(id,String);
    return Projects.find({_id : id});

});