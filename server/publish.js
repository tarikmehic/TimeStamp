Meteor.publish('projects', function () {
   return Projects.find({author: this.userId});
});