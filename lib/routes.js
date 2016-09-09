//Redirecting routs to home/project screen

if (Meteor.isClient) {
    Accounts.onLogin(function () {

        FlowRouter.go('project-screen');

    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });

}



FlowRouter.triggers.enter([function (context, redirect) {

    if(!Meteor.userId()){
        FlowRouter.go('home');
    }

}]);

//Routing

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

FlowRouter.route('/projects-selection', {
    name: 'projects-selection',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'ProjectScreen'});
    }
});

FlowRouter.route('/task/:id', {
    name: 'task',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'TaskSingle'});
    }
});

FlowRouter.route('/project-selection/:id', {
    name: 'project',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'ProjectSingle'});
    }
});
