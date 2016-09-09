Template.Projects.onCreated(function () {

    var self = this;
    self.autorun(function () {
        self.subscribe('tasks');
    });

});

Template.Projects.helpers({
    tasks: ()=> {

        return Tasks.find({});
    }
});