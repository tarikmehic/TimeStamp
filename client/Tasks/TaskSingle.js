Template.TaskSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleTask', id);
    });
});
Template.TaskSingle.helpers({
    task: ()=> {
        var id = FlowRouter.getParam('id');
        return Tasks.findOne({_id: id});
    }
});