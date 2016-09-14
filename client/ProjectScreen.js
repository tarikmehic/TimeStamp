Template.ProjectScreen.onCreated(function () {

    var self = this;
    self.autorun(function () {
        self.subscribe('projects');
    });

});

Template.ProjectScreen.helpers({
    projects: ()=> {
        return Projects.find({});
    }
});

