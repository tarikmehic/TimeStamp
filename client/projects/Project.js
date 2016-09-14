Template.Project.helpers({

    updateTaskId: function () {

    return this._id;

}});

Template.Project.events({
   'click .log-hours': function () {
        Meteor.call('logToLogHours', this._id, this.workingOnThisProject)
   },
    'click .fa-trash' : function () {

       Meteor.call('deleteTask', this._id);
        
    }
});