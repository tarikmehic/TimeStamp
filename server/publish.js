Meteor.publish('projects', function projectsPublication() {
    return Projects.find({
        $or: [
            {PersonAssignedTheProject : this.userId },
        ]
    });
});

