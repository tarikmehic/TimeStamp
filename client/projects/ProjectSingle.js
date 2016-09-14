
Template.ProjectSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('assignedProject', id);
    });
});
Template.ProjectSingle.helpers({
    projects: ()=> {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    }
});
