Template.Project.events({
   'click .log-hours': function () {
        Meteor.call('logToLogHours', this._id, this.workingOnThisProject)
   }
});