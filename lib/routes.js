FlowRouter.route('/', {
    name: 'home',
    action(){
        if (Meteor.userId()) {
            FlowRouter.go('project-screen')
        }
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/project-screen', {
    name: 'project-screen',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'Projects'});
    }
});

FlowRouter.route('/project/:id', {
    name: 'project',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'ProjectSingle'});
    }
});

