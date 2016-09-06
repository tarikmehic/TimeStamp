
Template.ProjectSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleProject', id);
    });
});
Template.ProjectSingle.helpers({
    project: ()=> {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    }
});
