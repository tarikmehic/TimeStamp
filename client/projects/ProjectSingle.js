
Template.ProjectSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleTask', id);
    });
});
Template.ProjectSingle.helpers({
    task: ()=> {
        var id = FlowRouter.getParam('id');
        return Tasks.findOne({_id: id});
    }
});
